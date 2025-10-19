export type Domain = 'cyber-hygiene' | 'network-security' | 'secure-software';

export type QuestionType = 'multiple-choice' | 'scenario' | 'drag-drop';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  id: string;
  domain: Domain;
  difficulty: DifficultyLevel;
  type: QuestionType;
  prompt: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface UserResponse {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  responseTime: number; // in seconds
  timestamp: Date;
}

export interface DomainScore {
  domain: Domain;
  accuracy: number;
  avgResponseTime: number;
  level: DifficultyLevel;
  questionsAnswered: number;
  correctAnswers: number;
}

export interface UserSession {
  nickname: string;
  language: string;
  selectedDomains: Domain[];
  startTime: Date;
  endTime?: Date;
  responses: UserResponse[];
  scores: DomainScore[];
  totalXP: number;
  badges: string[];
}

export interface DomainInfo {
  id: Domain;
  name: string;
  description: string;
  icon: string;
  difficulty: string;
  color: string;
  nameKey: string;
  descriptionKey: string;
  difficultyKey: string;
}

export interface Recommendation {
  domain: Domain;
  priority: 'high' | 'medium' | 'low';
  suggestedResources: {
    title: string;
    url: string;
    type: 'course' | 'article' | 'video' | 'bootcamp';
  }[];
  nextSteps: string[];
}
