import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { DomainScore } from '@/types/assessment';
import { calculateDomainScore } from '@/utils/adaptiveEngine';
import { generateSkillTree } from '@/utils/skillTreeGenerator';
import { determinePersona, PersonaProfile, personaProfiles } from '@/types/persona';
import { OverviewPanel } from '@/components/dashboard/OverviewPanel';
import { SkillTreePanel } from '@/components/dashboard/SkillTreePanel';
import { PersonaPanel } from '@/components/dashboard/PersonaPanel';
import { RecommendationsPanel } from '@/components/dashboard/RecommendationsPanel';
import { LeaderboardPanel } from '@/components/dashboard/LeaderboardPanel';
import { GamificationPanel } from '@/components/dashboard/GamificationPanel';
import { ExportPanel } from '@/components/dashboard/ExportPanel';

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [nickname, setNickname] = useState('');
  const [totalXP, setTotalXP] = useState(0);
  const [domainScores, setDomainScores] = useState<DomainScore[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [skillTreeData, setSkillTreeData] = useState<any[]>([]);
  const [persona, setPersona] = useState<PersonaProfile | null>(null);

  useEffect(() => {
    const sessionData = localStorage.getItem('cyberself_session');
    if (!sessionData) {
      navigate('/register');
      return;
    }

    const session = JSON.parse(sessionData);
    setNickname(session.nickname);
    setTotalXP(session.totalXP || 0);

    const selectedDomains = session.selectedDomains || [];
    const responses = session.responses || [];

    // Calculate domain scores
    const scores: DomainScore[] = selectedDomains.map((domain: string) => {
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

    const avgAccuracy = scores.reduce((sum, s) => sum + s.accuracy, 0) / scores.length;
    setOverallScore(Math.round(avgAccuracy));

    // Award badges
    const earnedBadges: string[] = [];
    if (avgAccuracy >= 90) earnedBadges.push('Cyber Expert');
    else if (avgAccuracy >= 70) earnedBadges.push('Security Analyst');
    else earnedBadges.push('Rising Learner');

    if (session.totalXP >= 100) earnedBadges.push('XP Master');
    setBadges(earnedBadges);

    // Generate skill tree
    const tree = generateSkillTree(scores);
    setSkillTreeData(tree);

    // Determine persona
    const personaType = determinePersona(scores);
    setPersona(personaProfiles[personaType]);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">CyberSelf Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {nickname}!</h1>
          <p className="text-muted-foreground">Track your progress and continue your cybersecurity journey</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Overview Panel */}
          <OverviewPanel
            totalXP={totalXP}
            overallScore={overallScore}
            badges={badges}
            domainScores={domainScores}
          />

          {/* Gamification Panel */}
          <GamificationPanel totalXP={totalXP} badges={badges} />

          {/* Skill Tree Panel */}
          <SkillTreePanel data={skillTreeData} />

          {/* Persona Panel */}
          {persona && <PersonaPanel persona={persona} />}

          {/* Recommendations Panel */}
          <RecommendationsPanel domainScores={domainScores} />

          {/* Leaderboard Panel */}
          <LeaderboardPanel nickname={nickname} overallScore={overallScore} />

          {/* Export Panel */}
          <ExportPanel
            nickname={nickname}
            totalXP={totalXP}
            overallScore={overallScore}
            badges={badges}
            persona={persona}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
