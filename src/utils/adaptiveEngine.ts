import { Question, DifficultyLevel, Domain, UserResponse } from '@/types/assessment';
import { getQuestionsByDifficulty } from '@/data/questions';

export class AdaptiveEngine {
  private currentDifficulty: DifficultyLevel = 'beginner';
  private consecutiveCorrect = 0;
  private consecutiveIncorrect = 0;
  private usedQuestionIds: Set<string> = new Set();

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

  updateDifficulty(isCorrect: boolean, responseTime: number): void {
    if (isCorrect) {
      this.consecutiveCorrect++;
      this.consecutiveIncorrect = 0;

      // Increase difficulty after 3 consecutive correct answers
      if (this.consecutiveCorrect >= 3 && this.currentDifficulty !== 'advanced') {
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

      // Decrease difficulty after 2 consecutive incorrect answers
      if (this.consecutiveIncorrect >= 2 && this.currentDifficulty !== 'beginner') {
        if (this.currentDifficulty === 'advanced') {
          this.currentDifficulty = 'intermediate';
        } else if (this.currentDifficulty === 'intermediate') {
          this.currentDifficulty = 'beginner';
        }
        this.consecutiveIncorrect = 0;
      }
    }
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
    this.usedQuestionIds.clear();
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
