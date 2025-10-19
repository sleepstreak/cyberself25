import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Clock, CheckCircle, XCircle, ChevronRight, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { questionBank } from '@/data/questions';
import { Domain, Question, UserResponse } from '@/types/assessment';
import { AdaptiveEngine } from '@/utils/adaptiveEngine';
import { ProgressSnapshot } from '@/components/ProgressSnapshot';
import { HintCard } from '@/components/HintCard';
import { XPAnimation } from '@/components/XPAnimation';

const QUESTIONS_PER_DOMAIN = 10;

const Assessment = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>([]);
  const [engine] = useState(new AdaptiveEngine());
  const [totalXP, setTotalXP] = useState(0);
  const [showProgressSnapshot, setShowProgressSnapshot] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [xpToShow, setXpToShow] = useState<number | null>(null);

  useEffect(() => {
    // Load session data
    const sessionData = localStorage.getItem('cyberself_session');
    if (!sessionData) {
      navigate('/register');
      return;
    }

    const session = JSON.parse(sessionData);
    if (!session.selectedDomains || session.selectedDomains.length === 0) {
      navigate('/domains');
      return;
    }

    setSelectedDomains(session.selectedDomains);
    loadNextQuestion(session.selectedDomains[0]);
  }, []);

  const loadNextQuestion = (domain: Domain) => {
    const nextQuestion = engine.getNextQuestion(domain, questionBank);
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setStartTime(new Date());
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShowHint(false);
    } else {
      // No more questions available for this domain
      moveToNextDomain();
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showFeedback) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !currentQuestion) return;

    const responseTime = (new Date().getTime() - startTime.getTime()) / 1000;
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const response: UserResponse = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      responseTime,
      timestamp: new Date(),
    };

    setResponses((prev) => [...prev, response]);
    // Update difficulty with domain context for better tracking
    engine.updateDifficulty(isCorrect, responseTime, currentQuestion.domain);

    // Award XP
    const xpEarned = isCorrect ? (currentQuestion.difficulty === 'advanced' ? 15 : currentQuestion.difficulty === 'intermediate' ? 10 : 5) : 0;
    setTotalXP((prev) => prev + xpEarned);

    setShowFeedback(true);
    setShowHint(false);

    if (isCorrect) {
      setXpToShow(xpEarned);
      toast.success(`${t('correct')} +${xpEarned} XP`);
    }

    // Show progress snapshot every 5 questions
    if ((currentQuestionIndex + 1) % 5 === 0 && currentQuestionIndex + 1 < QUESTIONS_PER_DOMAIN) {
      setTimeout(() => setShowProgressSnapshot(true), 1500);
    }

    // Check if hint should be shown
    if (!isCorrect && engine.shouldShowHint()) {
      setTimeout(() => setShowHint(true), 500);
    }
  };

  const handleNextQuestion = () => {
    setShowProgressSnapshot(false);
    setXpToShow(null);
    
    if (currentQuestionIndex + 1 >= QUESTIONS_PER_DOMAIN) {
      // Completed all questions for this domain
      moveToNextDomain();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      loadNextQuestion(selectedDomains[currentDomainIndex]);
    }
  };

  const moveToNextDomain = () => {
    if (currentDomainIndex + 1 >= selectedDomains.length) {
      // Assessment complete - all domains finished
      finishAssessment();
    } else {
      // Move to next domain
      const nextDomain = selectedDomains[currentDomainIndex + 1];
      
      setCurrentDomainIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
      engine.reset();
      
      // Show transition message
      toast.info(`${t('domain')}: ${nextDomain.replace('-', ' ')}`);
      
      // Load first question of next domain
      loadNextQuestion(nextDomain);
    }
  };

  const finishAssessment = () => {
    // Save results to localStorage
    const sessionData = localStorage.getItem('cyberself_session');
    if (sessionData) {
      const session = JSON.parse(sessionData);
      session.responses = responses;
      session.totalXP = totalXP;
      session.endTime = new Date().toISOString();
      localStorage.setItem('cyberself_session', JSON.stringify(session));
    }

    toast.success(t('notifAssessmentComplete'));
    navigate('/results');
  };

  // Loading state
  if (!currentQuestion || selectedDomains.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-lg text-muted-foreground">{t('loadingQuestions')}</p>
        </div>
      </div>
    );
  }

  const totalQuestions = selectedDomains.length * QUESTIONS_PER_DOMAIN;
  const currentQuestionNumber = currentDomainIndex * QUESTIONS_PER_DOMAIN + currentQuestionIndex + 1;
  const progress = (currentQuestionNumber / totalQuestions) * 100;

  // Get performance snapshot for current domain
  const performanceSnapshot = engine.getPerformanceSnapshot(selectedDomains[currentDomainIndex]);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {xpToShow && <XPAnimation amount={xpToShow} onComplete={() => setXpToShow(null)} />}
      
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold">CyberSelf</span>
            </div>
            <Badge variant="secondary" className="text-sm">
              {totalXP} XP
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">
                {t('question')} {currentQuestionNumber} {t('of')} {totalQuestions}
              </span>
              <span className="text-muted-foreground">
                {t('domain')}: {selectedDomains[currentDomainIndex].replace('-', ' ')}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-elevation mb-6">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{currentQuestion.difficulty}</Badge>
                <Badge variant="secondary">{currentQuestion.type}</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-2">{currentQuestion.prompt}</h2>
            </div>

            {/* Difficulty Indicator */}
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-warning animate-pulse" />
              <span className="text-sm text-muted-foreground">
                {t('difficultyAdapting')}
              </span>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-smooth ${
                      showCorrect
                        ? 'border-success bg-success/10'
                        : showIncorrect
                        ? 'border-destructive bg-destructive/10'
                        : isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex-1">{option}</span>
                      {showCorrect && <CheckCircle className="w-5 h-5 text-success" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-destructive" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {showFeedback && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium mb-1">{t('explanation')}</p>
                <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Hint Card */}
        {showHint && !showFeedback && (
          <HintCard 
            domain={selectedDomains[currentDomainIndex]}
            onDismiss={() => setShowHint(false)}
          />
        )}

        {/* Progress Snapshot */}
        {showProgressSnapshot && (
          <div className="mb-6">
            <ProgressSnapshot
              accuracy={performanceSnapshot.accuracy}
              avgResponseTime={performanceSnapshot.avgResponseTime}
              currentLevel={performanceSnapshot.currentLevel}
              questionsAnswered={currentQuestionIndex + 1}
              totalQuestions={QUESTIONS_PER_DOMAIN}
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{t('takeYourTime')}</span>
          </div>

          {!showFeedback ? (
            <Button
              size="lg"
              variant="hero"
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
            >
              {t('submitAnswer')}
            </Button>
          ) : (
            <Button
              size="lg"
              variant="hero"
              onClick={handleNextQuestion}
            >
              {t('nextQuestion')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
