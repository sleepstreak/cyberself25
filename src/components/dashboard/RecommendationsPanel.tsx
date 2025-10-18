import { BookOpen, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DomainScore } from '@/types/assessment';
import { domains } from '@/data/domains';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface RecommendationsPanelProps {
  domainScores: DomainScore[];
}

export const RecommendationsPanel = ({ domainScores }: RecommendationsPanelProps) => {
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const { t } = useLanguage();

  const getDomainName = (domain: string) => {
    const info = domains.find((d) => d.id === domain);
    return info?.name || domain;
  };

  const recommendations = domainScores.map((score) => ({
    domain: score.domain,
    priority: score.accuracy < 50 ? 'high' : score.accuracy < 70 ? 'medium' : 'low',
    resources: [
      {
        title: `${getDomainName(score.domain)} Fundamentals`,
        url: 'https://www.enisa.europa.eu/',
        type: 'course',
      },
      {
        title: 'ENISA Cybersecurity Skills Framework',
        url: 'https://www.enisa.europa.eu/',
        type: 'article',
      },
    ],
  }));

  const filteredRecs = filter === 'all' 
    ? recommendations 
    : recommendations.filter((r) => r.priority === filter);

  return (
    <Card className="shadow-elevation animate-fade-in lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          {t('recommendationsTitle')}
        </CardTitle>
        <div className="flex gap-2 mt-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            {t('allDomains')}
          </Button>
          <Button
            variant={filter === 'high' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('high')}
          >
            {t('highPriority')}
          </Button>
          <Button
            variant={filter === 'medium' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('medium')}
          >
            {t('mediumPriority')}
          </Button>
          <Button
            variant={filter === 'low' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('low')}
          >
            {t('lowPriority')}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {filteredRecs.map((rec, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border bg-card hover:bg-muted/30 transition-smooth"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold">{getDomainName(rec.domain)}</h4>
              <Badge
                variant={
                  rec.priority === 'high'
                    ? 'destructive'
                    : rec.priority === 'medium'
                    ? 'default'
                    : 'secondary'
                }
              >
                {rec.priority} priority
              </Badge>
            </div>
            <div className="space-y-2">
              {rec.resources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded hover:bg-muted/50 transition-smooth text-sm group"
                >
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                    <span>{resource.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
