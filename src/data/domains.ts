import { DomainInfo } from '@/types/assessment';

export const domains: DomainInfo[] = [
  {
    id: 'cyber-hygiene',
    name: 'Cyber Hygiene',
    description: 'Master the fundamentals of digital safety, password management, phishing awareness, and secure online behavior.',
    icon: 'Shield',
    difficulty: 'Beginner to Intermediate',
    color: 'hsl(221 83% 53%)'
  },
  {
    id: 'network-security',
    name: 'Network Security',
    description: 'Learn about firewalls, VPNs, network monitoring, intrusion detection, and protecting data in transit.',
    icon: 'Network',
    difficulty: 'Intermediate to Advanced',
    color: 'hsl(199 89% 48%)'
  },
  {
    id: 'secure-software',
    name: 'Secure Software Development',
    description: 'Understand secure coding practices, input validation, authentication, encryption, and vulnerability prevention.',
    icon: 'Code',
    difficulty: 'Intermediate to Advanced',
    color: 'hsl(271 91% 65%)'
  }
];
