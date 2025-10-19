import { Trophy, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DomainScore } from '@/types/assessment';
import { domains } from '@/data/domains';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';

interface OverviewPanelProps {
  totalXP: number;
  overallScore: number;
  badges: string[];
  domainScores: DomainScore[];
}

export const OverviewPanel = ({ totalXP, overallScore, badges, domainScores }: OverviewPanelProps) => {
  const { t } = useLanguage();
  
  const getDomainName = (domain: string) => {
    const info = domains.find((d) => d.id === domain);
    return info?.name || domain;
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 80) return 'text-success';
    if (accuracy >= 50) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <Card className="shadow-elevation animate-fade-in lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          {t('overview')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-muted/30">
            <div className="text-3xl font-bold text-primary">{totalXP}</div>
            <div className="text-sm text-muted-foreground">{t('totalXP')}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/30">
            <div className="text-3xl font-bold text-primary">{overallScore}</div>
            <div className="text-sm text-muted-foreground">{t('score')}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/30">
            <div className="text-3xl font-bold text-primary">{badges.length}</div>
            <div className="text-sm text-muted-foreground">{t('badgesEarned')}</div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Target className="w-4 h-4" />
            {t('badges')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary">
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        {/* Domain Summary */}
        <div>
          <h4 className="text-sm font-semibold mb-3">{t('domainMastery')}</h4>
          <TooltipProvider>
            <div className="space-y-3">
              {domainScores.map((score, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="space-y-1 cursor-help">
                      <div className="flex justify-between text-sm">
                        <span>{getDomainName(score.domain)}</span>
                        <span className={`font-medium ${getAccuracyColor(score.accuracy)}`}>
                          {score.accuracy}%
                        </span>
                      </div>
                      <Progress
                        value={score.accuracy}
                        className="h-2"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-xs space-y-1">
                      <p><strong>Accuracy:</strong> {score.accuracy}%</p>
                      <p><strong>Level:</strong> {score.level}</p>
                      <p><strong>Avg Time:</strong> {score.avgResponseTime}s</p>
                      <p><strong>Questions:</strong> {score.correctAnswers}/{score.questionsAnswered}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};
