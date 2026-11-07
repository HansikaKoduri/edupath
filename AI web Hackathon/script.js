const STORAGE_KEY = 'edupath-app-state';

const careers = [
  { id: 'software-engineer', name: 'Software Engineer', category: 'Engineering and Technology', emoji: '💻', summary: 'Build digital products, solve technical problems and create scalable software systems.', tags: ['Coding', 'Problem Solving', 'Innovation'], qualifications: ['Class 12 with PCM', 'Engineering entrance exams (JEE Main/Advanced)'], eligibility: 'Strong interest in mathematics, logic and technology', exams: ['JEE Main', 'JEE Advanced', 'CUET'], skills: ['Programming', 'Data structures', 'Communication'], courses: ['BTech CSE', 'BCA', 'Bachelor in IT'], jobs: ['Frontend Engineer', 'Backend Engineer', 'QA Engineer'], study: ['M.Tech', 'MBA', 'Data Science'] },
  { id: 'doctor', name: 'Doctor', category: 'Medicine and Healthcare', emoji: '🩺', summary: 'Diagnose, treat and care for patients with a strong focus on health and science.', tags: ['Healthcare', 'Research', 'Service'], qualifications: ['Biology stream in Class 12', 'NEET qualification'], eligibility: 'Strong interest in biology, empathy and scientific reasoning', exams: ['NEET'], skills: ['Empathy', 'Decision making', 'Research'], courses: ['MBBS', 'BDS', 'BAMS'], jobs: ['General Physician', 'Surgeon', 'Medical Researcher'], study: ['MD', 'MS', 'Specialization'] },
  { id: 'product-manager', name: 'Product Manager', category: 'Business and Management', emoji: '📈', summary: 'Lead product strategy, customer insight and business growth decisions.', tags: ['Strategy', 'Leadership', 'Business'], qualifications: ['Class 12 or graduation', 'Business/management studies helpful'], eligibility: 'Strong communication, planning and problem-solving aptitude', exams: ['CUET', 'CAT for MBA'], skills: ['Leadership', 'Strategy', 'Research'], courses: ['BBA', 'BMS', 'MBA'], jobs: ['Product Manager', 'Business Analyst', 'Operations Manager'], study: ['MBA', 'PGDM'] },
  { id: 'graphic-designer', name: 'Graphic Designer', category: 'Design and Creative Arts', emoji: '🎨', summary: 'Shape brand experiences through visual communication and design thinking.', tags: ['Creativity', 'Visual Storytelling', 'Design'], qualifications: ['Class 12 or graduation', 'Design portfolio helpful'], eligibility: 'Creativity, visual thinking and communication skills', exams: ['NID DAT', 'UCEED'], skills: ['Design software', 'Creativity', 'Brand thinking'], courses: ['B.Des', 'BFA', 'Graphic Design'], jobs: ['Graphic Designer', 'UI Designer', 'Brand Designer'], study: ['M.Des', 'Masters in Design'] },
  { id: 'lawyer', name: 'Lawyer', category: 'Law', emoji: '⚖️', summary: 'Advise, represent and influence legal outcomes with critical reasoning and advocacy.', tags: ['Public Speaking', 'Justice', 'Analytical'], qualifications: ['Class 12 with any stream', 'CLAT or law entrance'], eligibility: 'Strong reading, writing and analytical reasoning', exams: ['CLAT', 'AILET'], skills: ['Argumentation', 'Research', 'Reading'], courses: ['BA LLB', 'BBA LLB', 'LLB'], jobs: ['Advocate', 'Legal Consultant', 'Corporate Lawyer'], study: ['LLM', 'Judicial services'] },
  { id: 'research-scientist', name: 'Research Scientist', category: 'Science and Research', emoji: '🔬', summary: 'Pursue innovation through experiments, evidence and scientific discovery.', tags: ['Science', 'Research', 'Discovery'], qualifications: ['PCM or PCB with strong academics', 'Science degree'], eligibility: 'Curiosity, attention to detail and analytical thinking', exams: ['JEE', 'CUET', 'GATE later'], skills: ['Experimentation', 'Data analysis', 'Critical thinking'], courses: ['BSc', 'BTech', 'Integrated MSc'], jobs: ['Lab Scientist', 'Research Analyst', 'R&D Specialist'], study: ['MSc', 'PhD'] },
  { id: 'civil-servant', name: 'Civil Servant', category: 'Government and Civil Services', emoji: '🏛️', summary: 'Serve the public, shape policy and contribute to governance and nation-building.', tags: ['Public Service', 'Leadership', 'Policy'], qualifications: ['Graduation in any discipline', 'UPSC/Civil exam prep'], eligibility: 'Interest in governance, society and public issues', exams: ['UPSC CSE', 'SSC'], skills: ['Decision making', 'Public speaking', 'Policy analysis'], courses: ['Any undergraduate degree'], jobs: ['IAS', 'IPS', 'IFS', 'State services'], study: ['Public policy', 'Law', 'Administration'] },
  { id: 'financial-analyst', name: 'Financial Analyst', category: 'Finance and Commerce', emoji: '💰', summary: 'Interpret markets, drive strategy and support financial planning and investment decisions.', tags: ['Finance', 'Analysis', 'Strategy'], qualifications: ['Commerce or related stream', 'Finance degree helpful'], eligibility: 'Comfort with numbers, planning and business logic', exams: ['CUET', 'CAT'], skills: ['Data analysis', 'Budgeting', 'Communication'], courses: ['B.Com', 'BBA Finance', 'MBA Finance'], jobs: ['Analyst', 'Investment Manager', 'Consultant'], study: ['MBA', 'CFA'] },
  { id: 'teacher', name: 'Teacher', category: 'Education and Teaching', emoji: '📚', summary: 'Inspire learning and shape young minds with empathy and subject expertise.', tags: ['Education', 'Mentorship', 'Communication'], qualifications: ['Graduation or B.Ed', 'Teaching aptitude'], eligibility: 'Good communication, empathy and patience', exams: ['CTET', 'State TET'], skills: ['Communication', 'Mentorship', 'Planning'], courses: ['B.Ed', 'B.El.Ed', 'BSc B.Ed'], jobs: ['School Teacher', 'Academic Counsellor', 'Tutor'], study: ['M.Ed', 'Educational leadership'] },
  { id: 'journalist', name: 'Journalist', category: 'Media and Communication', emoji: '📰', summary: 'Research stories, inform the public and shape narratives through storytelling and media.', tags: ['Storytelling', 'Media', 'Public Affairs'], qualifications: ['Any stream with communication skills', 'Journalism course'], eligibility: 'Strong writing, curiosity and awareness of current events', exams: ['CUET', 'Mass media entrance'], skills: ['Writing', 'Research', 'Interviewing'], courses: ['BJMC', 'Mass Communication', 'Media Studies'], jobs: ['Reporter', 'Content Writer', 'Editor'], study: ['M.A. Journalism', 'Media Research'] }
];

