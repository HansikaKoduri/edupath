-- Edupath Supabase schema
-- Run this once in Supabase Dashboard -> SQL Editor.

create extension if not exists pgcrypto;

do $$
begin
  create type public.edupath_role as enum ('student', 'mentor', 'admin');
exception
  when duplicate_object then null;
end
$$;

do $$
begin
  create type public.saved_item_type as enum ('career', 'college');
exception
  when duplicate_object then null;
end
$$;

do $$
begin
  create type public.mentorship_status as enum (
    'requested',
    'accepted',
    'declined',
    'cancelled',
    'completed'
  );
exception
  when duplicate_object then null;
end
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role public.edupath_role not null default 'student',
  full_name text not null default '',
  phone text,
  education_level text,
  school_name text,
  study_stream text,
  areas_of_interest text[] not null default '{}',
  designation text,
  qualification text,
  years_experience numeric(4, 1),
  expertise text,
  organization text,
  biography text,
  avatar_url text,
  is_verified boolean not null default false,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_full_name_length check (char_length(full_name) <= 120),
  constraint profiles_phone_length check (phone is null or char_length(phone) <= 32),
  constraint profiles_biography_length check (biography is null or char_length(biography) <= 1000),
  constraint profiles_non_mentor_not_verified check (role = 'mentor' or not is_verified)
);

create table if not exists public.careers (
  id text primary key,
  name text not null,
  category text not null,
  summary text not null default '',
  qualifications text[] not null default '{}',
  eligibility text not null default '',
  entrance_exams text[] not null default '{}',
  skills text[] not null default '{}',
  courses text[] not null default '{}',
  job_roles text[] not null default '{}',
  further_study text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.colleges (
  id text primary key,
  name text not null,
  stream text not null,
  city text not null default '',
  institution_type text not null default '',
  course text not null default '',
  rating numeric(3, 1),
  website_url text,
  created_at timestamptz not null default now(),
  constraint colleges_rating_range check (rating is null or rating between 0 and 10)
);

create table if not exists public.saved_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  item_type public.saved_item_type not null,
  item_id text not null,
  created_at timestamptz not null default now(),
  unique (user_id, item_type, item_id)
);

create table if not exists public.roadmap_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  task_key text not null,
  title text not null,
  detail text not null default '',
  is_complete boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, task_key),
  constraint roadmap_title_length check (char_length(title) <= 160)
);

create table if not exists public.mentorship_sessions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles (id) on delete cascade,
  mentor_id uuid not null references public.profiles (id) on delete cascade,
  topic text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status public.mentorship_status not null default 'requested',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint mentorship_session_time check (ends_at > starts_at),
  constraint mentorship_topic_length check (char_length(topic) between 1 and 500),
  constraint mentorship_different_participants check (student_id <> mentor_id)
);

create table if not exists public.session_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.mentorship_sessions (id) on delete cascade,
  sender_id uuid not null references public.profiles (id) on delete cascade,
  recipient_id uuid not null references public.profiles (id) on delete cascade,
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now(),
  constraint message_body_length check (char_length(body) between 1 and 4000),
  constraint message_different_participants check (sender_id <> recipient_id)
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  title text not null,
  body text not null default '',
  read_at timestamptz,
  created_at timestamptz not null default now(),
  constraint notification_title_length check (char_length(title) <= 160),
  constraint notification_body_length check (char_length(body) <= 1000)
);

create table if not exists public.assessment_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  recommendations jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  constraint assessment_answers_object check (jsonb_typeof(answers) = 'object'),
  constraint assessment_recommendations_array check (jsonb_typeof(recommendations) = 'array')
);

