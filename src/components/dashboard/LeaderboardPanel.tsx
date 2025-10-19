import { TrendingUp, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';

interface LeaderboardPanelProps {
  nickname: string;
  overallScore: number;
}

export const LeaderboardPanel = ({ nickname, overallScore }: LeaderboardPanelProps) => {
  const { t } = useLanguage();
  
  // Mock data for demonstration
  const userRank = 42;
  const totalUsers = 150;
  const percentile = Math.round((1 - userRank / totalUsers) * 100);
  
  const peerAverage = 68;
  const countryAverage = 72;
  const globalAverage = 65;

  return (
    <Card className="shadow-elevation animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          {t('yourRanking')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Rank Display */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10">
          <div>
            <div className="text-2xl font-bold text-primary">#{userRank}</div>
            <div className="text-sm text-muted-foreground">{t('globalRank')}</div>
          </div>
          <Medal className="w-12 h-12 text-primary animate-pulse-glow" />
        </div>

        {/* Percentile */}
        <div className="text-center p-3 rounded-lg bg-muted/30">
          <div className="text-lg font-semibold">{t('topPercent').replace('{percent}', percentile.toString())}</div>
          <div className="text-xs text-muted-foreground">
            {t('aheadOfLearners').replace('{count}', (totalUsers - userRank).toString())}
          </div>
        </div>

        {/* Comparisons */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">{t('performanceComparison')}</h4>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>{t('yourScore')}</span>
              <span className="font-medium text-primary">{overallScore}%</span>
            </div>
            <Progress value={overallScore} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>{t('countryAverage')}</span>
              <span className="font-medium">{countryAverage}%</span>
            </div>
            <Progress value={countryAverage} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>{t('peerAverage')}</span>
              <span className="font-medium">{peerAverage}%</span>
            </div>
            <Progress value={peerAverage} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>{t('globalAverage')}</span>
              <span className="font-medium">{globalAverage}%</span>
            </div>
            <Progress value={globalAverage} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
