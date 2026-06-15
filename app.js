const categories = [
  {
    name: "Check-In & Wellbeing",
    questions: [
      "How are you doing - honestly?",
      "How are you feeling right now, on a scale of 1 to 10?",
      "What's been on your mind lately?",
      "What's on your mind this week?",
      "What's top of mind for you right now?",
      "How's your energy level these days?",
      "Is anything stressing you out right now?",
      "What, if anything, feels harder than it should be in your day-to-day work?",
      "When have you felt stressed or overwhelmed recently? How can I help prevent that?",
      "Are there points during the day where you feel like you're drowning?",
      "Is anything at work keeping you awake at night?",
      "How are you feeling about your work-life balance?",
      "Do you feel you have a good work-life balance and are able to disconnect after work?",
      "What do you do to make sure you're not burning out?",
      "How's life outside of work?",
      "How's your weekend been? What are you looking forward to this week?",
      "What hobbies do you enjoy outside of work?",
      "What are you reading or watching these days?",
      "What's something you're really jazzed about outside of work?",
      "If you had to describe your current mood as a weather report, what would it look like?"
    ]
  },
  {
    name: "Current Work & Priorities",
    questions: [
      "What are your top priorities right now?",
      "What are your current projects, and how are they progressing?",
      "What took up most of your time this past week?",
      "What will your priorities be between now and our next meeting?",
      "What are the most important things you will focus on before we meet next?",
      "What's your outlook on next week? How about next month?",
      "What percentage of your time goes to meetings versus deep work?",
      "What would you like to spend more time on?",
      "What would you like to spend less time on?",
      "What are the biggest challenges you face in your role that aren't visible to others?",
      "How is [specific project] going? How do you feel about it?",
      "What upcoming deadlines or milestones should we be aware of?",
      "What did you accomplish last week that I might not know about?",
      "What was your biggest challenge yesterday or last week?",
      "What's your least favorite part of your day-to-day at work?",
      "What makes you excited and motivated to work on a project?",
      "When do you do your best work: morning, afternoon, or evening?",
      "How do you like to organize your day?",
      "What are the biggest time wasters in your typical week?",
      "What meeting could we eliminate or shorten?"
    ]
  },
  {
    name: "Roadblocks & Support",
    questions: [
      "What obstacles are you encountering right now?",
      "What roadblocks can I help you with?",
      "Is anything slowing you down or blocking you right now?",
      "Are there any obstacles preventing you from doing your best work?",
      "Where do you need help?",
      "What do you need? What could make your day-to-day easier?",
      "What's the one thing that would make the biggest difference in your ability to succeed?",
      "Are there decisions you're waiting on that are holding you back?",
      "Do I have anything outstanding for you that I haven't done yet?",
      "What, if anything, is frustrating you or keeping you from doing your best work?",
      "Are there tools or resources that would make your work easier?",
      "Are there any resources or tools you need to be more productive?",
      "What can I do right now to make work better for you?",
      "Do you have any questions that, if answered, would help you in your day-to-day?",
      "Is there anything about your job you feel unclear on?",
      "Do you have any questions about what other team members are working on?"
    ]
  },
  {
    name: "Growth & Career Development",
    questions: [
      "What work are you doing here that you feel is most in line with your long-term goals?",
      "What do you want to be doing in 5 years? 10 years?",
      "What are your long-term goals? Have you thought about them?",
      "What are three long-term professional goals that matter to you?",
      "What professional goals would you like to accomplish in the next 6 to 12 months?",
      "Where do you see yourself in the next year or two?",
      "What skills would you like to develop right now?",
      "What new things have you learned recently?",
      "What is one aspect of your job you would like more help or coaching on?",
      "What area of the company would you like to learn more about?",
      "Who in the company would you like to learn from? What do you want to learn?",
      "Are there mentors inside or outside the company you'd like to connect with?",
      "What additional training or education would you like?",
      "Are there any conferences, workshops, or courses you'd like to attend?",
      "What are your superpowers? What powers would you like to develop?",
      "Do you feel challenged at work? Are you learning new things?",
      "Do you feel like you're making progress on your big goals here?",
      "Do you feel we're helping you advance your career at a pace you'd like? Why or why not?",
      "Is your job what you expected when you accepted it? If not, where has it differed?",
      "What other roles at [company] do you find interesting?",
      "Do you see yourself as an individual contributor or moving into management?",
      "What do you want the peak of your career to look like?",
      "If you could take a course in anything, what would it be?",
      "What habits would you like to develop? What habits would you like to break?",
      "A year from now, what do you want to have accomplished?",
      "As a kid, what did you want to be when you grew up?",
      "If you had millions of dollars, what would you do every day?",
      "What are your short, medium, and long-term career goals?",
      "What's one thing you'd like to do more of outside of work this coming month?",
      "What steps can I take right now to progress my career with the company?",
      "How can I improve my skills? What should I be reading? Where can I take classes?",
      "What skills gaps do you see on our team that I could help fill?"
    ]
  },
  {
    name: "Motivation & Engagement",
    questions: [
      "What motivates you to come to work each day?",
      "What makes you excited to work on a project?",
      "What's your favorite part of your job?",
      "Is there anything about your job you really don't enjoy?",
      "What have you been happiest about this past month?",
      "What have you been less happy about?",
      "On a scale of 1-10, how happy are you at work? What would it take to get to a 10?",
      "What projects are you working on that you wish you weren't?",
      "Are there projects you'd really like to work on?",
      "What's one new thing you'd like to work on?",
      "What are you most proud of accomplishing here?",
      "Are you proud of the work you do here?",
      "What's something you're proud of that happened this week or this month?",
      "What's something you're itching to try that you haven't had the time or resources for?",
      "What's the best thing about working here?",
      "How often do you get to use your strengths at work?",
      "What inspires you right now? What gives you energy?",
      "When was the last time you experienced a state of flow at work?",
      "What would you call the informal role you play on the team?",
      "If you were the CEO, what's the first thing you'd change?",
      "What's one thing we could change about work for you that would improve your personal life?",
      "What does an ideal, productive workday look like to you? Walk me through it.",
      "What things regularly drain your energy or slow you down?",
      "After a failure, what do you do to pick yourself up again?",
      "What are you doing right now that isn't really getting you anywhere?",
      "If you could delegate one of your responsibilities to someone else, which would it be?",
      "You get a magic wand and have one wish related to work - what would you wish for?"
    ]
  },
  {
    name: "Feedback & Communication",
    questions: [
      "Do you feel like you're getting enough feedback from me?",
      "How would you like me to share feedback with you?",
      "What's the best feedback you've received in the last 90 days?",
      "What do you like about my management style? What do you dislike?",
      "On a scale of 1-10, how has my level of support been over the past month?",
      "What is one thing I could experiment with doing differently this month?",
      "If I could improve one skill between this meeting and the next, which would you choose?",
      "What's something everyone around me is neglecting to share with me?",
      "What do you wish I did less of? More of?",
      "Am I giving you enough feedback on your work?",
      "Would you like more or less direction from me?",
      "Can you think of something I've done recently that you disagreed with?",
      "Is there something I'm doing that I could delegate to someone else?",
      "What's your favorite thing I do as a manager?",
      "What could I do to help us work better together?",
      "Am I providing enough clarity on our direction?",
      "Where would you like me more involved in your day-to-day? Where would you like me less involved?",
      "Do you feel this is a safe space to share concerns?",
      "Are you happy with our level of communication? How would you change it?",
      "Where has our communication faltered? Can you give me an example?",
      "What's top of mind right now that we haven't talked about yet?",
      "What do you like about our one-on-one meetings? What can be improved?",
      "Are these meetings living up to your expectations?",
      "Are there any areas you'd like more or less direction on?",
      "How could I be more like the manager you've always wished for?",
      "Is there anything you feel I should know that others aren't telling me?",
      "What's something you feel unclear about regarding my work?",
      "How am I doing with [specific thing]?",
      "Am I giving enough feedback to my peers?",
      "Do you feel I contribute enough in team meetings?"
    ]
  },
  {
    name: "Team & Collaboration",
    questions: [
      "How do you feel about our team's collaboration and communication?",
      "Do you feel like the team is communicating effectively? If not, what's in the way?",
      "Who is doing a great job on the team? What have they done?",
      "Do you have any problems with the team that I can help you resolve?",
      "Which team members do you wish you had a stronger connection with?",
      "Do you see any gaps in the team's knowledge that might be holding us back?",
      "Do you feel like you're able to ask others for help? Why or why not?",
      "What types of questions do you wish I'd ask you in team meetings?",
      "What can we do to improve teamwork and collaboration?",
      "Is there anything about our team meetings that frustrates you?",
      "Who works really well together on the team?",
      "How is [new team member] doing?",
      "Do you feel comfortable giving constructive feedback to your peers?",
      "Are there people on the team you think could work together more effectively?",
      "Are there aspects of our team culture you'd like to change?",
      "Is there a difficult conversation our team needs to have that we're avoiding?",
      "What team-building activity would you suggest?",
      "Do you think our team activities are inclusive? How could we improve?",
      "What's something we should start doing as a team? What should we stop?",
      "What's the biggest challenge facing this team right now?",
      "What problems exist on this team that I might not know about?",
      "What's stopping this team from succeeding?",
      "If you were managing the team, what would you do differently?",
      "What's one thing we could change to improve communication within the team?",
      "What's one thing we could do to improve the performance of the team?",
      "How could we improve cross-functional collaboration?",
      "How are you getting along with other teams in our department?",
      "Who on our team deserves a shoutout for their work, and why?"
    ]
  },
  {
    name: "Company, Culture & Strategy",
    questions: [
      "What are you least clear about in terms of our company-wide strategy and goals?",
      "What's the biggest problem in our organization?",
      "What's the #1 opportunity for our company?",
      "What's the biggest risk for our company?",
      "What do you love about our company culture?",
      "What aspects of company culture would you like to change?",
      "How can we make our company more inclusive and diverse?",
      "What's the most inefficient process in the business?",
      "What should we be doing as a company that we're not?",
      "What would you change about our product?",
      "Do you think our team is well recognized in the company?",
      "How confident do you feel about where the company is going?",
      "How aligned do you feel with where the company is going?",
      "Do you have any questions about the recent change involving [X]?",
      "Have you been disappointed by any company decisions this year?",
      "Do you think we've communicated our company values clearly?",
      "What's one thing we could do to improve internal communication?",
      "When have you felt proudest to be part of this company?",
      "What area of the company would you like to learn more about?",
      "How are we progressing on our goals as a team?",
      "What big changes are coming down the pipe in the next 6 months?",
      "What's the next role you're thinking of hiring for our team?",
      "If there were unlimited budget and resources, what's the first thing you'd change?",
      "What's worrying senior leadership right now?",
      "What are we doing to make ourselves stand out from our competitors?"
    ]
  },
  {
    name: "Manager Support & Managing Up",
    questions: [
      "How can I better support you?",
      "What's worrying you most?",
      "What are your biggest challenges leading the team?",
      "What are you most excited about in your day-to-day?",
      "Is there anything I can do more or less of that would help you?",
      "What's your biggest challenge as a people leader?",
      "What's your highest priority right now? How can I help?",
      "What part of my job would you like more visibility into?",
      "Who would you like me to start talking to or working more with?",
      "What should I be mindful of when working with other teams?",
      "What are your long-term goals for the team?",
      "Are you thinking about expanding the team?",
      "What do you wish our team did better?",
      "Looking ahead, what are you most hopeful and worried about?"
    ]
  },
  {
    name: "Performance & New Ideas",
    questions: [
      "What's one recent win you're proud of, and how can we build on that?",
      "What's a recent situation you wish you handled differently?",
      "From your perspective, how do you feel you've progressed during this review period?",
      "What are your key areas for improvement?",
      "Do you feel you have the skills you need for what's being asked of you?",
      "Is there anything in the work environment that's hindering your performance?",
      "Do you understand how your work contributes to our larger goals?",
      "Are there aspects of your job that you find demotivating?",
      "Do you receive enough feedback? Is it the right kind?",
      "What challenges do you anticipate in the next month - and what support would help?",
      "Are there new ideas you'd like to discuss?",
      "What options are you considering?",
      "What could be your first step?",
      "What does your ideal outcome look like?",
      "What's making it hard to reach that outcome?",
      "What's the worst-case scenario you're worried about?",
      "On a scale of 1-10, what's the likelihood of this succeeding? What would make it a 10?",
      "What do you think is the best course of action?",
      "What's the biggest opportunity you see that we're not thinking about?"
    ]
  },
  {
    name: "New Employee & First 1:1",
    questions: [
      "What are your expectations for this role?",
      "What are you most excited about?",
      "What does success look like to you?",
      "What are some pitfalls we should avoid?",
      "Why did you decide to work here?",
      "Is there anything you'd like to know about me?",
      "What makes one-on-ones most valuable for you?",
      "Who is the best manager you've ever had? What did you like about their approach?",
      "How do you prefer to receive recognition - publicly or privately?",
      "What's your preferred method of communication for different types of updates?",
      "How can I tell when you're stressed or frustrated?",
      "Are there manager behaviors you know don't work well for you?",
      "What career goals should I know about so I can help you achieve them?",
      "Any surprises since you've joined - good or bad - that I should know about?",
      "What can I do to help you succeed in your first 90 days?",
      "How's everybody at home? What do you do for fun?",
      "Where did you grow up? What's something you liked about the area?",
      "Do you have any pets?",
      "What did you do for fun in the past that you haven't had as much time for lately?"
    ]
  },
  {
    name: "Remote Employees",
    questions: [
      "Do you feel the company supports remote staff effectively? How could we do better?",
      "Do you feel included in our decision-making processes?",
      "How do you manage distractions during the day?",
      "Do you feel connected to the team despite the distance?",
      "What tools or processes would make remote collaboration easier?",
      "Are there in-person opportunities you wish you had access to?",
      "What would help us improve daily communication?",
      "How is the weather where you are?"
    ]
  },
  {
    name: "Closing & Wrap-Up",
    questions: [
      "What are the key takeaways from our conversation today?",
      "What action items do you have? What are mine?",
      "Is there anything you need from me before our next meeting?",
      "How are you feeling about everything we discussed?",
      "What should we make sure to follow up on next time?",
      "Is there anything you wanted to bring up but didn't get a chance to?",
      "What was the most useful part of our conversation today?",
      "Do you feel clear on next steps and priorities?",
      "What's one thing you're taking away from this conversation?",
      "Is there anything we didn't cover that you'd like to discuss?",
      "On a scale of 1-10, how productive was this one-on-one?",
      "Is there something weighing on you that you'd rather discuss next time?",
      "How can I best support you between now and our next meeting?",
      "Is there anything I committed to previously that I haven't delivered on?",
      "What are you committing to between now and the next time we meet?",
      "What can I help you with between now and the next time we meet?"
    ]
  },
  {
    name: "Icebreakers & Rapport",
    questions: [
      "What's the most random job you've ever had?",
      "What's one cuisine you could live without?",
      "What's your favorite restaurant in our city?",
      "If you could give your younger self some advice, what would it be?",
      "What are you passionate about, personally or professionally?",
      "What's something you're really proud of outside of work?",
      "Who do you really admire? Why?",
      "What's something a past manager did that inspired you?",
      "What's something a past manager did that frustrated you?",
      "What's a personal goal you're working toward this year?",
      "I've just finished [TV show] - are you watching anything good at the moment?",
      "Reading anything interesting right now?",
      "Have you got any travel plans this year?",
      "What's been the highlight of your week?",
      "Which one best describes your mood this past month? 😀 🙂 😐 🤔 😒"
    ]
  }
];

