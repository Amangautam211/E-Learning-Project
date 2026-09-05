/* ============================================================
   LEARNVERSE — Store (localStorage wrapper)
   Manages all user state: auth, progress, gamification
   ============================================================ */

const Store = {
  // ── Keys ───────────────────────────────────────
  KEYS: {
    USER: 'lv_user',
    PROGRESS: 'lv_progress',
    COMMENTS: 'lv_comments',
    THEME: 'lv_theme',
    DAILY_CHALLENGE: 'lv_daily_challenge'
  },

  // ── Helpers ────────────────────────────────────
  _get(key) {
    try { return JSON.parse(localStorage.getItem(key)); }
    catch { return null; }
  },

  _set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // ── Auth ───────────────────────────────────────
  getUser() {
    return this._get(this.KEYS.USER);
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  register(name, email, password, interests) {
    const user = {
      id: 'u_' + Date.now(),
      name,
      email,
      password, // In a real app, this would be hashed
      interests: interests || [],
      xp: 0,
      level: 1,
      streak: 0,
      lastActiveDate: null,
      badges: [],
      dailyChallengesCompleted: 0,
      commentsCount: 0,
      darkMode: true,
      createdAt: new Date().toISOString()
    };
    this._set(this.KEYS.USER, user);
    this._set(this.KEYS.PROGRESS, []);
    return user;
  },

  login(email, password) {
    const user = this.getUser();
    if (user && user.email === email && user.password === password) {
      this.updateStreak();
      return user;
    }
    return null;
  },

  updateUser(updates) {
    const user = this.getUser();
    if (!user) return null;
    const updated = { ...user, ...updates };
    this._set(this.KEYS.USER, updated);
    return updated;
  },

  logout() {
    // Keep progress and theme, just clear auth state
    const theme = this.getTheme();
    localStorage.removeItem(this.KEYS.USER);
    localStorage.removeItem(this.KEYS.PROGRESS);
    if (theme) this.setTheme(theme);
  },

  // ── Progress ───────────────────────────────────
  getAllProgress() {
    return this._get(this.KEYS.PROGRESS) || [];
  },

  getProgress(courseId) {
    const all = this.getAllProgress();
    return all.find(p => p.courseId === courseId) || null;
  },

  enroll(courseId) {
    const all = this.getAllProgress();
    if (all.find(p => p.courseId === courseId)) return all;

    all.push({
      courseId,
      enrolled: true,
      enrolledAt: new Date().toISOString(),
      completedLessons: [],
      quizScores: [],
      checkpointAnswers: [],
      xpEarned: 0,
      completedAt: null,
      lastAccessedAt: new Date().toISOString()
    });

    this._set(this.KEYS.PROGRESS, all);

    // Award XP for enrolling
    this.addXP(5);

    // Check badge: First Steps
    this.checkBadge('b1');

    return all;
  },

  completeLesson(courseId, lessonIndex) {
    const all = this.getAllProgress();
    const progress = all.find(p => p.courseId === courseId);
    if (!progress) return;

    if (!progress.completedLessons.includes(lessonIndex)) {
      progress.completedLessons.push(lessonIndex);
      progress.lastAccessedAt = new Date().toISOString();
      this._set(this.KEYS.PROGRESS, all);

      // Award XP
      this.addXP(10);

      // Check badges
      const totalLessons = this.getTotalCompletedLessons();
      if (totalLessons >= 1) this.checkBadge('b2');
      if (totalLessons >= 10) this.checkBadge('b7');

      // Check if course is complete
      const course = COURSES.find(c => c.id === courseId);
      if (course && progress.completedLessons.length >= course.lessons.length) {
        this.completeCourse(courseId);
      }
    }
  },

  submitQuiz(courseId, score, totalQuestions) {
    const all = this.getAllProgress();
    const progress = all.find(p => p.courseId === courseId);
    if (!progress) return;

    const attempt = {
      attempt: progress.quizScores.length + 1,
      score,
      total: totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      completedAt: new Date().toISOString()
    };

    progress.quizScores.push(attempt);
    this._set(this.KEYS.PROGRESS, all);

    // XP based on score
    const xp = Math.round(25 * (score / totalQuestions));
    this.addXP(xp);

    // Perfect quiz badge
    if (score === totalQuestions) {
      this.checkBadge('b3');
    }

    return attempt;
  },

  completeCourse(courseId) {
    const all = this.getAllProgress();
    const progress = all.find(p => p.courseId === courseId);
    if (!progress || progress.completedAt) return;

    progress.completedAt = new Date().toISOString();
    this._set(this.KEYS.PROGRESS, all);

    // Bonus XP for course completion
    this.addXP(50);

    // Scholar badge
    const completedCount = all.filter(p => p.completedAt).length;
    if (completedCount >= 3) this.checkBadge('b4');

    // Categories badge
    const completedCourseIds = all.filter(p => p.completedAt).map(p => p.courseId);
    const categories = new Set(completedCourseIds.map(id => {
      const c = COURSES.find(cc => cc.id === id);
      return c ? c.category : null;
    }).filter(Boolean));
    if (categories.size >= 3) this.checkBadge('b12');
    if (categories.size >= 5) this.checkBadge('b6');
  },

  getTotalCompletedLessons() {
    const all = this.getAllProgress();
    return all.reduce((sum, p) => sum + p.completedLessons.length, 0);
  },

  getCompletedCourses() {
    return this.getAllProgress().filter(p => p.completedAt);
  },

  getEnrolledCourses() {
    return this.getAllProgress().filter(p => p.enrolled);
  },

  // ── Gamification ───────────────────────────────
  addXP(amount) {
    const user = this.getUser();
    if (!user) return;

    user.xp = (user.xp || 0) + amount;
    user.level = Math.floor(user.xp / 100) + 1;
    this._set(this.KEYS.USER, user);

    // XP badges
    if (user.xp >= 1000) this.checkBadge('b10');
    // Level badge
    if (user.level >= 10) this.checkBadge('b8');

    return { xp: user.xp, level: user.level, gained: amount };
  },

  updateStreak() {
    const user = this.getUser();
    if (!user) return;

    const today = new Date().toDateString();
    const lastActive = user.lastActiveDate ? new Date(user.lastActiveDate).toDateString() : null;

    if (lastActive === today) return; // Already counted today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastActive === yesterday.toDateString()) {
      user.streak = (user.streak || 0) + 1;
    } else if (lastActive !== today) {
      user.streak = 1; // Reset streak
    }

    user.lastActiveDate = new Date().toISOString();
    this._set(this.KEYS.USER, user);

    // Streak badge
    if (user.streak >= 7) this.checkBadge('b5');
  },

  checkBadge(badgeId) {
    const user = this.getUser();
    if (!user) return;
    if (user.badges && user.badges.includes(badgeId)) return; // Already earned

    if (!user.badges) user.badges = [];
    user.badges.push(badgeId);
    this._set(this.KEYS.USER, user);

    // Return badge info for notification
    const badge = ALL_BADGES.find(b => b.id === badgeId);
    if (badge) {
      // Dispatch custom event for UI to show notification
      window.dispatchEvent(new CustomEvent('badgeEarned', { detail: badge }));
    }
  },

  getDailyChallenge() {
    const saved = this._get(this.KEYS.DAILY_CHALLENGE);
    const today = new Date().toDateString();

    if (saved && saved.date === today) {
      return saved;
    }

    // Pick a random challenge for today
    const idx = new Date().getDate() % DAILY_CHALLENGES.length;
    const challenge = {
      ...DAILY_CHALLENGES[idx],
      date: today,
      completed: false,
      answeredCorrectly: false
    };

    this._set(this.KEYS.DAILY_CHALLENGE, challenge);
    return challenge;
  },

  completeDailyChallenge(correct) {
    const challenge = this.getDailyChallenge();
    challenge.completed = true;
    challenge.answeredCorrectly = correct;
    this._set(this.KEYS.DAILY_CHALLENGE, challenge);

    if (correct) {
      this.addXP(challenge.xpReward);
      const user = this.getUser();
      if (user) {
        user.dailyChallengesCompleted = (user.dailyChallengesCompleted || 0) + 1;
        this._set(this.KEYS.USER, user);
        if (user.dailyChallengesCompleted >= 5) this.checkBadge('b11');
      }
    }
  },

  // ── Comments ───────────────────────────────────
  getComments(courseId) {
    const custom = this._get(this.KEYS.COMMENTS) || [];
    const sample = SAMPLE_COMMENTS.filter(c => c.courseId === courseId);
    const userComments = custom.filter(c => c.courseId === courseId);
    return [...sample, ...userComments].sort((a, b) => b.likes - a.likes);
  },

  addComment(courseId, content) {
    const user = this.getUser();
    if (!user) return;

    const comments = this._get(this.KEYS.COMMENTS) || [];
    const comment = {
      id: 'cm_' + Date.now(),
      courseId,
      userName: user.name,
      avatar: user.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      content,
      likes: 0,
      time: 'Just now'
    };
    comments.push(comment);
    this._set(this.KEYS.COMMENTS, comments);

    // Update comment count
    user.commentsCount = (user.commentsCount || 0) + 1;
    this._set(this.KEYS.USER, user);
    if (user.commentsCount >= 5) this.checkBadge('b9');

    return comment;
  },

  // ── Theme ──────────────────────────────────────
  getTheme() {
    return localStorage.getItem(this.KEYS.THEME) || 'dark';
  },

  setTheme(theme) {
    localStorage.setItem(this.KEYS.THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  // ── Stats ──────────────────────────────────────
  getStats() {
    const user = this.getUser();
    const progress = this.getAllProgress();

    if (!user) return null;

    const enrolled = progress.filter(p => p.enrolled);
    const completed = progress.filter(p => p.completedAt);
    const totalLessons = this.getTotalCompletedLessons();
    const totalTimeMinutes = totalLessons * 20; // Estimate 20 min per lesson

    // Calculate skill analytics based on completed course tags
    const skillMap = {};
    enrolled.forEach(p => {
      const course = COURSES.find(c => c.id === p.courseId);
      if (course) {
        const progress_pct = course.lessons.length > 0
          ? (p.completedLessons.length / course.lessons.length) * 100
          : 0;
        course.tags.forEach(tag => {
          if (!skillMap[tag]) skillMap[tag] = { total: 0, count: 0 };
          skillMap[tag].total += progress_pct;
          skillMap[tag].count += 1;
        });
      }
    });

    const skills = Object.entries(skillMap)
      .map(([name, data]) => ({
        name,
        value: Math.round(data.total / data.count)
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);

    return {
      xp: user.xp || 0,
      level: user.level || 1,
      streak: user.streak || 0,
      enrolledCount: enrolled.length,
      completedCount: completed.length,
      totalLessons,
      totalTimeMinutes,
      badges: user.badges || [],
      skills
    };
  }
};
