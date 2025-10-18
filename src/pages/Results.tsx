import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Trophy, TrendingUp, Target, BookOpen, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Domain, DomainScore, Recommendation } from '@/types/assessment';
import { calculateDomainScore } from '@/utils/adaptiveEngine';
import { domains } from '@/data/domains';
import { SkillTree } from '@/components/SkillTree';
import { AnimatedBadge, BadgeUnlock } from '@/components/AnimatedBadge';
import { generateSkillTree } from '@/utils/skillTreeGenerator';

const Results = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [totalXP, setTotalXP] = useState(0);
  const [domainScores, setDomainScores] = useState<DomainScore[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [badges, setBadges] = useState<string[]>([]);
  const [showBadgeUnlock, setShowBadgeUnlock] = useState<string | null>(null);
  const [skillTreeData, setSkillTreeData] = useState<any[]>([]);

  useEffect(() => {
    const sessionData = localStorage.getItem('cyberself_session');
    if (!sessionData) {
      navigate('/register');
      return;
    }

    const session = JSON.parse(sessionData);
    setNickname(session.nickname);
    setTotalXP(session.totalXP || 0);

    // Calculate scores per domain
    const selectedDomains: Domain[] = session.selectedDomains || [];
    const responses = session.responses || [];

    const scores: DomainScore[] = selectedDomains.map((domain) => {
      const domainResponses = responses.filter((r: any) => {
        const questionDomain = r.questionId.split('-')[0];
        return (
          (questionDomain === 'ch' && domain === 'cyber-hygiene') ||
          (questionDomain === 'ns' && domain === 'network-security') ||
          (questionDomain === 'ssd' && domain === 'secure-software')
        );
      });

      const correctAnswers = domainResponses.filter((r: any) => r.isCorrect).length;
      const stats = calculateDomainScore(domainResponses, domainResponses.length);

      return {
        domain,
        accuracy: stats.accuracy,
        avgResponseTime: stats.avgResponseTime,
        level: stats.accuracy >= 80 ? 'advanced' : stats.accuracy >= 50 ? 'intermediate' : 'beginner',
        questionsAnswered: domainResponses.length,
        correctAnswers,
      };
    });

    setDomainScores(scores);

    // Calculate overall score
    const avgAccuracy = scores.reduce((sum, s) => sum + s.accuracy, 0) / scores.length;
    setOverallScore(Math.round(avgAccuracy));

    // Generate recommendations
    const recs: Recommendation[] = scores.map((score) => ({
      domain: score.domain,
      priority: score.accuracy < 50 ? 'high' : score.accuracy < 70 ? 'medium' : 'low',
      suggestedResources: [
        {
          title: 'ENISA Cybersecurity Skills Framework',
          url: 'https://www.enisa.europa.eu/',
          type: 'article',
        },
        {
          title: `${getDomainName(score.domain)} Fundamentals`,
          url: '#',
          type: 'course',
        },
        {
          title: 'CyberHub Bootcamp',
          url: '#',
          type: 'bootcamp',
        },
      ],
      nextSteps:
        score.accuracy < 50
          ? ['Focus on fundamentals', 'Practice with beginner challenges', 'Join study groups']
          : score.accuracy < 70
          ? ['Advance to intermediate topics', 'Complete hands-on labs', 'Earn industry certifications']
          : ['Explore advanced scenarios', 'Contribute to open-source security', 'Mentor junior learners'],
    }));

    setRecommendations(recs);

    // Award badges
    const earnedBadges: string[] = [];
    if (avgAccuracy >= 90) earnedBadges.push('Cyber Expert');
    else if (avgAccuracy >= 70) earnedBadges.push('Security Analyst');
    else earnedBadges.push('Rising Learner');

    if (session.totalXP >= 100) earnedBadges.push('XP Master');
    setBadges(earnedBadges);

    // Show badge unlock animation
    if (earnedBadges.length > 0) {
      setTimeout(() => setShowBadgeUnlock(earnedBadges[0]), 1000);
    }

    // Generate skill tree
    const tree = generateSkillTree(scores);
    setSkillTreeData(tree);
  }, []);

  const getDomainName = (domain: Domain): string => {
    const info = domains.find((d) => d.id === domain);
    return info?.name || domain;
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      {showBadgeUnlock && (
        <BadgeUnlock badge={showBadgeUnlock} onClose={() => setShowBadgeUnlock(null)} />
      )}
      
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">CyberSelf</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Assessment Complete!</h1>
          <p className="text-lg text-muted-foreground">
            Great work, {nickname}! Here are your results.
          </p>
        </div>

        {/* Overall Score */}
        <Card className="shadow-elevation mb-8 animate-fade-in">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Overall Score</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-full gradient-hero mb-6 shadow-glow animate-pulse-glow">
              <div className="w-36 h-36 rounded-full bg-background flex items-center justify-center">
                <div>
                  <div className="text-5xl font-bold text-primary animate-scale-in">{overallScore}</div>
                  <div className="text-sm text-muted-foreground">out of 100</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {badges.map((badge, index) => (
                <AnimatedBadge key={index} badge={badge} delay={index * 200} />
              ))}
              <AnimatedBadge badge={`${totalXP} XP Earned`} delay={badges.length * 200} />
            </div>
          </CardContent>
        </Card>

        {/* Skill Tree */}
        {skillTreeData.length > 0 && (
          <div className="mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Your Learning Path</h2>
            <SkillTree data={skillTreeData} />
          </div>
        )}

        {/* Domain Breakdown */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Domain Performance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {domainScores.map((score, index) => (
              <Card 
                key={score.domain} 
                className="shadow-elevation hover-scale transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{getDomainName(score.domain)}</CardTitle>
                  <CardDescription>
                    {score.correctAnswers}/{score.questionsAnswered} correct
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Accuracy</span>
                        <span className="font-medium">{score.accuracy}%</span>
                      </div>
                      <Progress value={score.accuracy} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Level</span>
                      <Badge variant="outline">{score.level}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Time</span>
                      <span className="text-sm font-medium">{score.avgResponseTime}s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Personalized Learning Path</h2>
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="shadow-elevation">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{getDomainName(rec.domain)}</CardTitle>
                      <CardDescription>Recommended next steps</CardDescription>
                    </div>
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Action Items
                    </h4>
                    <ul className="space-y-1 ml-6">
                      {rec.nextSteps.map((step, i) => (
                        <li key={i} className="text-sm text-muted-foreground list-disc">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Recommended Resources
                    </h4>
                    <div className="space-y-2">
                      {rec.suggestedResources.map((resource, i) => (
                        <a
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-smooth text-sm"
                        >
                          <span>{resource.title}</span>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={() => navigate('/leaderboard')}>
            <TrendingUp className="mr-2 w-4 h-4" />
            View Leaderboard
          </Button>
          <Button
            variant="hero"
            size="lg"
            onClick={() => {
              localStorage.removeItem('cyberself_session');
              navigate('/');
            }}
          >
            Start New Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
