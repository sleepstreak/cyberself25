import { Domain, DomainScore } from '@/types/assessment';

export interface SkillNode {
  id: string;
  name: string;
  mastered: boolean;
  recommended: boolean;
  children?: SkillNode[];
}

export const generateSkillTree = (domainScores: DomainScore[]): SkillNode[] => {
  const trees: SkillNode[] = [];

  domainScores.forEach((score) => {
    const domainTree = createDomainTree(score);
    trees.push(domainTree);
  });

  return trees;
};

const createDomainTree = (score: DomainScore): SkillNode => {
  const domainName = getDomainDisplayName(score.domain);
  const isMastered = score.accuracy >= 80;
  const isRecommended = score.accuracy < 70;

  const children = createSubskills(score);

  return {
    id: score.domain,
    name: domainName,
    mastered: isMastered,
    recommended: isRecommended,
    children,
  };
};

const createSubskills = (score: DomainScore): SkillNode[] => {
  const subskills: { [key: string]: string[] } = {
    'cyber-hygiene': [
      'Password Management',
      'Phishing Detection',
      'Software Updates',
      'Data Backup',
    ],
    'network-security': [
      'Firewall Configuration',
      'VPN Usage',
      'Network Monitoring',
      'Intrusion Detection',
    ],
    'secure-software': [
      'Secure Coding Practices',
      'Code Review',
      'Vulnerability Testing',
      'Security Frameworks',
    ],
  };

  const skills = subskills[score.domain] || [];
  
  return skills.map((skill, index) => {
    const masteryThreshold = 80 - (index * 10);
    const recommendedThreshold = 60 - (index * 10);
    
    return {
      id: `${score.domain}-${index}`,
      name: skill,
      mastered: score.accuracy >= masteryThreshold,
      recommended: score.accuracy < recommendedThreshold && score.accuracy >= recommendedThreshold - 20,
    };
  });
};

const getDomainDisplayName = (domain: Domain): string => {
  const names: { [key: string]: string } = {
    'cyber-hygiene': 'Cyber Hygiene',
    'network-security': 'Network Security',
    'secure-software': 'Secure Software Development',
  };
  return names[domain] || domain;
};
