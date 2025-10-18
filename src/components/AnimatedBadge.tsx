import { useEffect, useState } from 'react';
import { Award, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedBadgeProps {
  badge: string;
  delay?: number;
}

export const AnimatedBadge = ({ badge, delay = 0 }: AnimatedBadgeProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "transition-all duration-500",
        show ? "opacity-100 scale-100" : "opacity-0 scale-50"
      )}
    >
      <Badge variant="secondary" className="text-sm px-4 py-2 shadow-glow animate-pulse-glow">
        <Award className="w-4 h-4 mr-2" />
        {badge}
      </Badge>
    </div>
  );
};

interface BadgeUnlockProps {
  badge: string;
  onClose: () => void;
}

export const BadgeUnlock = ({ badge, onClose }: BadgeUnlockProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <Card className="max-w-md shadow-glow animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="relative inline-block mb-4">
            <Award className="w-24 h-24 text-primary animate-pulse" />
            <Sparkles className="w-6 h-6 text-warning absolute -top-2 -right-2 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Badge Unlocked!</h2>
          <p className="text-lg text-muted-foreground">{badge}</p>
          <div className="mt-6 text-sm text-muted-foreground">
            Keep going to unlock more achievements!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
