/* ============================================================
   LEARNVERSE — Content-Based Recommendation Engine
   Uses cosine similarity + weighted scoring
   ============================================================ */

const RecommendationEngine = {
  /**
   * Cosine Similarity between two tag arrays
   * Converts tags to binary vectors, computes dot product / magnitudes
   */
  cosineSimilarity(tagsA, tagsB) {
    if (!tagsA.length || !tagsB.length) return 0;

    const allTags = [...new Set([...tagsA, ...tagsB])];
    const vectorA = allTags.map(t => tagsA.includes(t) ? 1 : 0);
    const vectorB = allTags.map(t => tagsB.includes(t) ? 1 : 0);

    const dotProduct = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0);
    const magnitudeA = Math.sqrt(vectorA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vectorB.reduce((sum, b) => sum + b * b, 0));

    return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
  },

  /**
   * Get user's tag profile from enrolled/completed courses
   */
  getUserTagProfile() {
    const progress = Store.getAllProgress();
    const enrolledIds = progress.map(p => p.courseId);
    const tags = [];

    enrolledIds.forEach(id => {
      const course = COURSES.find(c => c.id === id);
      if (course) tags.push(...course.tags);
    });

    // Return unique tags weighted by frequency
    return [...new Set(tags)];
  },

  /**
   * Determine appropriate difficulty based on user progress
   */
  getRecommendedDifficulty() {
    const completed = Store.getCompletedCourses();
    const count = completed.length;

    if (count >= 8) return 'Advanced';
    if (count >= 3) return 'Intermediate';
    return 'Beginner';
  },

  /**
   * Main Recommendation Algorithm
   * Returns scored + sorted course list with reason labels
   *
   * Scoring:
   *  - Interest Match:   30 pts (category matches user interests)
   *  - Tag Similarity:   30 pts (cosine sim with user's tag profile)
   *  - Difficulty Fit:   15 pts (matches recommended difficulty)
   *  - Rating Boost:     10 pts (normalized by rating)
   *  - Trending:         15 pts (enrollment popularity)
   */
  getRecommendations() {
    const user = Store.getUser();
    if (!user) return this.getTrending();

    const progress = Store.getAllProgress();
    const enrolledIds = progress.map(p => p.courseId);
    const completedIds = progress.filter(p => p.completedAt).map(p => p.courseId);
    const userInterests = user.interests || [];
    const userTags = this.getUserTagProfile();
    const recDifficulty = this.getRecommendedDifficulty();

    // Map category names to IDs
    const interestCategoryIds = userInterests.map(interest => {
      const cat = CATEGORIES.find(c => c.name === interest || c.id === interest);
      return cat ? cat.id : interest;
    });

    const maxEnrolled = Math.max(...COURSES.map(c => c.enrolledCount), 1);

    const scored = COURSES
      .filter(c => !completedIds.includes(c.id)) // Exclude completed
      .map(course => {
        let score = 0;
        let reasons = [];

        // 1. Interest Match (30 pts)
        if (interestCategoryIds.includes(course.category)) {
          score += 30;
          const catName = CATEGORIES.find(c => c.id === course.category)?.name || course.category;
          reasons.push(`Matches your interest in ${catName}`);
        }

        // 2. Tag Similarity (30 pts)
        if (userTags.length > 0) {
          const similarity = this.cosineSimilarity(userTags, course.tags);
          const tagScore = similarity * 30;
          score += tagScore;
          if (tagScore > 10) {
            reasons.push('Similar to courses you\'re learning');
          }
        }

        // 3. Difficulty Fit (15 pts)
        if (course.difficulty === recDifficulty) {
          score += 15;
          reasons.push('Right difficulty level for you');
        } else if (
          (recDifficulty === 'Beginner' && course.difficulty === 'Intermediate') ||
          (recDifficulty === 'Intermediate' && course.difficulty === 'Advanced')
        ) {
          score += 8; // Slightly above current level is OK
          reasons.push('Challenge yourself');
        }

        // 4. Rating Boost (10 pts)
        score += (course.rating / 5) * 10;

        // 5. Trending (15 pts)
        score += (course.enrolledCount / maxEnrolled) * 15;

        // Boost enrolled-but-not-completed courses
        if (enrolledIds.includes(course.id) && !completedIds.includes(course.id)) {
          score += 20;
          reasons.unshift('Continue where you left off');
        }

        if (reasons.length === 0) {
          reasons.push('Trending in the community');
        }

        return {
          course,
          score: Math.round(score * 10) / 10,
          reason: reasons[0],
          reasons
        };
      })
      .sort((a, b) => b.score - a.score);

    return scored;
  },

  /**
   * Get "Recommended for You" — top matches
   */
  getRecommendedForYou(limit = 8) {
    return this.getRecommendations().slice(0, limit);
  },

  /**
   * Get "Based on Your Learning" — similar to enrolled courses
   */
  getBasedOnLearning(limit = 8) {
    const userTags = this.getUserTagProfile();
    if (userTags.length === 0) return [];

    return this.getRecommendations()
      .filter(r => r.reasons.some(reason =>
        reason.includes('Similar') || reason.includes('Continue')
      ))
      .slice(0, limit);
  },

  /**
   * Get "Continue Learning" — enrolled but not completed
   */
  getContinueLearning() {
    const progress = Store.getAllProgress();
    return progress
      .filter(p => p.enrolled && !p.completedAt)
      .map(p => {
        const course = COURSES.find(c => c.id === p.courseId);
        if (!course) return null;
        const pct = course.lessons.length > 0
          ? Math.round((p.completedLessons.length / course.lessons.length) * 100)
          : 0;
        return { course, progress: pct, lastAccessed: p.lastAccessedAt };
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed));
  },

  /**
   * Get "Trending Now" — most popular courses
   */
  getTrending(limit = 8) {
    return [...COURSES]
      .sort((a, b) => b.enrolledCount - a.enrolledCount)
      .slice(0, limit)
      .map(course => ({
        course,
        score: 0,
        reason: 'Popular with learners',
        reasons: ['Popular with learners']
      }));
  },

  /**
   * Get "Challenge Yourself" — next difficulty level
   */
  getChallengeYourself(limit = 4) {
    const recDifficulty = this.getRecommendedDifficulty();
    const nextDifficulty = recDifficulty === 'Beginner' ? 'Intermediate'
      : recDifficulty === 'Intermediate' ? 'Advanced' : 'Advanced';

    return this.getRecommendations()
      .filter(r => r.course.difficulty === nextDifficulty)
      .slice(0, limit);
  },

  /**
   * Get similar courses to a specific course
   */
  getSimilarCourses(courseId, limit = 4) {
    const course = COURSES.find(c => c.id === courseId);
    if (!course) return [];

    const completedIds = Store.getCompletedCourses().map(p => p.courseId);

    return COURSES
      .filter(c => c.id !== courseId && !completedIds.includes(c.id))
      .map(c => ({
        course: c,
        similarity: this.cosineSimilarity(course.tags, c.tags),
        categoryMatch: c.category === course.category
      }))
      .sort((a, b) => {
        // Prioritize same category + high similarity
        const aScore = a.similarity + (a.categoryMatch ? 0.3 : 0);
        const bScore = b.similarity + (b.categoryMatch ? 0.3 : 0);
        return bScore - aScore;
      })
      .slice(0, limit)
      .map(r => ({
        course: r.course,
        score: Math.round(r.similarity * 100),
        reason: r.categoryMatch ? 'Same category' : 'Similar topics'
      }));
  }
};