const colleges = [
  { name: 'IIT Delhi', stream: 'Engineering', city: 'New Delhi', rating: 9.5, type: 'Public', course: 'B.Tech / Engineering', icon: '🧠' },
  { name: 'AIIMS Delhi', stream: 'Medicine', city: 'New Delhi', rating: 9.7, type: 'Public', course: 'MBBS / Medicine', icon: '🩺' },
  { name: 'IIM Ahmedabad', stream: 'Business', city: 'Ahmedabad', rating: 9.6, type: 'Public', course: 'MBA / Management', icon: '📊' },
  { name: 'NID Ahmedabad', stream: 'Design', city: 'Ahmedabad', rating: 9.3, type: 'Public', course: 'B.Des / Design', icon: '🎨' },
  { name: 'NLU Delhi', stream: 'Law', city: 'New Delhi', rating: 9.2, type: 'Public', course: 'BA LLB / Law', icon: '⚖️' },
  { name: 'Christ University', stream: 'Business', city: 'Bengaluru', rating: 8.9, type: 'Private', course: 'Management / Commerce', icon: '🏫' },
  { name: 'Manipal Institute of Technology', stream: 'Engineering', city: 'Manipal', rating: 8.8, type: 'Private', course: 'B.Tech / Technology', icon: '💻' },
  { name: 'Symbiosis International', stream: 'Business', city: 'Pune', rating: 8.9, type: 'Private', course: 'Business / Management', icon: '📈' }
];

const mentors = [
  { name: 'Dr. Meera Nair', expertise: 'Healthcare', role: 'Senior Consultant', experience: '12 years', rating: 4.9, initials: 'MN' },
  { name: 'Karan Malhotra', expertise: 'Engineering', role: 'Lead Software Engineer', experience: '10 years', rating: 4.8, initials: 'KM' },
  { name: 'Ananya Sethi', expertise: 'Career Guidance', role: 'Career Coach', experience: '8 years', rating: 4.9, initials: 'AS' },
  { name: 'Rohit Verma', expertise: 'Business', role: 'Product Strategy Mentor', experience: '11 years', rating: 4.7, initials: 'RV' },
  { name: 'Priya Joshi', expertise: 'Design', role: 'Design Mentor', experience: '9 years', rating: 4.8, initials: 'PJ' },
  { name: 'Imran Ali', expertise: 'Government', role: 'Civil Services Mentor', experience: '13 years', rating: 4.9, initials: 'IA' }
];

const defaultState = {
  users: [
    {
      id: 'student-demo',
      role: 'student',
      fullName: 'Aarav Sharma',
      email: 'student@edupath.com',
      password: 'demo123',
      educationLevel: 'Class 12',
      schoolName: 'Delhi Public School',
      stream: 'Science',
      areasOfInterest: ['Technology', 'Design'],
      phone: '9876543210',
      savedCareers: ['software-engineer', 'research-scientist'],
      savedColleges: ['IIT Delhi', 'Manipal Institute of Technology'],
      notifications: ['Your mentor session is available for booking.', 'Your assessment results have been updated.'],
      preferredCareer: 'Software Engineer',
      sessions: [],
      roadmapTasks: ['explore-interests']
    },
    {
      id: 'mentor-demo',
      role: 'mentor',
      fullName: 'Riya Malhotra',
      email: 'mentor@edupath.com',
      password: 'demo123',
      designation: 'Career Guidance Mentor',
      qualification: 'M.A. Education',
      experience: '7 years',
      expertise: 'Career Guidance',
      organization: 'Edupath',
      bio: 'Helps students build confidence and direction through structured advice and planning.',
      verified: true
    }
  ],
  currentUser: null,
  darkMode: false,
  activePage: 'dashboard',
  compareSelection: ['IIT Delhi', 'AIIMS Delhi']
};

const state = loadState();

const roadmapSteps = [
  { id: 'explore-interests', title: 'Explore your interests', detail: 'Start with the subjects and activities that energize you.' },
  { id: 'take-assessment', title: 'Complete your career assessment', detail: 'Get a shortlist based on interests, strengths and goals.' },
  { id: 'research-paths', title: 'Research 2 career paths', detail: 'Review qualifications, courses and possible roles.' },
  { id: 'shortlist-colleges', title: 'Shortlist colleges', detail: 'Compare programs and keep your best-fit options.' },
  { id: 'talk-to-mentor', title: 'Talk to a mentor', detail: 'Bring your questions and plan one practical next step.' }
];

const subjectCareerCategories = {
  mathematics: ['Engineering and Technology', 'Science and Research', 'Finance and Commerce'],
  biology: ['Medicine and Healthcare', 'Science and Research'],
  economics: ['Business and Management', 'Finance and Commerce'],
  english: ['Law', 'Media and Communication', 'Education and Teaching'],
  art: ['Design and Creative Arts'],
  'computer science': ['Engineering and Technology']
};

const sampleMessages = [
  { sender: 'Ananya Sethi', preview: 'I have suggested a few engineering-focused options based on your results.', time: '10:15 AM' },
  { sender: 'Riya Malhotra', preview: 'Let’s review your shortlists and next milestones together.', time: 'Yesterday' }
];

init();

function init() {
  normalizeUserData();
  bindLandingEvents();
  bindAuthEvents();
  bindDashboardEvents();
  renderFeaturedCareers();
  renderFeaturedColleges();
  renderDashboard();
  applyTheme();
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return JSON.parse(JSON.stringify(defaultState));
  try {
    const parsed = JSON.parse(raw);
    return { ...JSON.parse(JSON.stringify(defaultState)), ...parsed, users: parsed.users || JSON.parse(JSON.stringify(defaultState.users)) };
  } catch (error) {
    return JSON.parse(JSON.stringify(defaultState));
  }
}

