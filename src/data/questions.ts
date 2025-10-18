import { Question, Domain, DifficultyLevel } from '@/types/assessment';

export const questionBank: Question[] = [
  // Cyber Hygiene - Beginner
  {
    id: 'ch-b1',
    domain: 'cyber-hygiene',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'What is the most important characteristic of a strong password?',
    options: [
      'It contains a mix of letters, numbers, and special characters',
      'It is easy to remember',
      'It is the same across all accounts',
      'It is short and simple'
    ],
    correctAnswer: 0,
    explanation: 'Strong passwords should be complex, unique, and difficult to guess.'
  },
  {
    id: 'ch-b2',
    domain: 'cyber-hygiene',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'What should you do if you receive a suspicious email asking for your password?',
    options: [
      'Reply with your password',
      'Click on any links to verify',
      'Delete it and report as phishing',
      'Forward it to friends'
    ],
    correctAnswer: 2,
    explanation: 'Never share passwords via email. Delete suspicious emails and report them.'
  },
  {
    id: 'ch-b3',
    domain: 'cyber-hygiene',
    difficulty: 'beginner',
    type: 'scenario',
    prompt: 'You find a USB drive in the parking lot. What should you do?',
    options: [
      'Plug it into your work computer to find the owner',
      'Take it to IT/security for proper handling',
      'Keep it for personal use',
      'Give it to a colleague to check'
    ],
    correctAnswer: 1,
    explanation: 'Unknown USB drives can contain malware. Always report to IT security.'
  },

  // Cyber Hygiene - Intermediate
  {
    id: 'ch-i1',
    domain: 'cyber-hygiene',
    difficulty: 'intermediate',
    type: 'multiple-choice',
    prompt: 'What is two-factor authentication (2FA)?',
    options: [
      'Using two different passwords',
      'An additional verification step beyond password',
      'Logging in from two devices',
      'Having two user accounts'
    ],
    correctAnswer: 1,
    explanation: '2FA adds an extra layer of security by requiring a second verification method.'
  },
  {
    id: 'ch-i2',
    domain: 'cyber-hygiene',
    difficulty: 'intermediate',
    type: 'scenario',
    prompt: 'Your colleague shares sensitive data via public WiFi. What is the risk?',
    options: [
      'No risk if the WiFi is fast',
      'Data can be intercepted by attackers',
      'Only a risk during business hours',
      'Risk only exists on mobile devices'
    ],
    correctAnswer: 1,
    explanation: 'Public WiFi is unencrypted and vulnerable to man-in-the-middle attacks.'
  },

  // Network Security - Beginner
  {
    id: 'ns-b1',
    domain: 'network-security',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'What does a firewall do?',
    options: [
      'Prevents physical access to servers',
      'Monitors and controls network traffic',
      'Backs up data automatically',
      'Encrypts all files'
    ],
    correctAnswer: 1,
    explanation: 'Firewalls filter incoming and outgoing network traffic based on security rules.'
  },
  {
    id: 'ns-b2',
    domain: 'network-security',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'Which protocol encrypts web traffic?',
    options: [
      'HTTP',
      'FTP',
      'HTTPS',
      'SMTP'
    ],
    correctAnswer: 2,
    explanation: 'HTTPS uses SSL/TLS encryption to secure data transmitted over the web.'
  },

  // Network Security - Intermediate
  {
    id: 'ns-i1',
    domain: 'network-security',
    difficulty: 'intermediate',
    type: 'scenario',
    prompt: 'You notice unusual outbound traffic from your network. What should you do first?',
    options: [
      'Ignore it if systems seem normal',
      'Immediately disconnect all devices',
      'Investigate the source and alert security team',
      'Restart the router'
    ],
    correctAnswer: 2,
    explanation: 'Unusual traffic may indicate a breach. Investigate and report to security immediately.'
  },
  {
    id: 'ns-i2',
    domain: 'network-security',
    difficulty: 'intermediate',
    type: 'multiple-choice',
    prompt: 'What is a VPN primarily used for?',
    options: [
      'Faster internet speed',
      'Secure encrypted connection over public networks',
      'Blocking advertisements',
      'Downloading files faster'
    ],
    correctAnswer: 1,
    explanation: 'VPNs create encrypted tunnels to protect data on unsecured networks.'
  },

  // Secure Software Development - Beginner
  {
    id: 'ssd-b1',
    domain: 'secure-software',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'What is SQL injection?',
    options: [
      'A method to optimize database queries',
      'An attack that inserts malicious SQL code',
      'A way to backup databases',
      'A type of software update'
    ],
    correctAnswer: 1,
    explanation: 'SQL injection exploits vulnerabilities by inserting malicious SQL statements.'
  },
  {
    id: 'ssd-b2',
    domain: 'secure-software',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'Why should user input be validated?',
    options: [
      'To improve user experience',
      'To prevent malicious code injection',
      'To make the app faster',
      'It is not necessary'
    ],
    correctAnswer: 1,
    explanation: 'Input validation prevents attackers from injecting harmful code or data.'
  },

  // Secure Software Development - Intermediate
  {
    id: 'ssd-i1',
    domain: 'secure-software',
    difficulty: 'intermediate',
    type: 'scenario',
    prompt: 'You find hardcoded credentials in legacy code. What is the security risk?',
    options: [
      'No risk if the code is old',
      'Credentials can be exposed in version control',
      'Only a risk if the app is public',
      'Risk only exists on production servers'
    ],
    correctAnswer: 1,
    explanation: 'Hardcoded credentials in code can be discovered in repositories or logs.'
  },
  {
    id: 'ssd-i2',
    domain: 'secure-software',
    difficulty: 'intermediate',
    type: 'multiple-choice',
    prompt: 'What is the principle of least privilege?',
    options: [
      'Give users maximum access for convenience',
      'Grant minimum permissions necessary for tasks',
      'All users should have admin rights',
      'Permissions do not matter'
    ],
    correctAnswer: 1,
    explanation: 'Least privilege limits access rights to minimize potential damage from breaches.'
  },

  // Advanced questions
  {
    id: 'ch-a1',
    domain: 'cyber-hygiene',
    difficulty: 'advanced',
    type: 'scenario',
    prompt: 'Your organization experiences a ransomware attack. What is the best immediate response?',
    options: [
      'Pay the ransom immediately',
      'Isolate infected systems and activate incident response',
      'Continue working normally',
      'Delete all backups'
    ],
    correctAnswer: 1,
    explanation: 'Isolate systems to prevent spread and follow incident response procedures.'
  },
  {
    id: 'ns-a1',
    domain: 'network-security',
    difficulty: 'advanced',
    type: 'multiple-choice',
    prompt: 'What is a zero-day vulnerability?',
    options: [
      'A vulnerability discovered at project start',
      'A vulnerability unknown to the vendor with no patch',
      'A vulnerability that only exists for one day',
      'A vulnerability with zero impact'
    ],
    correctAnswer: 1,
    explanation: 'Zero-day vulnerabilities are exploited before vendors can create patches.'
  },
  {
    id: 'ssd-a1',
    domain: 'secure-software',
    difficulty: 'advanced',
    type: 'scenario',
    prompt: 'During code review, you find user data stored in plain text. What should you recommend?',
    options: [
      'Leave it as is for performance',
      'Implement encryption at rest and in transit',
      'Only encrypt in production',
      'Encryption is not necessary for user data'
    ],
    correctAnswer: 1,
    explanation: 'Sensitive data must be encrypted both at rest and during transmission.'
  }
];

export const getQuestionsByDomain = (domain: Domain): Question[] => {
  return questionBank.filter(q => q.domain === domain);
};

export const getQuestionsByDifficulty = (domain: Domain, difficulty: DifficultyLevel): Question[] => {
  return questionBank.filter(q => q.domain === domain && q.difficulty === difficulty);
};
