import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface XPAnimationProps {
  amount: number;
  onComplete?: () => void;
}

export const XPAnimation = ({ amount, onComplete }: XPAnimationProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in pointer-events-none">
      <div className="relative">
        <div className="text-6xl font-bold text-primary animate-scale-in">
          +{amount}
        </div>
        <div className="text-2xl font-semibold text-muted-foreground text-center mt-2">
          XP
        </div>
        <Sparkles className="w-8 h-8 text-warning absolute -top-4 -right-4 animate-spin" />
        <Sparkles className="w-6 h-6 text-warning absolute -bottom-2 -left-2 animate-pulse" />
      </div>
    </div>
  );
};
