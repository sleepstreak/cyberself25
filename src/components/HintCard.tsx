import { Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Domain } from "@/types/assessment";

interface HintCardProps {
  domain: Domain;
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

export const HintCard = ({ domain }: HintCardProps) => {
  const hints = domainHints[domain];
  const randomHint = hints[Math.floor(Math.random() * hints.length)];

  return (
    <Card className="bg-accent/10 border-accent animate-fade-in">
      <CardContent className="pt-6">
        <div className="flex gap-3">
          <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Hint</p>
            <p className="text-sm text-muted-foreground">{randomHint}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
