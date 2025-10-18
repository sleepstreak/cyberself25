import { TrendingUp, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface LeaderboardPanelProps {
  nickname: string;
  overallScore: number;
}

export const LeaderboardPanel = ({ nickname, overallScore }: LeaderboardPanelProps) => {
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
          Your Ranking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Rank Display */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10">
          <div>
            <div className="text-2xl font-bold text-primary">#{userRank}</div>
            <div className="text-sm text-muted-foreground">Global Rank</div>
          </div>
          <Medal className="w-12 h-12 text-primary animate-pulse-glow" />
        </div>

        {/* Percentile */}
        <div className="text-center p-3 rounded-lg bg-muted/30">
          <div className="text-lg font-semibold">Top {percentile}%</div>
          <div className="text-xs text-muted-foreground">
            You're ahead of {totalUsers - userRank} learners
          </div>
        </div>

        {/* Comparisons */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Performance Comparison</h4>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Your Score</span>
              <span className="font-medium text-primary">{overallScore}%</span>
            </div>
            <Progress value={overallScore} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Country Average</span>
              <span className="font-medium">{countryAverage}%</span>
            </div>
            <Progress value={countryAverage} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Peer Average</span>
              <span className="font-medium">{peerAverage}%</span>
            </div>
            <Progress value={peerAverage} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Global Average</span>
              <span className="font-medium">{globalAverage}%</span>
            </div>
            <Progress value={globalAverage} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
