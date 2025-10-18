import { useNavigate } from 'react-router-dom';
import { Shield, Brain, Timer, TrendingUp, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AssessmentIntro = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">CyberSelf</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('assessmentIntroTitle')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('assessmentIntroSubtitle')}
          </p>
        </div>

        <Card className="shadow-elevation mb-8">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('adaptive')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('adaptiveDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Timer className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('timed')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('timedDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('comprehensive')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('comprehensiveDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Assessment Progress</span>
                <span className="text-sm text-muted-foreground">0%</span>
              </div>
              <Progress value={0} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                You'll answer 10-15 questions per domain
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={() => navigate('/domains')}>
            {t('back')}
          </Button>
          <Button
            size="lg"
            variant="hero"
            onClick={() => navigate('/assessment')}
            className="min-w-[200px]"
          >
            <Play className="mr-2 w-5 h-5" />
            {t('beginAssessment')}
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            This assessment typically takes 15-30 minutes to complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;