const baseQuestionBank = categories.flatMap((category, categoryIndex) =>
  category.questions.map((text, questionIndex) => ({
    id: `${categoryIndex}-${questionIndex}`,
    category: category.name,
    text,
    direction: text.toLowerCase().includes("(employee asks)") || [
      "What steps can I take right now to progress my career with the company?",
      "How can I improve my skills? What should I be reading? Where can I take classes?",
      "What skills gaps do you see on our team that I could help fill?",
      "How could I be more like the manager you've always wished for?",
      "Is there anything you feel I should know that others aren't telling me?",
      "What's something you feel unclear about regarding my work?",
      "How am I doing with [specific thing]?",
      "Am I giving enough feedback to my peers?",
      "Do you feel I contribute enough in team meetings?",
      "What area of the company would you like to learn more about?",
      "How are we progressing on our goals as a team?",
      "What big changes are coming down the pipe in the next 6 months?",
      "What's the next role you're thinking of hiring for our team?",
      "If there were unlimited budget and resources, what's the first thing you'd change?",
      "What's worrying senior leadership right now?",
      "What are we doing to make ourselves stand out from our competitors?",
      "How can I better support you?",
      "What's worrying you most?",
      "What are your biggest challenges leading the team?",
      "What are you most excited about in your day-to-day?",
      "Is there anything I can do more or less of that would help you?",
      "What's your biggest challenge as a people leader?",
      "What's your highest priority right now? How can I help?",
      "What part of my job would you like more visibility into?",
      "Who would you like me to start talking to or working more with?",
      "What should I be mindful of when working with other teams?",
      "What are your long-term goals for the team?",
      "Are you thinking about expanding the team?",
      "What do you wish our team did better?",
      "Looking ahead, what are you most hopeful and worried about?"
    ].includes(text) ? "employee" : "manager"
  }))
);

