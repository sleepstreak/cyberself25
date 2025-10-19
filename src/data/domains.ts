import { DomainInfo } from '@/types/assessment';

// Domain information with translation keys
export const domains: DomainInfo[] = [
  {
    id: 'cyber-hygiene',
    name: 'Cyber Hygiene', // Fallback - use translation key in components
    description: 'Master the fundamentals of digital safety, password management, phishing awareness, and secure online behavior.',
    icon: 'Shield',
    difficulty: 'Beginner to Intermediate',
    color: 'hsl(220 100% 40%)',
    nameKey: 'domainCyberHygiene',
    descriptionKey: 'domainCyberHygieneDesc',
    difficultyKey: 'difficultyBeginnerIntermediate'
  },
  {
    id: 'network-security',
    name: 'Network Security',
    description: 'Learn about firewalls, VPNs, network monitoring, intrusion detection, and protecting data in transit.',
    icon: 'Network',
    difficulty: 'Intermediate to Advanced',
    color: 'hsl(199 89% 48%)',
    nameKey: 'domainNetworkSecurity',
    descriptionKey: 'domainNetworkSecurityDesc',
    difficultyKey: 'difficultyIntermediateAdvanced'
  },
  {
    id: 'secure-software',
    name: 'Secure Software Development',
    description: 'Understand secure coding practices, input validation, authentication, encryption, and vulnerability prevention.',
    icon: 'Code',
    difficulty: 'Intermediate to Advanced',
    color: 'hsl(271 91% 65%)',
    nameKey: 'domainSecureSoftware',
    descriptionKey: 'domainSecureSoftwareDesc',
    difficultyKey: 'difficultyIntermediateAdvanced'
  }
];
