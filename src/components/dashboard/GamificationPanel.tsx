import { Sparkles, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';

interface GamificationPanelProps {
  totalXP: number;
  badges: string[];
}

export const GamificationPanel = ({ totalXP, badges }: GamificationPanelProps) => {
  const { t } = useLanguage();
  // Calculate level and progress
  const level = Math.floor(totalXP / 100) + 1;
  const xpToNextLevel = (level * 100) - totalXP;
  const progressToNextLevel = ((totalXP % 100) / 100) * 100;

  // Mock XP history for graph
  const xpHistory = [20, 45, 75, 120, 160, 210, totalXP];
  const maxXP = Math.max(...xpHistory, totalXP + 50);

  return (
    <Card className="shadow-elevation animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          {t('gamification')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Level Display */}
        <div className="flex items-center justify-between p-4 rounded-lg gradient-hero text-white">
          <div>
            <div className="text-2xl font-bold">{t('level')} {level}</div>
            <div className="text-sm opacity-90">{xpToNextLevel} {t('xp')} {t('nextLevelIn')}</div>
          </div>
          <Award className="w-12 h-12 animate-pulse-glow" />
        </div>

        {/* XP Progress */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>{t('xpProgress')}</span>
            <span className="font-medium">{Math.round(progressToNextLevel)}%</span>
          </div>
          <Progress value={progressToNextLevel} className="h-3" />
        </div>

        {/* XP Graph */}
        <div>
          <h4 className="text-sm font-semibold mb-3">XP Growth</h4>
          <div className="flex items-end justify-between gap-1 h-32">
            {xpHistory.map((xp, index) => (
              <div
                key={index}
                className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t transition-smooth relative group"
                style={{ height: `${(xp / maxXP) * 100}%` }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-smooth">
                  {xp}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Start</span>
            <span>Now</span>
          </div>
        </div>

        {/* Badges Timeline */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Recent Unlocks</h4>
          <div className="space-y-2">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 rounded bg-muted/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{badge}</div>
                  <div className="text-xs text-muted-foreground">Unlocked recently</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
