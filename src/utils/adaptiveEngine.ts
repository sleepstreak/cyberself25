import { Question, DifficultyLevel, Domain, UserResponse } from '@/types/assessment';
import { getQuestionsByDifficulty } from '@/data/questions';

export class AdaptiveEngine {
  private currentDifficulty: DifficultyLevel = 'beginner';
  private consecutiveCorrect = 0;
  private consecutiveIncorrect = 0;
  private usedQuestionIds: Set<string> = new Set();
  private domainPerformance: Map<string, { correct: number; total: number; avgTime: number }> = new Map();
  private recentResponses: { isCorrect: boolean; responseTime: number; confidence: number }[] = [];

  getNextQuestion(domain: Domain, questions: Question[]): Question | null {
    // Filter questions by current difficulty and exclude used questions
    let availableQuestions = questions.filter(
      (q) =>
        q.domain === domain &&
        q.difficulty === this.currentDifficulty &&
        !this.usedQuestionIds.has(q.id)
    );

    // If no questions at current difficulty, try adjacent difficulties
    if (availableQuestions.length === 0) {
      availableQuestions = questions.filter(
        (q) => q.domain === domain && !this.usedQuestionIds.has(q.id)
      );
    }

    if (availableQuestions.length === 0) {
      return null; // No more questions available
    }

    // Select random question from available pool
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    this.usedQuestionIds.add(selectedQuestion.id);

    return selectedQuestion;
  }

  updateDifficulty(isCorrect: boolean, responseTime: number, domain?: string): void {
    const confidence = this.calculateConfidenceMultiplier(responseTime);
    
    // Track recent performance for pattern analysis
    this.recentResponses.push({ isCorrect, responseTime, confidence });
    if (this.recentResponses.length > 5) {
      this.recentResponses.shift();
    }

    // Update domain-specific performance
    if (domain) {
      const perf = this.domainPerformance.get(domain) || { correct: 0, total: 0, avgTime: 0 };
      perf.total++;
      if (isCorrect) perf.correct++;
      perf.avgTime = (perf.avgTime * (perf.total - 1) + responseTime) / perf.total;
      this.domainPerformance.set(domain, perf);
    }

    // Calculate weighted performance score
    const recentAccuracy = this.recentResponses.filter(r => r.isCorrect).length / this.recentResponses.length;
    const avgConfidence = this.recentResponses.reduce((sum, r) => sum + r.confidence, 0) / this.recentResponses.length;
    const performanceScore = recentAccuracy * avgConfidence;

    if (isCorrect) {
      this.consecutiveCorrect++;
      this.consecutiveIncorrect = 0;

      // Increase difficulty based on performance score and confidence
      if (this.consecutiveCorrect >= 2 && performanceScore > 0.8 && confidence >= 1.0 && this.currentDifficulty !== 'advanced') {
        if (this.currentDifficulty === 'beginner') {
          this.currentDifficulty = 'intermediate';
        } else if (this.currentDifficulty === 'intermediate') {
          this.currentDifficulty = 'advanced';
        }
        this.consecutiveCorrect = 0;
      }
    } else {
      this.consecutiveIncorrect++;
      this.consecutiveCorrect = 0;

      // Decrease difficulty based on performance patterns
      if (this.consecutiveIncorrect >= 2 && performanceScore < 0.4 && this.currentDifficulty !== 'beginner') {
        if (this.currentDifficulty === 'advanced') {
          this.currentDifficulty = 'intermediate';
        } else if (this.currentDifficulty === 'intermediate') {
          this.currentDifficulty = 'beginner';
        }
        this.consecutiveIncorrect = 0;
      }
    }
  }

  shouldShowHint(): boolean {
    // Show hint after 2 consecutive incorrect or if user is taking too long
    return this.consecutiveIncorrect >= 2 || 
           (this.recentResponses.length > 0 && 
            this.recentResponses[this.recentResponses.length - 1].responseTime > 45);
  }

  getPerformanceSnapshot(domain?: string): {
    accuracy: number;
    avgResponseTime: number;
    currentLevel: DifficultyLevel;
  } {
    if (domain && this.domainPerformance.has(domain)) {
      const perf = this.domainPerformance.get(domain)!;
      return {
        accuracy: Math.round((perf.correct / perf.total) * 100),
        avgResponseTime: Math.round(perf.avgTime),
        currentLevel: this.currentDifficulty,
      };
    }
    
    // Return default snapshot if no domain data yet
    return {
      accuracy: 0,
      avgResponseTime: 0,
      currentLevel: this.currentDifficulty,
    };
  }

  calculateConfidenceMultiplier(responseTime: number): number {
    // Optimal response time is between 5-15 seconds
    // Faster = higher confidence (up to 1.2x)
    // Slower = lower confidence (down to 0.8x)
    if (responseTime < 5) {
      return 1.2;
    } else if (responseTime <= 15) {
      return 1.0;
    } else if (responseTime <= 30) {
      return 0.9;
    } else {
      return 0.8;
    }
  }

  getCurrentDifficulty(): DifficultyLevel {
    return this.currentDifficulty;
  }

  reset(): void {
    this.currentDifficulty = 'beginner';
    this.consecutiveCorrect = 0;
    this.consecutiveIncorrect = 0;
    // Don't clear usedQuestionIds when moving between domains
    // Only clear domain performance for new domain
    this.recentResponses = [];
  }
  
  // New method to fully reset everything (for new assessment)
  fullReset(): void {
    this.currentDifficulty = 'beginner';
    this.consecutiveCorrect = 0;
    this.consecutiveIncorrect = 0;
    this.usedQuestionIds.clear();
    this.domainPerformance.clear();
    this.recentResponses = [];
  }
}

export const calculateDomainScore = (
  responses: UserResponse[],
  totalQuestions: number
): {
  accuracy: number;
  avgResponseTime: number;
  score: number;
} => {
  const correctAnswers = responses.filter((r) => r.isCorrect).length;
  const accuracy = (correctAnswers / totalQuestions) * 100;

  const totalTime = responses.reduce((sum, r) => sum + r.responseTime, 0);
  const avgResponseTime = totalTime / responses.length;

  // Calculate weighted score
  const timeMultiplier = avgResponseTime < 15 ? 1.1 : avgResponseTime > 30 ? 0.9 : 1.0;
  const score = Math.min(100, accuracy * timeMultiplier);

  return {
    accuracy: Math.round(accuracy),
    avgResponseTime: Math.round(avgResponseTime),
    score: Math.round(score),
  };
};