let questionBank = [...baseQuestionBank];

const state = {
  category: "All",
  direction: "all",
  search: "",
  onlyFavorites: false,
  index: 0,
  history: [],
  favorites: new Set(JSON.parse(localStorage.getItem("loop:favorites") || "[]")),
  votes: JSON.parse(localStorage.getItem("loop:votes") || "{}"),
  voted: new Set(JSON.parse(localStorage.getItem("loop:voted") || "[]")),
  submitted: JSON.parse(localStorage.getItem("loop:submitted") || "[]"),
  session: JSON.parse(localStorage.getItem("loop:session") || "[]")
};

const els = {
  categoryList: document.querySelector("#category-list"),
  count: document.querySelector("#visible-count"),
  category: document.querySelector("#question-category"),
  position: document.querySelector("#question-position"),
  question: document.querySelector("#question-text"),
  search: document.querySelector("#search"),
  favorite: document.querySelector("#favorite"),
  copy: document.querySelector("#copy"),
  vote: document.querySelector("#vote-useful"),
  voteCount: document.querySelector("#vote-count"),
  add: document.querySelector("#add-to-session"),
  previous: document.querySelector("#previous"),
  next: document.querySelector("#next"),
  shuffle: document.querySelector("#shuffle"),
  sessionList: document.querySelector("#session-list"),
  sessionEmpty: document.querySelector("#session-empty"),
  clearSession: document.querySelector("#clear-session"),
  exportSession: document.querySelector("#export-session"),
  favoriteCount: document.querySelector("#favorite-count"),
  showFavorites: document.querySelector("#show-favorites"),
  form: document.querySelector("#question-form"),
  submittedQuestion: document.querySelector("#submitted-question"),
  submittedCategory: document.querySelector("#submitted-category"),
  submittedCount: document.querySelector("#submitted-count"),
  toast: document.querySelector("#toast")
};