function saveState() {
  if (state.currentUser) {
    const userIndex = state.users.findIndex((user) => user.id === state.currentUser.id);
    if (userIndex >= 0) {
      state.users[userIndex] = { ...state.users[userIndex], ...state.currentUser };
      state.currentUser = state.users[userIndex];
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeUserData() {
  state.users.forEach((user) => {
    user.savedCareers = Array.isArray(user.savedCareers) ? user.savedCareers : [];
    user.savedColleges = Array.isArray(user.savedColleges) ? user.savedColleges : [];
    user.notifications = Array.isArray(user.notifications) ? user.notifications : [];
    user.sessions = Array.isArray(user.sessions) ? user.sessions : [];
    user.roadmapTasks = Array.isArray(user.roadmapTasks) ? user.roadmapTasks : [];
    user.messages = Array.isArray(user.messages) ? user.messages : [];
  });
  if (state.currentUser) {
    state.currentUser.savedCareers = Array.isArray(state.currentUser.savedCareers) ? state.currentUser.savedCareers : [];
    state.currentUser.savedColleges = Array.isArray(state.currentUser.savedColleges) ? state.currentUser.savedColleges : [];
    state.currentUser.notifications = Array.isArray(state.currentUser.notifications) ? state.currentUser.notifications : [];
    state.currentUser.sessions = Array.isArray(state.currentUser.sessions) ? state.currentUser.sessions : [];
    state.currentUser.roadmapTasks = Array.isArray(state.currentUser.roadmapTasks) ? state.currentUser.roadmapTasks : [];
    state.currentUser.messages = Array.isArray(state.currentUser.messages) ? state.currentUser.messages : [];
  }
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function getUserSessions() {
  return state.currentUser?.sessions || [];
}

function getUserMessages() {
  const savedMessages = state.currentUser?.messages || [];
  return [...sampleMessages, ...savedMessages];
}

function calculateProfileCompletion(user) {
  const fields = user.role === 'student'
    ? [user.fullName, user.email, user.educationLevel, user.schoolName, user.stream, user.areasOfInterest?.length]
    : [user.fullName, user.email, user.designation, user.qualification, user.experience, user.expertise, user.organization, user.bio];
  return Math.round(fields.filter(Boolean).length / fields.length * 100);
}

function bindLandingEvents() {
  document.querySelector('.get-started-btn').addEventListener('click', () => openAuth('register'));
  document.querySelector('.login-button').addEventListener('click', () => openAuth('login'));
  document.querySelector('.explore-future-btn').addEventListener('click', () => {
    if (state.currentUser) {
      switchDashboardPage('assessment');
    } else {
      openAuth('register');
    }
  });
  document.querySelector('.discover-btn').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('.view-all-careers').addEventListener('click', () => {
    if (state.currentUser) {
      switchDashboardPage('explore');
    } else {
      openAuth('register');
    }
  });
  document.querySelector('.contact-submit').addEventListener('click', () => showToast('Thank you! We will be in touch soon.'));
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    applyTheme();
    saveState();
  });
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-group').classList.toggle('mobile-open');
  });
}

function bindAuthEvents() {
  const modal = document.getElementById('authModal');
  document.querySelector('.modal-close').addEventListener('click', closeAuth);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeAuth();
  });

  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((tab) => tab.classList.toggle('active', tab === button));
      const activeTab = button.dataset.tab;
      document.getElementById('loginForm').classList.toggle('active', activeTab === 'login');
      document.getElementById('registerForm').classList.toggle('active', activeTab === 'register');
    });
  });

  const roleInputs = document.querySelectorAll('input[name="role"]');
  roleInputs.forEach((input) => {
    input.addEventListener('change', () => {
      const role = input.value;
      const studentField = document.querySelector('.student-field');
      const mentorField = document.querySelector('.mentor-field');
      studentField.classList.toggle('hidden', role !== 'student');
      mentorField.classList.toggle('hidden', role !== 'mentor');
    });
  });

  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const user = state.users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password);
    if (!user) {
      showToast('Invalid email or password. Please try again.');
      return;
    }
    state.currentUser = user;
    saveState();
    closeAuth();
    renderDashboard();
    showToast(`Welcome back, ${user.fullName}!`);
  });

  document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedRoleInput = document.querySelector('input[name="role"]:checked');
    const role = selectedRoleInput ? selectedRoleInput.value : 'student';
    const fullName = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;

    if (!fullName || !email || !password) {
      showToast('Please fill in all required fields.');
      return;
    }

    if (state.users.some((user) => user.email.toLowerCase() === email.toLowerCase())) {
      showToast('An account with this email already exists. Please log in.');
      return;
    }

    const newUser = {
      id: `${role}-${Date.now()}`,
      role,
      fullName,
      email,
      password,
      savedCareers: [],
      savedColleges: [],
      sessions: [],
      messages: [],
      roadmapTasks: [],
      notifications: ['Welcome to Edupath! Start your assessment to discover your best-fit career path.'],
      preferredCareer: role === 'student' ? 'Career Explorer' : 'Mentor'
    };

    if (role === 'student') {
      newUser.educationLevel = document.getElementById('studentEducation').value;
      newUser.schoolName = 'Not specified';
      newUser.stream = 'Not specified';
      newUser.areasOfInterest = ['Technology'];
    } else {
      newUser.designation = document.getElementById('mentorDesignation').value || 'Mentor';
      newUser.qualification = 'Professional qualification';
      newUser.experience = '0 years';
      newUser.expertise = 'Career Guidance';
      newUser.organization = 'Private practice';
      newUser.bio = 'New mentor profile';
      newUser.verified = false;
    }

    state.users.push(newUser);
    state.currentUser = newUser;
    saveState();
    closeAuth();
    renderDashboard();
    showToast(`${role === 'student' ? 'Student' : 'Mentor'} account created successfully.`);
  });

  document.querySelector('.forgot-password').addEventListener('click', () => {
    showToast('Password reset instructions have been sent to your email.');
  });
}

