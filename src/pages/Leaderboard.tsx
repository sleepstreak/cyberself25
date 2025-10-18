import { useNavigate } from 'react-router-dom';
import { Shield, Trophy, Medal, TrendingUp, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Mock leaderboard data
const mockLeaderboard = [
  { rank: 1, nickname: 'CyberNinja', score: 95, country: 'Hungary', xp: 450 },
  { rank: 2, nickname: 'SecMaster', score: 92, country: 'Poland', xp: 420 },
  { rank: 3, nickname: 'CodeGuard', score: 89, country: 'Romania', xp: 390 },
  { rank: 4, nickname: 'NetDefender', score: 87, country: 'Bulgaria', xp: 380 },
  { rank: 5, nickname: 'CryptoKey', score: 85, country: 'Greece', xp: 370 },
  { rank: 6, nickname: 'FirewallPro', score: 83, country: 'Portugal', xp: 360 },
  { rank: 7, nickname: 'PenTester', score: 81, country: 'Hungary', xp: 350 },
  { rank: 8, nickname: 'BugHunter', score: 79, country: 'Poland', xp: 340 },
  { rank: 9, nickname: 'InfoSecGuru', score: 77, country: 'Romania', xp: 330 },
  { rank: 10, nickname: 'CyberScout', score: 75, country: 'Bulgaria', xp: 320 },
];

const countryStats = [
  { country: 'Hungary', avgScore: 78, participants: 1247 },
  { country: 'Poland', avgScore: 76, participants: 1189 },
  { country: 'Romania', avgScore: 74, participants: 1056 },
  { country: 'Bulgaria', avgScore: 73, participants: 892 },
  { country: 'Greece', avgScore: 72, participants: 834 },
  { country: 'Portugal', avgScore: 71, participants: 756 },
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="w-5 h-5 text-warning" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-muted-foreground" />;
  if (rank === 3) return <Medal className="w-5 h-5 text-accent" />;
  return <span className="text-sm font-medium text-muted-foreground">#{rank}</span>;
};

const Leaderboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/results')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Results
          </Button>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">CyberSelf</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Global Leaderboard</h1>
            <p className="text-lg text-muted-foreground">
              Compare your skills with cybersecurity learners across Europe
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Top Performers */}
          <div className="lg:col-span-2">
            <Card className="shadow-elevation">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Top Performers
                </CardTitle>
                <CardDescription>
                  Anonymous rankings based on overall assessment scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockLeaderboard.map((entry) => (
                    <div
                      key={entry.rank}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-smooth ${
                        entry.rank <= 3
                          ? 'bg-gradient-to-r from-primary/5 to-transparent border border-primary/20'
                          : 'bg-muted/30 hover:bg-muted/50'
                      }`}
                    >
                      <div className="w-10 flex items-center justify-center">
                        {getRankIcon(entry.rank)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{entry.nickname}</span>
                          <Badge variant="outline" className="text-xs">
                            {entry.country}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{entry.xp} XP</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{entry.score}</div>
                        <div className="text-xs text-muted-foreground">score</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Country Stats */}
          <div>
            <Card className="shadow-elevation">
              <CardHeader>
                <CardTitle>Country Rankings</CardTitle>
                <CardDescription>Average scores by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {countryStats.map((stat, index) => (
                    <div key={stat.country} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-6 text-center text-muted-foreground">
                            {index + 1}
                          </span>
                          <span className="font-medium">{stat.country}</span>
                        </div>
                        <span className="font-bold text-primary">{stat.avgScore}</span>
                      </div>
                      <Progress value={stat.avgScore} className="h-2" />
                      <div className="text-xs text-muted-foreground text-right">
                        {stat.participants.toLocaleString()} participants
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elevation mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Assessments</span>
                  <span className="font-bold">7,974</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Score</span>
                  <span className="font-bold">74%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Countries</span>
                  <span className="font-bold">6</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="shadow-elevation gradient-hero">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Climb the Rankings?
            </h3>
            <p className="text-white/90 mb-6">
              Take another assessment to improve your score and unlock new badges
            </p>
            <Button
              size="lg"
              onClick={() => {
                localStorage.removeItem('cyberself_session');
                navigate('/');
              }}
              className="bg-white text-primary hover:bg-white/90"
            >
              Start New Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