function refreshQuestionBank() {
  const customQuestions = state.submitted.map((question, index) => ({
    id: `custom-${index}`,
    category: question.category,
    text: question.text,
    direction: "manager",
    custom: true
  }));
  questionBank = [...baseQuestionBank, ...customQuestions];
}

function filteredQuestions() {
  const term = state.search.trim().toLowerCase();
  return questionBank.filter((question) => {
    const categoryMatch = state.category === "All" || question.category === state.category;
    const directionMatch = state.direction === "all" || question.direction === state.direction;
    const favoriteMatch = !state.onlyFavorites || state.favorites.has(question.id);
    const searchMatch = !term || `${question.text} ${question.category}`.toLowerCase().includes(term);
    return categoryMatch && directionMatch && favoriteMatch && searchMatch;
  });
}

function currentQuestion() {
  const questions = filteredQuestions();
  if (state.index >= questions.length) state.index = Math.max(questions.length - 1, 0);
  return questions[state.index];
}

function renderCategories() {
  const allButton = categoryButton("All", questionBank.length);
  els.categoryList.replaceChildren(allButton, ...categories.map((category) =>
    categoryButton(category.name, questionBank.filter((question) => question.category === category.name).length)
  ));
}

function categoryButton(name, count) {
  const button = document.createElement("button");
  button.className = `category-button${state.category === name ? " active" : ""}`;
  button.type = "button";
  button.dataset.category = name;
  button.innerHTML = `<span>${name}</span><span>${count}</span>`;
  button.addEventListener("click", () => {
    state.category = name;
    state.onlyFavorites = false;
    state.index = 0;
    state.history = [];
    render();
  });
  return button;
}