function bindDashboardEvents() {
  document.querySelectorAll('.sidebar-link').forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.dataset.page;
      if (page === 'logout') {
        state.currentUser = null;
        state.activePage = 'dashboard';
        saveState();
        renderDashboard();
        showToast('You have been logged out.');
        return;
      }
      switchDashboardPage(page);
    });
  });

  document.querySelector('.start-assessment-btn').addEventListener('click', () => switchDashboardPage('assessment'));

  document.querySelector('.dashboard-theme-toggle').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    applyTheme();
    saveState();
  });

  document.getElementById('dashboardApp').addEventListener('click', (event) => {
    const action = event.target.closest('[data-page-action]');
    if (action) {
      const page = action.dataset.pageAction;
      if (page === 'notifications') {
        switchDashboardPage('dashboard');
        setTimeout(() => document.getElementById('notificationList')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
      } else {
        switchDashboardPage(page);
      }
      return;
    }

    const detailButton = event.target.closest('[data-career-detail]');
    if (detailButton) {
      openCareerDetails(detailButton.dataset.careerDetail);
      return;
    }

    const bookButton = event.target.closest('[data-book-mentor]');
    if (bookButton) {
      openBookingModal(bookButton.dataset.bookMentor);
      return;
    }

    const saveCareerButton = event.target.closest('.save-career');
    if (saveCareerButton) {
      saveCareer(saveCareerButton.dataset.careerId);
      return;
    }

    const saveCollegeButton = event.target.closest('.save-college');
    if (saveCollegeButton) {
      saveCollege(saveCollegeButton.dataset.collegeName);
      return;
    }

    const cancelButton = event.target.closest('[data-cancel-session]');
    if (cancelButton) {
      cancelSession(cancelButton.dataset.cancelSession);
      return;
    }

    const removeButton = event.target.closest('[data-remove-saved]');
    if (removeButton) {
      removeSavedItem(removeButton.dataset.removeSaved, removeButton.dataset.itemId);
    }
  });

  document.getElementById('careerDetailModal').addEventListener('click', (event) => {
    if (event.target.id === 'careerDetailModal' || event.target.closest('.detail-modal-close')) closeCareerDetails();
  });

  document.getElementById('bookingModal').addEventListener('click', (event) => {
    if (event.target.id === 'bookingModal' || event.target.closest('.booking-modal-close')) closeBookingModal();
  });

  document.getElementById('bookingForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const dateValue = document.getElementById('bookingDate').value;
    const mentorName = document.getElementById('bookingMentorName').value;
    const time = document.getElementById('bookingTime').value;
    const topic = document.getElementById('bookingTopic').value.trim();
    if (!state.currentUser || !dateValue || !topic) return;

    const date = new Date(`${dateValue}T12:00:00`);
    const dateLabel = date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
    const existing = getUserSessions().some((session) => session.mentor === mentorName && session.dateValue === dateValue && session.time === time);
    if (existing) {
      showToast('You already have a session booked for that time.');
      return;
    }

    state.currentUser.sessions.push({
      id: `session-${Date.now()}`,
      title: topic,
      mentor: mentorName,
      date: dateLabel,
      dateValue,
      time
    });
    state.currentUser.notifications.unshift(`Your session with ${mentorName} is booked for ${dateLabel} at ${time}.`);
    saveState();
    closeBookingModal();
    renderDashboard();
    showToast('Your mentorship session is booked.');
  });

  document.getElementById('profileEditForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!state.currentUser) return;
    const formData = new FormData(event.currentTarget);
    state.currentUser.fullName = String(formData.get('fullName') || '').trim();
    state.currentUser.phone = String(formData.get('phone') || '').trim();
    if (state.currentUser.role === 'student') {
      state.currentUser.educationLevel = String(formData.get('educationLevel') || '');
      state.currentUser.schoolName = String(formData.get('schoolName') || '').trim();
      state.currentUser.stream = String(formData.get('stream') || '').trim();
      state.currentUser.areasOfInterest = String(formData.get('areasOfInterest') || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    } else {
      state.currentUser.designation = String(formData.get('designation') || '').trim();
      state.currentUser.qualification = String(formData.get('qualification') || '').trim();
      state.currentUser.experience = String(formData.get('experience') || '').trim();
      state.currentUser.expertise = String(formData.get('expertise') || '').trim();
      state.currentUser.organization = String(formData.get('organization') || '').trim();
      state.currentUser.bio = String(formData.get('bio') || '').trim();
    }
    saveState();
    renderDashboard();
    showToast('Your profile has been updated.');
  });

  document.getElementById('messageForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!state.currentUser) return;
    const input = document.getElementById('messageText');
    const text = input.value.trim();
    if (!text) return;
    state.currentUser.messages.push({
      sender: state.currentUser.fullName,
      preview: text,
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    });
    input.value = '';
    saveState();
    renderMessages();
    showToast('Message added to your conversation.');
  });

  document.getElementById('careerSearch').addEventListener('input', renderCareerExplorer);
  document.getElementById('careerCategoryFilter').addEventListener('change', renderCareerExplorer);

  document.getElementById('dashboardApp').addEventListener('change', (event) => {
    const task = event.target.closest('[data-roadmap-task]');
    if (!task || !state.currentUser) return;
    const id = task.dataset.roadmapTask;
    const tasks = state.currentUser.roadmapTasks;
    state.currentUser.roadmapTasks = task.checked
      ? [...new Set([...tasks, id])]
      : tasks.filter((taskId) => taskId !== id);
    saveState();
    renderDashboard();
  });

  document.getElementById('careerAssessmentForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedInterests = [...document.querySelectorAll('input[name="interest"]:checked')].map((item) => item.value);
    const selectedSubjects = [...document.querySelectorAll('input[name="subject"]:checked')].map((item) => item.value);
    const selectedStrengths = [...document.querySelectorAll('input[name="strength"]:checked')].map((item) => item.value);
    const environment = document.querySelector('input[name="environment"]:checked')?.value;
    const goal = document.querySelector('input[name="goal"]:checked')?.value;
    if (!selectedInterests.length && !selectedSubjects.length && !selectedStrengths.length
      && !document.querySelector('input[name="environment"]:checked')
      && !document.querySelector('input[name="goal"]:checked')) {
      showToast('Choose at least one interest, subject, strength or preference to get useful suggestions.');
      return;
    }

    const scoreMap = {};
    const maxScore = Math.max(1, selectedInterests.length * 4 + selectedSubjects.length * 2
      + selectedStrengths.length * 2
      + (document.querySelector('input[name="environment"]:checked') ? 4 : 0)
      + (document.querySelector('input[name="goal"]:checked') ? 3 : 0));
    careers.forEach((career) => {
      let score = 0;
      const careerText = `${career.name} ${career.category} ${career.tags.join(' ')} ${career.skills.join(' ')}`.toLowerCase();
      selectedInterests.forEach((value) => {
        const v = value.toLowerCase();
        if (careerText.includes(v)) score += 2;
        if (career.category.toLowerCase().includes(v)) score += 2;
      });
      selectedSubjects.forEach((value) => {
        const v = value.toLowerCase();
        if (careerText.includes(v) || subjectCareerCategories[v]?.includes(career.category)) score += 2;
      });
      selectedStrengths.forEach((value) => {
        const v = value.toLowerCase();
        if (careerText.includes(v)) score += 2;
      });
      if (environment === 'Creative' && career.category.includes('Design')) score += 4;
      if (environment === 'Research-focused' && career.category.includes('Science')) score += 4;
      if (goal === 'Impact' && ['Medicine and Healthcare', 'Government and Civil Services', 'Education and Teaching'].includes(career.category)) score += 3;
      if (goal === 'Innovation' && ['Engineering and Technology', 'Science and Research', 'Design and Creative Arts'].includes(career.category)) score += 3;
      scoreMap[career.id] = score;
    });

    const topCareers = [...careers]
      .sort((a, b) => (scoreMap[b.id] || 0) - (scoreMap[a.id] || 0))
      .slice(0, 3);

    const resultsContainer = document.getElementById('assessmentResults');
    resultsContainer.innerHTML = topCareers.map((career, index) => `
      <div class="result-card">
        <h4>${index + 1}. ${career.name}</h4>
        <p>${career.summary}</p>
        <div class="card-meta">
          <span class="tag">${career.category}</span>
          <span class="tag">Interest match: ${Math.min(100, Math.round(scoreMap[career.id] / maxScore * 100))}%</span>
        </div>
      </div>
    `).join('');

    if (state.currentUser) {
      state.currentUser.preferredCareer = topCareers[0].name;
      state.currentUser.recommendedCareers = topCareers.map((career) => career.id);
      state.currentUser.roadmapTasks = [...new Set([...(state.currentUser.roadmapTasks || []), 'take-assessment'])];
      state.currentUser.notifications = [`Your career assessment recommends ${topCareers[0].name}.`, ...state.currentUser.notifications];
      saveState();
      renderDashboard();
    }

    showToast('Career recommendations updated successfully.');
  });

  document.getElementById('collegeSearch').addEventListener('input', renderCollegeExplorer);
  document.getElementById('collegeFilter').addEventListener('change', renderCollegeExplorer);
  document.getElementById('mentorFilter').addEventListener('change', renderMentorExplorer);
  document.getElementById('settingsDarkMode').addEventListener('change', () => {
    state.darkMode = document.getElementById('settingsDarkMode').checked;
    applyTheme();
    saveState();
  });
  document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    showToast('Your account preferences have been saved.');
  });
}

