import { User, TrendingUp, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PersonaProfile } from '@/types/persona';
import { useLanguage } from '@/contexts/LanguageContext';

interface PersonaPanelProps {
  persona: PersonaProfile;
}

export const PersonaPanel = ({ persona }: PersonaPanelProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="shadow-elevation animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          {t('yourPersona')}
        </CardTitle>
        <CardDescription>{persona.name}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center p-6 rounded-lg bg-primary/10">
          <div className="text-6xl animate-pulse-glow">{persona.icon}</div>
        </div>

        <p className="text-sm text-muted-foreground">{persona.description}</p>

        <div>
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            {t('strengths')}
          </h4>
          <div className="space-y-1">
            {persona.strengths.map((strength, index) => (
              <div key={index} className="text-sm flex items-start gap-2">
                <span className="text-success">•</span>
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-warning" />
            {t('growthAreas')}
          </h4>
          <div className="space-y-1">
            {persona.weaknesses.map((weakness, index) => (
              <div key={index} className="text-sm flex items-start gap-2">
                <span className="text-warning">•</span>
                <span>{weakness}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="text-sm font-semibold mb-2">{t('recommendedFocus')}</h4>
          <div className="flex flex-wrap gap-2">
            {persona.recommendedPath.map((path, index) => (
              <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary">
                {path}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