function renderQuestion() {
  const questions = filteredQuestions();
  const question = currentQuestion();
  els.count.textContent = questions.length;

  if (!question) {
    els.category.textContent = "No match";
    els.position.textContent = "0 of 0";
    els.question.textContent = "Try a different filter or search.";
    els.favorite.disabled = true;
    els.copy.disabled = true;
    els.vote.disabled = true;
    els.add.disabled = true;
    return;
  }

  els.category.textContent = question.category;
  els.position.textContent = `${state.index + 1} of ${questions.length}`;
  els.question.textContent = question.text;
  els.favorite.disabled = false;
  els.copy.disabled = false;
  els.vote.disabled = false;
  els.add.disabled = false;
  els.favorite.classList.toggle("active", state.favorites.has(question.id));
  els.favorite.querySelector("span").textContent = state.favorites.has(question.id) ? "★" : "☆";
  els.vote.classList.toggle("active", state.voted.has(question.id));
  els.voteCount.textContent = state.votes[question.id] || 0;
}

function renderSession() {
  const items = state.session.map((id) => questionBank.find((question) => question.id === id)).filter(Boolean);
  els.sessionList.replaceChildren(...items.map((question) => {
    const item = document.createElement("li");
    item.textContent = question.text;
    return item;
  }));
  els.sessionEmpty.hidden = items.length > 0;
  els.exportSession.disabled = items.length === 0;
  els.favoriteCount.textContent = `${state.favorites.size} saved`;
  els.showFavorites.textContent = state.onlyFavorites ? "All" : "Show";
  els.submittedCount.textContent = `${state.submitted.length} submitted`;
}