create index if not exists saved_items_user_idx on public.saved_items (user_id, created_at desc);
create index if not exists roadmap_tasks_user_idx on public.roadmap_tasks (user_id, created_at);
create index if not exists mentorship_sessions_student_idx on public.mentorship_sessions (student_id, starts_at);
create index if not exists mentorship_sessions_mentor_idx on public.mentorship_sessions (mentor_id, starts_at);
create index if not exists session_messages_session_idx on public.session_messages (session_id, created_at);
create index if not exists notifications_user_idx on public.notifications (user_id, created_at desc);
create index if not exists assessment_results_user_idx on public.assessment_results (user_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create or replace function public.create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  requested_role text;
  requested_name text;
begin
  requested_role := coalesce(new.raw_user_meta_data ->> 'role', 'student');
  requested_name := coalesce(new.raw_user_meta_data ->> 'full_name', '');

  if requested_role not in ('student', 'mentor') then
    requested_role := 'student';
  end if;

  insert into public.profiles (id, role, full_name)
  values (new.id, requested_role::public.edupath_role, left(requested_name, 120))
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_edupath on auth.users;
create trigger on_auth_user_created_edupath
  after insert on auth.users
  for each row execute function public.create_profile_for_new_user();

create or replace function public.protect_profile_privileges()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if (
    new.role is distinct from old.role
    or new.is_verified is distinct from old.is_verified
    or new.verified_at is distinct from old.verified_at
  ) and coalesce(auth.jwt() ->> 'role', '') not in ('service_role', 'supabase_admin') then
    raise exception 'Role and mentor verification can only be changed by an administrator';
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_privileges on public.profiles;
create trigger protect_profile_privileges
  before update on public.profiles
  for each row execute function public.protect_profile_privileges();

create or replace function public.protect_session_changes()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  actor_role public.edupath_role;
begin
  if coalesce(auth.jwt() ->> 'role', '') in ('service_role', 'supabase_admin') then
    new.updated_at := now();
    return new;
  end if;

  if new.student_id is distinct from old.student_id
    or new.mentor_id is distinct from old.mentor_id
    or new.topic is distinct from old.topic
    or new.starts_at is distinct from old.starts_at
    or new.ends_at is distinct from old.ends_at
    or new.created_at is distinct from old.created_at then
    raise exception 'Session details cannot be changed after booking';
  end if;

  select p.role into actor_role
  from public.profiles p
  where p.id = auth.uid();

  if auth.uid() = old.student_id and new.status = 'cancelled' then
    null;
  elsif auth.uid() = old.mentor_id
    and actor_role = 'mentor'
    and new.status in ('accepted', 'declined', 'completed') then
    null;
  else
    raise exception 'You are not allowed to make this session change';
  end if;

  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists protect_session_changes on public.mentorship_sessions;
create trigger protect_session_changes
  before update on public.mentorship_sessions
  for each row execute function public.protect_session_changes();

create or replace function public.protect_message_changes()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if coalesce(auth.jwt() ->> 'role', '') in ('service_role', 'supabase_admin') then
    return new;
  end if;

  if new.session_id is distinct from old.session_id
    or new.sender_id is distinct from old.sender_id
    or new.recipient_id is distinct from old.recipient_id
    or new.body is distinct from old.body
    or new.created_at is distinct from old.created_at
    or auth.uid() is distinct from old.recipient_id then
    raise exception 'Only the recipient can mark this message as read';
  end if;
  return new;
end;
$$;

drop trigger if exists protect_message_changes on public.session_messages;
create trigger protect_message_changes
  before update on public.session_messages
  for each row execute function public.protect_message_changes();

create or replace function public.protect_notification_changes()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.user_id is distinct from old.user_id
    or new.title is distinct from old.title
    or new.body is distinct from old.body
    or new.created_at is distinct from old.created_at
    or auth.uid() is distinct from old.user_id then
    raise exception 'Notifications can only be marked as read by their recipient';
  end if;
  return new;
end;
$$;

drop trigger if exists protect_notification_changes on public.notifications;
create trigger protect_notification_changes
  before update on public.notifications
  for each row execute function public.protect_notification_changes();

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists roadmap_tasks_set_updated_at on public.roadmap_tasks;
create trigger roadmap_tasks_set_updated_at before update on public.roadmap_tasks
  for each row execute function public.set_updated_at();

drop trigger if exists mentorship_sessions_set_updated_at on public.mentorship_sessions;
create trigger mentorship_sessions_set_updated_at before update on public.mentorship_sessions
  for each row execute function public.set_updated_at();

create or replace view public.verified_mentors
with (security_barrier = true)
as
select
  id,
  full_name,
  designation,
  qualification,
  years_experience,
  expertise,
  organization,
  biography,
  avatar_url,
  verified_at
from public.profiles
where role = 'mentor' and is_verified = true;

alter table public.profiles enable row level security;
alter table public.careers enable row level security;
alter table public.colleges enable row level security;
alter table public.saved_items enable row level security;
alter table public.roadmap_tasks enable row level security;
alter table public.mentorship_sessions enable row level security;
alter table public.session_messages enable row level security;
alter table public.notifications enable row level security;
alter table public.assessment_results enable row level security;

drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
  on public.profiles for select to authenticated
  using (id = (select auth.uid()));

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

drop policy if exists "Anyone can read careers" on public.careers;
create policy "Anyone can read careers"
  on public.careers for select to anon, authenticated
  using (true);

drop policy if exists "Anyone can read colleges" on public.colleges;
create policy "Anyone can read colleges"
  on public.colleges for select to anon, authenticated
  using (true);

drop policy if exists "Users can read their saved items" on public.saved_items;
create policy "Users can read their saved items"
  on public.saved_items for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Users can save their own items" on public.saved_items;
create policy "Users can save their own items"
  on public.saved_items for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "Users can remove their own saved items" on public.saved_items;
create policy "Users can remove their own saved items"
  on public.saved_items for delete to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Users can manage their roadmap" on public.roadmap_tasks;
create policy "Users can manage their roadmap"
  on public.roadmap_tasks for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "Session participants can read sessions" on public.mentorship_sessions;
create policy "Session participants can read sessions"
  on public.mentorship_sessions for select to authenticated
  using (student_id = (select auth.uid()) or mentor_id = (select auth.uid()));

drop policy if exists "Students can request sessions with verified mentors" on public.mentorship_sessions;
create policy "Students can request sessions with verified mentors"
  on public.mentorship_sessions for insert to authenticated
  with check (
    student_id = (select auth.uid())
    and status = 'requested'
    and starts_at > now()
    and exists (
      select 1
      from public.verified_mentors mentor
      where mentor.id = mentor_id
    )
  );

drop policy if exists "Students and mentors can update their sessions" on public.mentorship_sessions;
create policy "Students and mentors can update their sessions"
  on public.mentorship_sessions for update to authenticated
  using (student_id = (select auth.uid()) or mentor_id = (select auth.uid()))
  with check (student_id = (select auth.uid()) or mentor_id = (select auth.uid()));

drop policy if exists "Session participants can read messages" on public.session_messages;
create policy "Session participants can read messages"
  on public.session_messages for select to authenticated
  using (sender_id = (select auth.uid()) or recipient_id = (select auth.uid()));

drop policy if exists "Session participants can send messages" on public.session_messages;
create policy "Session participants can send messages"
  on public.session_messages for insert to authenticated
  with check (
    sender_id = (select auth.uid())
    and exists (
      select 1
      from public.mentorship_sessions s
      where s.id = session_id
        and s.status in ('requested', 'accepted')
        and (
          (s.student_id = sender_id and s.mentor_id = recipient_id)
          or (s.mentor_id = sender_id and s.student_id = recipient_id)
        )
    )
  );

drop policy if exists "Recipients can mark messages as read" on public.session_messages;
create policy "Recipients can mark messages as read"
  on public.session_messages for update to authenticated
  using (recipient_id = (select auth.uid()))
  with check (recipient_id = (select auth.uid()));

drop policy if exists "Users can read their notifications" on public.notifications;
create policy "Users can read their notifications"
  on public.notifications for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Users can mark their notifications as read" on public.notifications;
create policy "Users can mark their notifications as read"
  on public.notifications for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "Users can read their assessment results" on public.assessment_results;
create policy "Users can read their assessment results"
  on public.assessment_results for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Users can save their assessment results" on public.assessment_results;
create policy "Users can save their assessment results"
  on public.assessment_results for insert to authenticated
  with check (user_id = (select auth.uid()));

grant select on public.careers, public.colleges, public.verified_mentors to anon, authenticated;
grant select, update on public.profiles to authenticated;
grant select, insert, delete on public.saved_items to authenticated;
grant select, insert, update, delete on public.roadmap_tasks to authenticated;
grant select, insert, update on public.mentorship_sessions to authenticated;
grant select, insert, update on public.session_messages to authenticated;
grant select, update on public.notifications to authenticated;
grant select, insert on public.assessment_results to authenticated;

-- Add public career and college catalog entries with regular SQL INSERT statements.
-- Mentor verification must be performed by a trusted administrator/backend using
-- the Supabase service-role key. Never expose that key in browser code.
