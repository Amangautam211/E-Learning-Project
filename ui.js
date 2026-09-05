/* ============================================================
   LEARNVERSE — Shared UI
   Navbar, toasts, modals, theme toggle, chatbot, confetti
   ============================================================ */

const UI = {
  // ── Initialize ─────────────────────────────────
  init() {
    this.initTheme();
    this.initNavbar();
    this.initRevealAnimations();
    this.initBadgeListener();
    this.initChatbot();
  },

  // ── Theme Toggle ───────────────────────────────
  initTheme() {
    const theme = Store.getTheme();
    document.documentElement.setAttribute('data-theme', theme);
  },

  toggleTheme() {
    const current = Store.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    Store.setTheme(next);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.classList.toggle('light', next === 'light');
  },

  // ── Navbar ─────────────────────────────────────
  initNavbar() {
    const user = Store.getUser();
    const page = this.getCurrentPage();

    // Build navbar HTML
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const navLinks = [
      { href: 'index.html', label: 'Home', id: 'index' },
      { href: 'courses.html', label: 'Courses', id: 'courses' },
    ];

    if (user) {
      navLinks.push(
        { href: 'dashboard.html', label: 'Dashboard', id: 'dashboard' },
        { href: 'profile.html', label: 'Profile', id: 'profile' }
      );
    }

    const avatar = user ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : '';
    const stats = user ? Store.getStats() : null;

    navbar.innerHTML = `
      <div class="navbar__inner">
        <a href="index.html" class="navbar__logo">
          <div class="navbar__logo-icon">🚀</div>
          LearnVerse
        </a>

        <nav class="navbar__nav" id="navMenu">
          ${navLinks.map(link => `
            <a href="${link.href}" class="navbar__link ${page === link.id ? 'active' : ''}">${link.label}</a>
          `).join('')}
        </nav>

        <div class="navbar__actions">
          ${user && stats ? `
            <span class="navbar__streak" title="Day streak">🔥 ${stats.streak}</span>
            <span class="navbar__xp" title="Experience Points">⚡ ${stats.xp} XP</span>
          ` : ''}
          <button class="theme-toggle ${Store.getTheme() === 'light' ? 'light' : ''}" onclick="UI.toggleTheme()" title="Toggle theme"></button>
          ${user ? `
            <a href="profile.html" class="navbar__avatar" title="${user.name}">${avatar}</a>
          ` : `
            <a href="login.html" class="btn btn--primary btn--sm">Sign In</a>
          `}
          <button class="navbar__mobile-toggle" onclick="UI.toggleMobileNav()">☰</button>
        </div>
      </div>
    `;

    // Scroll effect
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  },

  toggleMobileNav() {
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.toggle('open');
  },

  getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('dashboard')) return 'dashboard';
    if (path.includes('courses') && !path.includes('course-detail')) return 'courses';
    if (path.includes('course-detail')) return 'course-detail';
    if (path.includes('profile')) return 'profile';
    if (path.includes('login')) return 'login';
    if (path.includes('community')) return 'community';
    return 'index';
  },

  // ── Toast Notifications ────────────────────────
  showToast(title, message, type = 'info', duration = 4000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️', xp: '⚡' };
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast__icon">${icons[type] || 'ℹ️'}</span>
      <div class="toast__content">
        <div class="toast__title">${title}</div>
        ${message ? `<div class="toast__message">${message}</div>` : ''}
      </div>
      <button class="toast__close" onclick="this.closest('.toast').remove()">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  showXPToast(amount) {
    this.showToast(`+${amount} XP`, 'Keep going! 🎉', 'xp', 3000);
  },

  // ── XP Popup ───────────────────────────────────
  showXPPopup(amount) {
    const popup = document.createElement('div');
    popup.className = 'xp-popup';
    popup.innerHTML = `
      <div class="xp-popup__value">+${amount}</div>
      <div class="xp-popup__label">XP Earned!</div>
    `;
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.style.transition = 'all 0.5s ease';
      popup.style.opacity = '0';
      popup.style.transform = 'translate(-50%, -50%) scale(1.5)';
      setTimeout(() => popup.remove(), 500);
    }, 1500);
  },

  // ── Confetti Effect ────────────────────────────
  showConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#ef4444'];
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.bottom = '-10px';
      piece.style.width = Math.random() * 10 + 5 + 'px';
      piece.style.height = Math.random() * 10 + 5 + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      piece.style.animationDuration = (Math.random() * 2 + 1) + 's';
      piece.style.animationDelay = Math.random() * 0.5 + 's';
      container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 3000);
  },

  // ── Badge Notification ─────────────────────────
  initBadgeListener() {
    window.addEventListener('badgeEarned', (e) => {
      const badge = e.detail;
      this.showConfetti();
      this.showToast(
        `🏆 Badge Earned: ${badge.name}!`,
        `${badge.icon} ${badge.description}`,
        'success',
        5000
      );
    });
  },

  // ── Reveal Animations ─────────────────────────
  initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  // ── Course Card Renderer ───────────────────────
  renderCourseCard(course, progress = null) {
    const cat = CATEGORIES.find(c => c.id === course.category);
    const diffClass = course.difficulty.toLowerCase();
    const progressPct = progress
      ? Math.round((progress.completedLessons.length / course.lessons.length) * 100)
      : 0;

    return `
      <div class="course-card" onclick="window.location.href='course-detail.html?id=${course.id}'">
        <div class="course-card__image">
          <img src="${course.thumbnail}" alt="${course.title}" loading="lazy"
               onerror="this.style.display='none'">
          <span class="course-card__badge course-card__badge--${diffClass}">${course.difficulty}</span>
          ${progress ? `
            <div class="course-card__progress-bar">
              <div class="course-card__progress-bar-fill" style="width: ${progressPct}%"></div>
            </div>
          ` : ''}
        </div>
        <div class="course-card__body">
          <div class="course-card__category">${cat ? cat.icon + ' ' + cat.name : course.category}</div>
          <h3 class="course-card__title">${course.title}</h3>
          <div class="course-card__meta">
            <span class="course-card__rating">⭐ ${course.rating}</span>
            <span class="course-card__meta-item">📚 ${course.lessons.length} lessons</span>
            <span class="course-card__meta-item">⏱️ ${course.duration}</span>
          </div>
          <div class="course-card__instructor">by ${course.instructor.name}</div>
          <div class="course-card__tags">
            ${course.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // ── Scroll Row Renderer ────────────────────────
  renderScrollRow(title, subtitle, items, seeAllHref = null) {
    if (!items.length) return '';
    const id = 'row_' + title.replace(/\s+/g, '_').toLowerCase();
    return `
      <section class="scroll-row section--sm">
        <div class="scroll-row__header">
          <div>
            <h2 class="scroll-row__title">${title}</h2>
            ${subtitle ? `<p class="scroll-row__subtitle">${subtitle}</p>` : ''}
          </div>
          <div class="flex items-center gap-4">
            ${seeAllHref ? `<a href="${seeAllHref}" class="scroll-row__see-all">See all →</a>` : ''}
            <div class="scroll-row__arrows">
              <button class="scroll-row__arrow" onclick="UI.scrollRow('${id}', -1)">←</button>
              <button class="scroll-row__arrow" onclick="UI.scrollRow('${id}', 1)">→</button>
            </div>
          </div>
        </div>
        <div class="scroll-row__track" id="${id}">
          ${items}
        </div>
      </section>
    `;
  },

  scrollRow(id, direction) {
    const track = document.getElementById(id);
    if (track) {
      track.scrollBy({ left: direction * 320, behavior: 'smooth' });
    }
  },

  // ── Footer ─────────────────────────────────────
  renderFooter() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer__grid">
            <div class="footer__brand">
              <div class="footer__brand-name">🚀 LearnVerse</div>
              <p class="footer__brand-desc">The next-generation e-learning platform that adapts to you. Personalized recommendations, gamified learning, and a thriving community.</p>
            </div>
            <div>
              <h4 class="footer__col-title">Platform</h4>
              <a href="courses.html" class="footer__link">Browse Courses</a>
              <a href="dashboard.html" class="footer__link">Dashboard</a>
              <a href="profile.html" class="footer__link">Profile</a>
              <a href="#" class="footer__link">Leaderboard</a>
            </div>
            <div>
              <h4 class="footer__col-title">Categories</h4>
              ${CATEGORIES.slice(0, 4).map(c => `
                <a href="courses.html?category=${c.id}" class="footer__link">${c.icon} ${c.name}</a>
              `).join('')}
            </div>
            <div>
              <h4 class="footer__col-title">Support</h4>
              <a href="#" class="footer__link">Help Center</a>
              <a href="#" class="footer__link">Contact Us</a>
              <a href="#" class="footer__link">Privacy Policy</a>
              <a href="#" class="footer__link">Terms of Service</a>
            </div>
          </div>
          <div class="footer__bottom">
            <span>© 2026 LearnVerse. All rights reserved.</span>
            <div class="footer__social">
              <a href="#" title="Twitter">𝕏</a>
              <a href="#" title="GitHub">⌨</a>
              <a href="#" title="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  },

  // ── Chatbot ────────────────────────────────────
  initChatbot() {
    if (document.getElementById('chatbot')) return;
    const page = this.getCurrentPage();
    if (page === 'login') return;

    const chatHTML = `
      <div id="chatbot">
        <button class="chatbot-fab" onclick="UI.toggleChatbot()" title="AI Learning Assistant">🤖</button>
        <div class="chatbot-panel" id="chatbotPanel">
          <div class="chatbot-panel__header">
            <span class="chatbot-panel__header-icon">🤖</span>
            <div class="chatbot-panel__header-info">
              <h4>LearnBot</h4>
              <p>Your AI Learning Assistant</p>
            </div>
          </div>
          <div class="chatbot-panel__messages" id="chatMessages">
            <div class="chat-message chat-message--bot">
              Hi! I'm LearnBot 👋 I can help you find courses, explain concepts, or answer questions about your learning journey. Try asking me something!
            </div>
          </div>
          <div class="chatbot-panel__input">
            <input type="text" id="chatInput" placeholder="Ask me anything..." onkeypress="if(event.key==='Enter')UI.sendChat()">
            <button onclick="UI.sendChat()">Send</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHTML);
  },

  toggleChatbot() {
    const panel = document.getElementById('chatbotPanel');
    if (panel) panel.classList.toggle('open');
  },

  sendChat() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    if (!input || !messages) return;

    const text = input.value.trim();
    if (!text) return;

    // User message
    messages.innerHTML += `<div class="chat-message chat-message--user">${this.escapeHTML(text)}</div>`;
    input.value = '';

    // Bot response
    setTimeout(() => {
      const response = this.getChatResponse(text);
      messages.innerHTML += `<div class="chat-message chat-message--bot">${response}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 600);
  },

  getChatResponse(input) {
    const lower = input.toLowerCase();

    // Course recommendations
    if (lower.includes('recommend') || lower.includes('suggest') || lower.includes('what should i learn')) {
      const user = Store.getUser();
      if (user && user.interests.length) {
        const recs = RecommendationEngine.getRecommendedForYou(3);
        if (recs.length) {
          return `Based on your interests, I'd recommend:<br>
            ${recs.map(r => `• <strong>${r.course.title}</strong> — ${r.reason}`).join('<br>')}
            <br><br>Check your <a href="dashboard.html" style="color:var(--accent-cyan)">Dashboard</a> for more!`;
        }
      }
      return 'Try exploring our <a href="courses.html" style="color:var(--accent-cyan)">course catalog</a>! We have 30+ courses across 6 categories. 🎯';
    }

    // Category queries
    for (const cat of CATEGORIES) {
      if (lower.includes(cat.name.toLowerCase()) || lower.includes(cat.id.replace('-', ' '))) {
        const courses = COURSES.filter(c => c.category === cat.id).slice(0, 3);
        return `${cat.icon} Great choice! Here are top ${cat.name} courses:<br>
          ${courses.map(c => `• <strong>${c.title}</strong> (${c.difficulty}, ⭐${c.rating})`).join('<br>')}`;
      }
    }

    // Progress queries
    if (lower.includes('progress') || lower.includes('how am i doing') || lower.includes('stats')) {
      const stats = Store.getStats();
      if (stats) {
        return `Here's your progress 📊:<br>
          • Level: ${stats.level} (${stats.xp} XP)<br>
          • Streak: 🔥 ${stats.streak} days<br>
          • Courses enrolled: ${stats.enrolledCount}<br>
          • Courses completed: ${stats.completedCount}<br>
          • Lessons done: ${stats.totalLessons}<br>
          Keep it up! 💪`;
      }
      return 'Log in to track your progress! <a href="login.html" style="color:var(--accent-cyan)">Sign in here</a>';
    }

    // Difficulty/beginner queries
    if (lower.includes('beginner') || lower.includes('start') || lower.includes('new')) {
      const beginner = COURSES.filter(c => c.difficulty === 'Beginner').slice(0, 3);
      return `Welcome! Here are beginner-friendly courses:<br>
        ${beginner.map(c => `• <strong>${c.title}</strong> (⭐${c.rating})`).join('<br>')}
        <br><br>Start with what excites you most! 🚀`;
    }

    // Help
    if (lower.includes('help') || lower.includes('what can you do')) {
      return `I can help you with:<br>
        🎯 <strong>Course recommendations</strong> — "What should I learn?"<br>
        📊 <strong>Your progress</strong> — "How am I doing?"<br>
        📚 <strong>Find courses</strong> — "Show me AI courses"<br>
        🆕 <strong>Getting started</strong> — "I'm a beginner"<br>
        💡 <strong>Learning tips</strong> — "How to learn faster?"`;
    }

    // Learning tips
    if (lower.includes('tip') || lower.includes('how to learn') || lower.includes('faster')) {
      return `Here are my top learning tips 💡:<br>
        1. 🔥 <strong>Keep your streak alive</strong> — consistency beats intensity<br>
        2. 📝 <strong>Take quizzes</strong> — active recall strengthens memory<br>
        3. 🎯 <strong>Set daily goals</strong> — try the Daily Challenge!<br>
        4. 💬 <strong>Teach others</strong> — comment and discuss<br>
        5. 🧠 <strong>Space your sessions</strong> — 30 min/day > 3 hrs/week`;
    }

    // Greeting
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      const user = Store.getUser();
      return user
        ? `Hey ${user.name}! 👋 How can I help with your learning today?`
        : 'Hello! 👋 I\'m LearnBot, your AI learning assistant. How can I help you today?';
    }

    // Default
    const defaults = [
      'Interesting question! Try checking our <a href="courses.html" style="color:var(--accent-cyan)">course catalog</a> for related content. 📚',
      'I\'m still learning! Try asking me about course recommendations, your progress, or specific topics like "Web Development". 🤖',
      'Great question! For detailed answers, I\'d recommend exploring the course materials. Want me to suggest some courses? 🎯'
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
  },

  escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  // ── Skeleton Loader ────────────────────────────
  renderSkeletonCards(count = 4) {
    return Array(count).fill(`
      <div class="course-card" style="pointer-events:none">
        <div class="skeleton skeleton-image"></div>
        <div class="course-card__body">
          <div class="skeleton skeleton-text" style="width:40%"></div>
          <div class="skeleton skeleton-title"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width:60%"></div>
        </div>
      </div>
    `).join('');
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => UI.init());