function renderSubmittedCategories() {
  const options = categories.map((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    return option;
  });
  els.submittedCategory.replaceChildren(...options);
}

function renderDirection() {
  document.querySelectorAll("[data-direction]").forEach((button) => {
    button.classList.toggle("active", button.dataset.direction === state.direction);
  });
}

function render() {
  refreshQuestionBank();
  renderCategories();
  renderDirection();
  renderQuestion();
  renderSession();
}

function goToIndex(index) {
  const questions = filteredQuestions();
  if (!questions.length) return;
  state.history.push(state.index);
  state.index = (index + questions.length) % questions.length;
  renderQuestion();
}

function shuffleQuestion() {
  const questions = filteredQuestions();
  if (questions.length < 2) return;
  let nextIndex = state.index;
  while (nextIndex === state.index) {
    nextIndex = Math.floor(Math.random() * questions.length);
  }
  goToIndex(nextIndex);
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast("Copy failed. Select the text and copy manually.");
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => els.toast.classList.remove("show"), 1900);
}

function saveFavorites() {
  localStorage.setItem("loop:favorites", JSON.stringify([...state.favorites]));
}

function saveSession() {
  localStorage.setItem("loop:session", JSON.stringify(state.session));
}

function saveVotes() {
  localStorage.setItem("loop:votes", JSON.stringify(state.votes));
  localStorage.setItem("loop:voted", JSON.stringify([...state.voted]));
}

