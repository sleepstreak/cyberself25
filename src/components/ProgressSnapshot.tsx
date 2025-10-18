import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DifficultyLevel } from "@/types/assessment";

interface ProgressSnapshotProps {
  accuracy: number;
  avgResponseTime: number;
  currentLevel: DifficultyLevel;
  questionsAnswered: number;
  totalQuestions: number;
}

export const ProgressSnapshot = ({
  accuracy,
  avgResponseTime,
  currentLevel,
  questionsAnswered,
  totalQuestions,
}: ProgressSnapshotProps) => {
  const getLevelBadgeVariant = (level: DifficultyLevel) => {
    switch (level) {
      case 'beginner':
        return 'secondary';
      case 'intermediate':
        return 'default';
      case 'advanced':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getMotivationalMessage = (accuracy: number) => {
    if (accuracy >= 80) return "Excellent work! 🌟";
    if (accuracy >= 60) return "Good progress! 💪";
    if (accuracy >= 40) return "Keep going! 🎯";
    return "Stay focused! 📚";
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4 shadow-elevation animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Progress Check</h3>
        <Badge variant={getLevelBadgeVariant(currentLevel)} className="capitalize">
          {currentLevel}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Questions Completed</span>
          <span className="font-medium text-foreground">{questionsAnswered} / {totalQuestions}</span>
        </div>
        <Progress value={(questionsAnswered / totalQuestions) * 100} className="h-2" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Accuracy</p>
          <p className="text-2xl font-bold text-primary">{accuracy}%</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Avg. Time</p>
          <p className="text-2xl font-bold text-primary">{avgResponseTime}s</p>
        </div>
      </div>

      <div className="pt-2 border-t border-border">
        <p className="text-center text-sm font-medium text-foreground">
          {getMotivationalMessage(accuracy)}
        </p>
      </div>
    </div>
  );
};