function openAuth(tab) {
  const modal = document.getElementById('authModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  const activeTab = tab || 'login';
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === activeTab);
  });
  document.getElementById('loginForm').classList.toggle('active', activeTab === 'login');
  document.getElementById('registerForm').classList.toggle('active', activeTab === 'register');
}

function closeAuth() {
  const modal = document.getElementById('authModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function switchDashboardPage(page) {
  state.activePage = page;
  saveState();
  renderDashboard();
}

function renderDashboard() {
  const dashboard = document.getElementById('dashboardApp');
  const user = state.currentUser;

  if (!user) {
    dashboard.classList.add('hidden');
    document.body.classList.remove('dashboard-open');
    const landing = document.getElementById('top');
    if (landing) landing.style.display = 'block';
    return;
  }

  dashboard.classList.remove('hidden');
  document.body.classList.add('dashboard-open');
  const landing = document.getElementById('top');
  if (landing) landing.style.display = 'none';

  document.querySelectorAll('.sidebar-link').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === state.activePage);
  });

  document.querySelectorAll('[data-page-panel]').forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.pagePanel === state.activePage);
  });

  const firstName = user.fullName.trim().split(/\s+/)[0] || 'there';
  const completion = calculateProfileCompletion(user);
  document.getElementById('dashboardWelcome').textContent = `Good day, ${firstName}`;
  document.getElementById('dashboardDate').textContent = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).toUpperCase();
  document.getElementById('headerAvatar').textContent = firstName[0].toUpperCase();
  document.getElementById('headerName').textContent = firstName;
  document.getElementById('welcomeHeadline').textContent = user.role === 'mentor'
    ? 'Help someone find their next step.'
    : user.preferredCareer && user.preferredCareer !== 'Career Explorer'
      ? `Build toward ${user.preferredCareer}, one step at a time.`
      : 'Your future is taking shape.';
  document.getElementById('welcomeDescription').textContent = user.role === 'mentor'
    ? 'Your experience can help someone find their direction. Keep your profile current and connect with students.'
    : 'A little progress every day adds up to a direction you can feel confident about.';
  document.getElementById('profileCompletion').textContent = `${completion}%`;
  document.getElementById('profileProgressBar').style.width = `${completion}%`;
  document.getElementById('recommendedCount').textContent = String(Math.max(3, user.savedCareers.length));
  document.getElementById('savedCollegesCount').textContent = String(user.savedColleges.length);
  document.getElementById('sessionsCount').textContent = String(getUserSessions().length);

  renderRecommendedCareers();
  renderSuggestedColleges();
  renderMentorsDashboard();
  renderUpcomingSessions();
  renderNotifications();
  renderRoadmapTimeline();
  renderProfile();
  renderCareerExplorer();
  renderCollegeExplorer();
  renderMentorExplorer();
  renderMySessions();
  renderMessages();
  renderSavedItems();
  renderCompareTable();
  document.getElementById('settingsDarkMode').checked = state.darkMode;
  document.querySelector('.dashboard-theme-toggle').textContent = state.darkMode ? '☀' : '☾';
}

function renderFeaturedCareers() {
  const container = document.getElementById('featured-careers');
  if (!container) return;
  container.innerHTML = careers.slice(0, 6).map((career) => `
    <article class="career-card">
      <div class="card-visual">${career.emoji}</div>
      <div class="card-body">
        <h3>${career.name}</h3>
        <div class="card-meta">
          <span class="tag">${career.category}</span>
        </div>
        <p>${career.summary}</p>
        <div class="card-actions">
          <button class="link-button save-career" data-career-id="${career.id}">Save</button>
          <button class="btn btn-ghost" type="button" data-career-detail="${career.id}">Learn more</button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.save-career').forEach((button) => {
    button.addEventListener('click', () => {
      const careerId = button.dataset.careerId;
      const user = state.currentUser;
      if (!user) {
        openAuth('register');
        return;
      }
      if (!user.savedCareers.includes(careerId)) {
        user.savedCareers.push(careerId);
        saveState();
        renderDashboard();
        showToast('Career saved to your dashboard.');
      } else {
        showToast('This career is already saved.');
      }
    });
  });
  container.querySelectorAll('[data-career-detail]').forEach((button) => {
    button.addEventListener('click', () => openCareerDetails(button.dataset.careerDetail));
  });
}

function renderRecommendedCareers() {
  const list = document.getElementById('recommendedCareerList');
  if (!list) return;
  const user = state.currentUser;
  const recommended = careers.filter((career) => user?.recommendedCareers?.includes(career.id));
  const saved = careers.filter((career) => user?.savedCareers?.includes(career.id));
  const items = [...new Map([...recommended, ...saved].map((career) => [career.id, career])).values()].slice(0, 3);
  const fallback = careers.slice(0, 3);
  list.innerHTML = (items.length ? items : fallback).map((career) => `
    <div class="list-item career-mini-item">
      <span class="mini-item-icon">${career.emoji}</span>
      <div class="mini-item-copy"><strong>${career.name}</strong><span>${career.category}</span></div>
      <button type="button" data-career-detail="${career.id}">Details</button>
    </div>
  `).join('');
}

function renderFeaturedColleges() {
  const container = document.getElementById('featured-colleges');
  if (!container) return;
  container.innerHTML = colleges.slice(0, 4).map((college) => `
    <article class="college-card">
      <div class="card-visual">${college.icon}</div>
      <div class="card-body">
        <h3>${college.name}</h3>
        <div class="card-meta">
          <span class="tag">${college.stream}</span>
          <span class="tag">${college.city}</span>
        </div>
        <p>${college.course}</p>
        <div class="card-actions">
          <button class="link-button save-college" data-college-name="${college.name}">Save</button>
          <button class="btn btn-ghost" type="button">Compare</button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.save-college').forEach((button) => {
    button.addEventListener('click', () => {
      const collegeName = button.dataset.collegeName;
      const user = state.currentUser;
      if (!user) {
        openAuth('register');
        return;
      }
      if (!user.savedColleges.includes(collegeName)) {
        user.savedColleges.push(collegeName);
        saveState();
        renderDashboard();
        showToast('College saved to your shortlist.');
      } else {
        showToast('This college is already saved.');
      }
    });
  });
}