function saveSubmitted() {
  localStorage.setItem("loop:submitted", JSON.stringify(state.submitted));
}

document.querySelectorAll("[data-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    state.direction = button.dataset.direction;
    state.onlyFavorites = false;
    state.index = 0;
    state.history = [];
    render();
  });
});

els.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  state.index = 0;
  state.history = [];
  renderQuestion();
});

els.favorite.addEventListener("click", () => {
  const question = currentQuestion();
  if (!question) return;
  if (state.favorites.has(question.id)) {
    state.favorites.delete(question.id);
    showToast("Removed from favorites");
  } else {
    state.favorites.add(question.id);
    showToast("Saved to favorites");
  }
  saveFavorites();
  renderQuestion();
  renderSession();
});

els.copy.addEventListener("click", () => {
  const question = currentQuestion();
  if (question) copyText(question.text, "Question copied");
});

els.vote.addEventListener("click", () => {
  const question = currentQuestion();
  if (!question) return;
  const currentVotes = state.votes[question.id] || 0;
  if (state.voted.has(question.id)) {
    state.voted.delete(question.id);
    state.votes[question.id] = Math.max(currentVotes - 1, 0);
    showToast("Vote removed");
  } else {
    state.voted.add(question.id);
    state.votes[question.id] = currentVotes + 1;
    showToast("Marked useful");
  }
  saveVotes();
  renderQuestion();
});

els.add.addEventListener("click", () => {
  const question = currentQuestion();
  if (!question) return;
  if (!state.session.includes(question.id)) {
    state.session.push(question.id);
    saveSession();
    renderSession();
    showToast("Added to session");
  } else {
    showToast("Already in session");
  }
});

els.previous.addEventListener("click", () => {
  if (state.history.length) {
    state.index = state.history.pop();
    renderQuestion();
  } else {
    goToIndex(state.index - 1);
  }
});

els.next.addEventListener("click", () => goToIndex(state.index + 1));
els.shuffle.addEventListener("click", shuffleQuestion);

els.clearSession.addEventListener("click", () => {
  state.session = [];
  saveSession();
  renderSession();
  showToast("Session cleared");
});

els.exportSession.addEventListener("click", () => {
  const items = state.session.map((id) => questionBank.find((question) => question.id === id)).filter(Boolean);
  const date = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const notes = [`# 1:1 Session - ${date}`, "", ...items.map((question, index) => `${index + 1}. ${question.text}`)].join("\n");
  copyText(notes, "Session notes copied");
});

els.showFavorites.addEventListener("click", () => {
  const favoriteIds = [...state.favorites];
  if (!favoriteIds.length) {
    showToast("No favorites saved yet");
    return;
  }
  state.category = "All";
  state.direction = "all";
  state.search = "";
  state.onlyFavorites = !state.onlyFavorites;
  els.search.value = "";
  state.index = 0;
  render();
});

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = els.submittedQuestion.value.trim();
  const category = els.submittedCategory.value;
  if (text.length < 8 || !text.endsWith("?")) {
    showToast("Add a complete question ending with a question mark");
    return;
  }
  state.submitted.push({ text, category });
  saveSubmitted();
  state.category = category;
  state.onlyFavorites = false;
  state.search = "";
  els.search.value = "";
  els.submittedQuestion.value = "";
  refreshQuestionBank();
  state.index = filteredQuestions().findIndex((question) => question.text === text && question.category === category);
  render();
  showToast("Question added");
});

window.addEventListener("keydown", (event) => {
  if (event.target.matches("input")) return;
  if (event.key === "ArrowRight") goToIndex(state.index + 1);
  if (event.key === "ArrowLeft") els.previous.click();
  if (event.key.toLowerCase() === " ") {
    event.preventDefault();
    shuffleQuestion();
  }
});

renderSubmittedCategories();
render();
