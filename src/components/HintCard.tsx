import { AlertCircle, Lightbulb, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Domain } from '@/types/assessment';

interface HintCardProps {
  domain: Domain;
  onDismiss?: () => void;
}

const domainHints: Record<Domain, string[]> = {
  'cyber-hygiene': [
    'Think about best practices for password management and data protection.',
    'Consider what actions would keep both personal and organizational data safe.',
    'Remember: security is about creating layers of protection.',
  ],
  'network-security': [
    'Focus on how data flows through networks and where vulnerabilities might exist.',
    'Think about the different layers of network protection.',
    'Consider both prevention and detection mechanisms.',
  ],
  'secure-software': [
    'Think about common vulnerabilities in software applications.',
    'Consider how attackers might exploit poor input validation.',
    'Remember the principle of least privilege and defense in depth.',
  ],
};

export const HintCard = ({ domain, onDismiss }: HintCardProps) => {
  const hints = domainHints[domain];
  const randomHint = hints[Math.floor(Math.random() * hints.length)];

  return (
    <Card className="bg-accent/10 border-accent animate-fade-in">
      <CardContent className="pt-6">
        <div className="flex gap-3">
          <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 animate-pulse" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium text-foreground flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Hint
            </p>
            <p className="text-sm text-muted-foreground">{randomHint}</p>
          </div>
          {onDismiss && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onDismiss}
              className="h-6 w-6 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