function renderSuggestedColleges() {
  const list = document.getElementById('suggestedCollegesList');
  if (!list) return;
  const user = state.currentUser;
  const selected = user && user.savedColleges.length ? user.savedColleges.slice(0, 3) : ['IIT Delhi', 'AIIMS Delhi', 'NID Ahmedabad'];
  list.innerHTML = selected.map((name) => `
    <div class="list-item career-mini-item">
      <span class="mini-item-icon">▤</span>
      <div class="mini-item-copy"><strong>${escapeHTML(name)}</strong><span>On your college shortlist</span></div>
      <button type="button" data-page-action="collegesPage">Explore</button>
    </div>
  `).join('');
}

function renderMentorsDashboard() {
  const list = document.getElementById('mentorList');
  if (!list) return;
  list.innerHTML = mentors.slice(0, 3).map((mentor) => `
    <div class="mentor-item">
      <div class="mentor-avatar">${mentor.initials}</div>
      <div class="mini-item-copy">
        <strong>${mentor.name}</strong>
        <span>${mentor.expertise} • ${mentor.role}</span>
      </div>
      <button type="button" data-book-mentor="${escapeHTML(mentor.name)}">Book</button>
    </div>
  `).join('');
}

function renderUpcomingSessions() {
  const list = document.getElementById('upcomingSessionsList');
  if (!list) return;
  const sessions = getUserSessions();
  list.innerHTML = sessions.length ? sessions.slice(0, 3).map((session) => `
    <div class="list-item">
      <strong>${escapeHTML(session.title)}</strong>
      <span>${escapeHTML(session.mentor)} • ${escapeHTML(session.date)} • ${escapeHTML(session.time)}</span>
    </div>
  `).join('') : '<p class="empty-state">No sessions booked yet. Meet a mentor and plan a conversation.</p>';
}

function renderNotifications() {
  const list = document.getElementById('notificationList');
  if (!list) return;
  const notifications = state.currentUser?.notifications || ['Assessments now available.'];
  list.innerHTML = notifications.slice(0, 3).map((item) => `
    <div class="notification-item">
      <strong>Update</strong>
      <span>${item}</span>
    </div>
  `).join('');
}

function renderRoadmapTimeline() {
  const list = document.getElementById('careerRoadmapTimeline');
  const detailed = document.getElementById('roadmapDetailed');
  if (!list || !detailed) return;
  const completed = state.currentUser?.roadmapTasks || [];
  const progress = roadmapSteps.filter((step) => completed.includes(step.id)).length;
  const renderSteps = (prefix) => roadmapSteps.map((step) => `
    <div class="timeline-item roadmap-task ${completed.includes(step.id) ? 'done' : ''}">
      <div class="roadmap-check-row">
        <input type="checkbox" id="${prefix}-${step.id}" data-roadmap-task="${step.id}" ${completed.includes(step.id) ? 'checked' : ''} />
        <label for="${prefix}-${step.id}">${step.title}</label>
      </div>
      <span class="roadmap-task-meta">${step.detail}</span>
    </div>
  `).join('');
  list.innerHTML = `<p class="roadmap-progress-copy">${progress} of ${roadmapSteps.length} steps complete</p>${renderSteps('dash-task')}`;
  detailed.innerHTML = `
    <p class="roadmap-progress-copy">Your roadmap is a flexible guide, not a deadline. ${progress} of ${roadmapSteps.length} steps complete.</p>
    <div class="roadmap-timeline">${renderSteps('roadmap-task')}</div>
  `;
}

function renderProfile() {
  const content = document.getElementById('profileContent');
  const user = state.currentUser;
  if (!content || !user) return;

  const userInitials = escapeHTML(user.fullName.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase());
  const info = user.role === 'student'
    ? `
      <div class="info-grid">
        <div class="info-box"><strong>Education level</strong><span>${escapeHTML(user.educationLevel || 'Not specified')}</span></div>
        <div class="info-box"><strong>School / college</strong><span>${escapeHTML(user.schoolName || 'Not specified')}</span></div>
        <div class="info-box"><strong>Study stream</strong><span>${escapeHTML(user.stream || 'Not specified')}</span></div>
        <div class="info-box"><strong>Areas of interest</strong><span>${escapeHTML(user.areasOfInterest?.join(', ') || 'Not specified')}</span></div>
      </div>
    `
    : `
      <div class="info-grid">
        <div class="info-box"><strong>Professional designation</strong><span>${escapeHTML(user.designation || 'Career Mentor')}</span></div>
        <div class="info-box"><strong>Qualification</strong><span>${escapeHTML(user.qualification || 'Professional degree')}</span></div>
        <div class="info-box"><strong>Experience</strong><span>${escapeHTML(user.experience || 'Not specified')}</span></div>
        <div class="info-box"><strong>Area of expertise</strong><span>${escapeHTML(user.expertise || 'Career Guidance')}</span></div>
      </div>
    `;

  content.innerHTML = `
    <div class="profile-summary">
      <div class="avatar">${userInitials}</div>
      <h3>${escapeHTML(user.fullName)}</h3>
      <p>${user.role === 'student' ? 'Student profile' : 'Mentor profile'}</p>
      <p>${escapeHTML(user.email)}</p>
    </div>
    <div class="profile-details">
      ${info}
    </div>
  `;
  renderProfileEditForm();
}

