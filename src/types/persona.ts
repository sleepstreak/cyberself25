export type CyberPersona = 
  | 'penetration-tester'
  | 'policy-strategist'
  | 'cloud-defender'
  | 'incident-responder'
  | 'security-architect'
  | 'generalist';

export interface PersonaProfile {
  id: CyberPersona;
  name: string;
  description: string;
  icon: string;
  color: string;
  strengths: string[];
  weaknesses: string[];
  recommendedPath: string[];
}

export const personaProfiles: Record<CyberPersona, PersonaProfile> = {
  'penetration-tester': {
    id: 'penetration-tester',
    name: 'Penetration Tester',
    description: 'Excels at finding vulnerabilities and testing security defenses',
    icon: '🔍',
    color: 'hsl(217 100% 30%)',
    strengths: ['Network Security', 'Vulnerability Assessment', 'Exploit Development'],
    weaknesses: ['Policy Development', 'Compliance'],
    recommendedPath: ['Advanced Network Security', 'Web Application Security', 'Mobile Security'],
  },
  'policy-strategist': {
    id: 'policy-strategist',
    name: 'Policy Strategist',
    description: 'Strong in governance, compliance, and security frameworks',
    icon: '📋',
    color: 'hsl(217 100% 30%)',
    strengths: ['Compliance', 'Risk Management', 'Security Frameworks'],
    weaknesses: ['Technical Implementation', 'Code Review'],
    recommendedPath: ['Security Governance', 'Risk Assessment', 'Audit & Compliance'],
  },
  'cloud-defender': {
    id: 'cloud-defender',
    name: 'Cloud Defender',
    description: 'Specializes in cloud security and infrastructure protection',
    icon: '☁️',
    color: 'hsl(217 100% 30%)',
    strengths: ['Cloud Security', 'Infrastructure Protection', 'DevSecOps'],
    weaknesses: ['Legacy Systems', 'Physical Security'],
    recommendedPath: ['Cloud Architecture Security', 'Container Security', 'Serverless Security'],
  },
  'incident-responder': {
    id: 'incident-responder',
    name: 'Incident Responder',
    description: 'Skilled at detecting, analyzing, and responding to security incidents',
    icon: '🚨',
    color: 'hsl(217 100% 30%)',
    strengths: ['Threat Detection', 'Forensics', 'Incident Response'],
    weaknesses: ['Preventive Controls', 'Architecture Design'],
    recommendedPath: ['Digital Forensics', 'Threat Hunting', 'Malware Analysis'],
  },
  'security-architect': {
    id: 'security-architect',
    name: 'Security Architect',
    description: 'Designs comprehensive security solutions and systems',
    icon: '🏗️',
    color: 'hsl(217 100% 30%)',
    strengths: ['System Design', 'Security Architecture', 'Strategic Planning'],
    weaknesses: ['Hands-on Testing', 'Rapid Response'],
    recommendedPath: ['Enterprise Security Architecture', 'Zero Trust Design', 'Security Operations'],
  },
  'generalist': {
    id: 'generalist',
    name: 'Security Generalist',
    description: 'Well-rounded with balanced skills across multiple domains',
    icon: '⚡',
    color: 'hsl(217 100% 30%)',
    strengths: ['Adaptability', 'Broad Knowledge', 'Cross-functional Skills'],
    weaknesses: ['Deep Specialization'],
    recommendedPath: ['Choose Your Path', 'Explore Specializations', 'Build Deep Expertise'],
  },
};

export function determinePersona(domainScores: Array<{ domain: string; accuracy: number }>): CyberPersona {
  const scores = domainScores.reduce((acc, score) => {
    acc[score.domain] = score.accuracy;
    return acc;
  }, {} as Record<string, number>);

  const networkScore = scores['network-security'] || 0;
  const hygieneScore = scores['cyber-hygiene'] || 0;
  const softwareScore = scores['secure-software'] || 0;

  const avgScore = (networkScore + hygieneScore + softwareScore) / 3;
  const variance = Math.max(
    Math.abs(networkScore - avgScore),
    Math.abs(hygieneScore - avgScore),
    Math.abs(softwareScore - avgScore)
  );

  // If scores are balanced, return generalist
  if (variance < 15) {
    return 'generalist';
  }

  // Determine specialization based on highest scores
  if (networkScore > hygieneScore && networkScore > softwareScore) {
    return networkScore > 70 ? 'penetration-tester' : 'incident-responder';
  }
  
  if (softwareScore > networkScore && softwareScore > hygieneScore) {
    return softwareScore > 70 ? 'cloud-defender' : 'security-architect';
  }
  
  if (hygieneScore > networkScore && hygieneScore > softwareScore) {
    return 'policy-strategist';
  }

  return 'generalist';
}