function renderProfileEditForm() {
  const form = document.getElementById('profileEditForm');
  const user = state.currentUser;
  if (!form || !user) return;
  const value = (field) => escapeHTML(user[field] || '');
  const sharedFields = `
    <div class="field-row"><label>Full name<input name="fullName" value="${value('fullName')}" required maxlength="80" /></label></div>
    <div class="field-row"><label>Phone number<input name="phone" type="tel" value="${value('phone')}" placeholder="Optional" /></label></div>
  `;
  const roleFields = user.role === 'student'
    ? `
      <div class="field-row"><label>Education level
        <select name="educationLevel">
          ${['Class 10', 'Class 11', 'Class 12', 'Diploma', 'Undergraduate', 'Graduate'].map((level) => `<option ${user.educationLevel === level ? 'selected' : ''}>${level}</option>`).join('')}
        </select>
      </label></div>
      <div class="field-row"><label>School / college<input name="schoolName" value="${value('schoolName')}" placeholder="Your school or college" /></label></div>
      <div class="field-row"><label>Study stream<input name="stream" value="${value('stream')}" placeholder="Science, Commerce, Arts..." /></label></div>
      <div class="field-row"><label>Interests <small>(comma separated)</small><input name="areasOfInterest" value="${escapeHTML(user.areasOfInterest?.join(', ') || '')}" placeholder="Technology, Design" /></label></div>
    `
    : `
      <div class="field-row"><label>Professional designation<input name="designation" value="${value('designation')}" /></label></div>
      <div class="field-row"><label>Qualification<input name="qualification" value="${value('qualification')}" /></label></div>
      <div class="field-row"><label>Experience<input name="experience" value="${value('experience')}" placeholder="e.g. 5 years" /></label></div>
      <div class="field-row"><label>Area of expertise<input name="expertise" value="${value('expertise')}" /></label></div>
      <div class="field-row"><label>Organization<input name="organization" value="${value('organization')}" /></label></div>
      <div class="field-row"><label>Short biography<textarea name="bio" rows="3" maxlength="400">${value('bio')}</textarea></label></div>
    `;
  form.innerHTML = `${sharedFields}${roleFields}<div class="profile-save-row"><button type="submit" class="btn btn-primary">Save profile</button></div>`;
}

function renderCareerExplorer() {
  const container = document.getElementById('careerExplorerGrid');
  if (!container) return;
  const search = document.getElementById('careerSearch')?.value.trim().toLowerCase() || '';
  const category = document.getElementById('careerCategoryFilter')?.value || 'all';
  const filteredCareers = careers.filter((career) => {
    const text = `${career.name} ${career.category} ${career.summary} ${career.skills.join(' ')}`.toLowerCase();
    return (!search || text.includes(search)) && (category === 'all' || career.category === category);
  });
  container.innerHTML = filteredCareers.length ? filteredCareers.map((career) => `
    <article class="career-card">
      <div class="card-visual">${career.emoji}</div>
      <div class="card-body">
        <h3>${career.name}</h3>
        <div class="card-meta">
          <span class="tag">${career.category}</span>
        </div>
        <p>${career.summary}</p>
        <div class="card-actions">
          <button class="link-button save-career" data-career-id="${career.id}">Save</button>
          <button class="btn btn-ghost" type="button" data-career-detail="${career.id}">View details</button>
        </div>
      </div>
    </article>
  `).join('') : '<p class="empty-state">No careers match that search. Try another keyword or category.</p>';
}

function renderCollegeExplorer() {
  const searchInput = document.getElementById('collegeSearch');
  const filterSelect = document.getElementById('collegeFilter');
  const container = document.getElementById('collegeExplorer');
  if (!container) return;

  const searchValue = (searchInput ? searchInput.value : '').trim().toLowerCase();
  const streamValue = filterSelect ? filterSelect.value : 'all';

  const filtered = colleges.filter((college) => {
    const matchesText = !searchValue || college.name.toLowerCase().includes(searchValue) || college.course.toLowerCase().includes(searchValue);
    const matchesStream = streamValue === 'all' || college.stream === streamValue;
    return matchesText && matchesStream;
  });

  container.innerHTML = filtered.map((college) => `
    <article class="college-card">
      <div class="card-visual">${college.icon}</div>
      <div class="card-body">
        <h3>${college.name}</h3>
        <div class="card-meta">
          <span class="tag">${college.stream}</span>
          <span class="tag">${college.type}</span>
        </div>
        <p>${college.course} • ${college.city}</p>
        <div class="card-actions">
          <button class="link-button save-college" data-college-name="${college.name}">Save</button>
          <label><input type="checkbox" class="compare-toggle" data-college-name="${college.name}" ${state.compareSelection.includes(college.name) ? 'checked' : ''} /> Compare</label>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.compare-toggle').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const collegeName = event.target.dataset.collegeName;
      if (event.target.checked) {
        if (!state.compareSelection.includes(collegeName)) state.compareSelection.push(collegeName);
      } else {
        state.compareSelection = state.compareSelection.filter((item) => item !== collegeName);
      }
      saveState();
      renderCompareTable();
    });
  });
}

function renderMentorExplorer() {
  const filter = document.getElementById('mentorFilter')?.value || 'all';
  const container = document.getElementById('mentorExplorer');
  if (!container) return;

  const filtered = mentors.filter((mentor) => filter === 'all' || mentor.expertise === filter);
  container.innerHTML = filtered.map((mentor) => `
    <article class="mentor-card">
      <div class="card-body">
        <div class="mentor-item" style="border:none; background:transparent; padding:0; margin-bottom:10px;">
          <div class="mentor-avatar">${mentor.initials}</div>
          <div>
            <strong>${mentor.name}</strong>
            <span>${mentor.role}</span>
          </div>
        </div>
        <div class="card-meta">
          <span class="tag">${mentor.expertise}</span>
          <span class="tag">${mentor.experience}</span>
        </div>
        <p>Rated ${mentor.rating} by students and mentors.</p>
        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-book-mentor="${escapeHTML(mentor.name)}">Book session</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderMySessions() {
  const container = document.getElementById('mySessionsList');
  if (!container) return;
  const sessions = getUserSessions();
  container.innerHTML = sessions.length ? sessions.map((session) => `
    <div class="list-item">
      <div class="mini-item-copy"><strong>${escapeHTML(session.title)}</strong><span>${escapeHTML(session.mentor)} • ${escapeHTML(session.date)} • ${escapeHTML(session.time)}</span></div>
      <button type="button" data-cancel-session="${escapeHTML(session.id)}">Cancel</button>
    </div>
  `).join('') : '<p class="empty-state">You have no upcoming sessions. Book time with a mentor when you are ready.</p>';
}

function renderMessages() {
  const container = document.getElementById('messagesList');
  if (!container) return;
  container.innerHTML = getUserMessages().map((message) => `
    <div class="message-item">
      <div>
        <strong>${escapeHTML(message.sender)}</strong>
        <span>${escapeHTML(message.preview)}</span>
      </div>
      <small>${escapeHTML(message.time)}</small>
    </div>
  `).join('');
}

function renderSavedItems() {
  const user = state.currentUser;
  const container = document.getElementById('savedItemsContent');
  if (!container) return;

  const careerSaved = careers.filter((career) => user && user.savedCareers.includes(career.id)).map((career) => ({ ...career, type: 'Career', label: career.name }));
  const collegeSaved = colleges.filter((college) => user && user.savedColleges.includes(college.name)).map((college) => ({ ...college, type: 'College', label: college.name }));

  const items = [...careerSaved, ...collegeSaved];

  container.innerHTML = items.length ? items.map((item) => `
    <div class="saved-item">
      <div><strong>${escapeHTML(item.label)}</strong><span>${item.type}</span></div>
      <button type="button" data-remove-saved="${item.type.toLowerCase()}" data-item-id="${escapeHTML(item.type === 'Career' ? item.id : item.label)}" aria-label="Remove ${escapeHTML(item.label)}">Remove</button>
    </div>
  `).join('') : '<div class="saved-item"><strong>No saved items yet</strong><span>Start saving careers and colleges.</span></div>';
}

function renderCompareTable() {
  const container = document.getElementById('compareTable');
  if (!container) return;
  const selected = colleges.filter((college) => state.compareSelection.includes(college.name));

  if (!selected.length) {
    container.innerHTML = '<p>Select at least two colleges to compare.</p>';
    return;
  }

  const rows = [
    ['Course', ...selected.map((college) => college.course)],
    ['Location', ...selected.map((college) => college.city)],
    ['Type', ...selected.map((college) => college.type)],
    ['Rating', ...selected.map((college) => `${college.rating}/10`)]
  ];

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Criteria</th>
          ${selected.map((college) => `<th>${college.name}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            <td>${row[0]}</td>
            ${row.slice(1).map((cell) => `<td>${cell}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function saveCareer(careerId) {
  const user = state.currentUser;
  if (!user) {
    openAuth('register');
    return;
  }
  if (!user.savedCareers.includes(careerId)) {
    user.savedCareers.push(careerId);
    saveState();
    renderDashboard();
    showToast('Career added to your saved items.');
  } else {
    showToast('That career is already saved.');
  }
}

function saveCollege(collegeName) {
  const user = state.currentUser;
  if (!user) {
    openAuth('register');
    return;
  }
  if (!user.savedColleges.includes(collegeName)) {
    user.savedColleges.push(collegeName);
    saveState();
    renderDashboard();
    showToast('College added to your shortlist.');
  } else {
    showToast('That college is already on your shortlist.');
  }
}

function removeSavedItem(type, itemId) {
  if (!state.currentUser) return;
  if (type === 'career') {
    state.currentUser.savedCareers = state.currentUser.savedCareers.filter((id) => id !== itemId);
  } else {
    state.currentUser.savedColleges = state.currentUser.savedColleges.filter((name) => name !== itemId);
  }
  saveState();
  renderDashboard();
  showToast('Saved item removed.');
}

function openCareerDetails(careerId) {
  const career = careers.find((item) => item.id === careerId);
  if (!career) return;
  const content = document.getElementById('careerDetailContent');
  content.innerHTML = `
    <span class="eyebrow">${escapeHTML(career.category)}</span>
    <h2>${career.emoji} ${escapeHTML(career.name)}</h2>
    <p>${escapeHTML(career.summary)}</p>
    <div class="career-detail-list">
      <div class="career-detail-block"><h4>Qualifications</h4><p>${career.qualifications.map(escapeHTML).join('<br>')}</p></div>
      <div class="career-detail-block"><h4>Eligibility</h4><p>${escapeHTML(career.eligibility)}</p></div>
      <div class="career-detail-block"><h4>Entrance exams</h4><p>${career.exams.map(escapeHTML).join(', ')}</p></div>
      <div class="career-detail-block"><h4>Useful skills</h4><p>${career.skills.map(escapeHTML).join(', ')}</p></div>
      <div class="career-detail-block"><h4>Courses</h4><p>${career.courses.map(escapeHTML).join(', ')}</p></div>
      <div class="career-detail-block"><h4>Career opportunities</h4><p>${career.jobs.map(escapeHTML).join(', ')}</p></div>
      <div class="career-detail-block"><h4>Further study</h4><p>${career.study.map(escapeHTML).join(', ')}</p></div>
    </div>
    <button class="btn btn-primary" type="button" data-detail-save-career="${career.id}">Save this career</button>
  `;
  content.querySelector('[data-detail-save-career]').addEventListener('click', () => {
    closeCareerDetails();
    saveCareer(career.id);
  });
  const modal = document.getElementById('careerDetailModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeCareerDetails() {
  const modal = document.getElementById('careerDetailModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function openBookingModal(mentorName) {
  if (!state.currentUser) {
    openAuth('register');
    return;
  }
  if (state.currentUser.role !== 'student') {
    showToast('Mentor session booking is available from a student account.');
    return;
  }
  const mentor = mentors.find((item) => item.name === mentorName);
  if (!mentor) return;
  const dateInput = document.getElementById('bookingDate');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowValue = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
  dateInput.min = tomorrowValue;
  dateInput.value = tomorrowValue;
  document.getElementById('bookingMentorName').value = mentor.name;
  document.getElementById('bookingMentorSummary').textContent = `${mentor.name} · ${mentor.role} · ${mentor.experience} of experience`;
  document.getElementById('bookingTopic').value = '';
  const modal = document.getElementById('bookingModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function cancelSession(sessionId) {
  if (!state.currentUser) return;
  const session = getUserSessions().find((item) => item.id === sessionId);
  state.currentUser.sessions = getUserSessions().filter((item) => item.id !== sessionId);
  if (session) state.currentUser.notifications.unshift(`Your session with ${session.mentor} was cancelled.`);
  saveState();
  renderDashboard();
  showToast('Session cancelled.');
}

function applyTheme() {
  document.body.classList.toggle('dark-mode', state.darkMode);
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) themeIcon.textContent = state.darkMode ? '🌙' : '☀️';
  const dashboardThemeIcon = document.querySelector('.dashboard-theme-toggle');
  if (dashboardThemeIcon) dashboardThemeIcon.textContent = state.darkMode ? '☀' : '☾';
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove('show'), 2200);
}
