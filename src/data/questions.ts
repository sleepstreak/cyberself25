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
  {
    id: 'ch-b4',
    domain: 'cyber-hygiene',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'How often should you update your software and applications?',
    options: [
      'Only when they stop working',
      'Regularly, as updates become available',
      'Never, updates can break things',
      'Once a year is enough'
    ],
    correctAnswer: 1,
    explanation: 'Regular updates patch security vulnerabilities and protect against threats.'
  },
  {
    id: 'ch-i3',
    domain: 'cyber-hygiene',
    difficulty: 'intermediate',
    type: 'multiple-choice',
    prompt: 'What is the purpose of a password manager?',
    options: [
      'To share passwords with team members',
      'To securely store and generate strong passwords',
      'To remember one simple password for everything',
      'To disable password requirements'
    ],
    correctAnswer: 1,
    explanation: 'Password managers help create and securely store unique, complex passwords for each account.'
  },
  {
    id: 'ch-i4',
    domain: 'cyber-hygiene',
    difficulty: 'intermediate',
    type: 'scenario',
    prompt: 'You receive an email from your bank asking you to verify your account by clicking a link. What should you do?',
    options: [
      'Click the link immediately to avoid account closure',
      'Contact your bank directly using official channels',
      'Reply to the email asking for more details',
      'Forward the email to colleagues'
    ],
    correctAnswer: 1,
    explanation: 'Always verify suspicious communications through official channels, not via provided links.'
  },
  {
    id: 'ch-a2',
    domain: 'cyber-hygiene',
    difficulty: 'advanced',
    type: 'scenario',
    prompt: 'Your security team detects signs of privilege escalation on a user account. What is the most critical immediate action?',
    options: [
      'Monitor the account activity for more evidence',
      'Immediately suspend the account and investigate',
      'Change the account password',
      'Send a warning email to the user'
    ],
    correctAnswer: 1,
    explanation: 'Privilege escalation indicates potential compromise; immediate suspension prevents further damage.'
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
  {
    id: 'ns-b3',
    domain: 'network-security',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'What is the purpose of network segmentation?',
    options: [
      'To make networks faster',
      'To isolate different network areas for better security',
      'To reduce hardware costs',
      'To simplify network management'
    ],
    correctAnswer: 1,
    explanation: 'Network segmentation limits the spread of attacks by isolating different network zones.'
  },
  {
    id: 'ns-b4',
    domain: 'network-security',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'What does DDoS stand for?',
    options: [
      'Direct Denial of Service',
      'Distributed Denial of Service',
      'Data Denial of Security',
      'Digital Denial of Systems'
    ],
    correctAnswer: 1,
    explanation: 'DDoS attacks overwhelm systems with traffic from multiple sources to make them unavailable.'
  },
  {
    id: 'ns-i3',
    domain: 'network-security',
    difficulty: 'intermediate',
    type: 'scenario',
    prompt: 'An employee reports they cannot access the company network remotely. What security measure might be causing this?',
    options: [
      'Their computer is too old',
      'VPN or firewall rules blocking their connection',
      'The internet is down globally',
      'Their account has expired'
    ],
    correctAnswer: 1,
    explanation: 'Remote access is typically controlled by VPN and firewall configurations for security.'
  },
  {
    id: 'ns-i4',
    domain: 'network-security',
    difficulty: 'intermediate',
    type: 'multiple-choice',
    prompt: 'What is the main purpose of an Intrusion Detection System (IDS)?',
    options: [
      'To prevent all unauthorized access automatically',
      'To monitor and alert on suspicious network activity',
      'To encrypt all network traffic',
      'To backup network configurations'
    ],
    correctAnswer: 1,
    explanation: 'IDS monitors network traffic for suspicious patterns and alerts administrators.'
  },
  {
    id: 'ns-a2',
    domain: 'network-security',
    difficulty: 'advanced',
    type: 'scenario',
    prompt: 'You detect a botnet attempting to establish command and control communication. What should be your first priority?',
    options: [
      'Document the traffic patterns for analysis',
      'Block the C&C server IPs and isolate infected hosts',
      'Monitor the botnet to learn its capabilities',
      'Notify affected users via email'
    ],
    correctAnswer: 1,
    explanation: 'Immediate isolation and blocking prevents the botnet from receiving commands or exfiltrating data.'
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
  {
    id: 'ssd-b3',
    domain: 'secure-software',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'What is Cross-Site Scripting (XSS)?',
    options: [
      'A way to improve website performance',
      'An attack that injects malicious scripts into web pages',
      'A method to share data between websites',
      'A type of database optimization'
    ],
    correctAnswer: 1,
    explanation: 'XSS attacks inject malicious scripts that execute in other users\' browsers.'
  },
  {
    id: 'ssd-b4',
    domain: 'secure-software',
    difficulty: 'beginner',
    type: 'multiple-choice',
    prompt: 'Why should sensitive data be encrypted?',
    options: [
      'To make it load faster',
      'To protect it from unauthorized access',
      'To reduce storage space',
      'Encryption is not necessary'
    ],
    correctAnswer: 1,
    explanation: 'Encryption protects sensitive data from being read if intercepted or accessed without authorization.'
  },
  {
    id: 'ssd-i3',
    domain: 'secure-software',
    difficulty: 'intermediate',
    type: 'scenario',
    prompt: 'During a security audit, you find API endpoints without authentication. What is the primary risk?',
    options: [
      'The API will be slower',
      'Unauthorized users can access or modify data',
      'The API will consume more resources',
      'There is no risk if the API is internal'
    ],
    correctAnswer: 1,
    explanation: 'Unauthenticated APIs allow anyone to access or manipulate data without authorization.'
  },
  {
    id: 'ssd-i4',
    domain: 'secure-software',
    difficulty: 'intermediate',
    type: 'multiple-choice',
    prompt: 'What is the purpose of security testing in the software development lifecycle?',
    options: [
      'To delay product releases',
      'To identify and fix vulnerabilities before deployment',
      'To increase development costs',
      'Testing is only needed after deployment'
    ],
    correctAnswer: 1,
    explanation: 'Security testing identifies vulnerabilities early, reducing risks and costs of post-deployment fixes.'
  },
  {
    id: 'ssd-a2',
    domain: 'secure-software',
    difficulty: 'advanced',
    type: 'scenario',
    prompt: 'You discover a race condition vulnerability in authentication logic. What is the potential impact?',
    options: [
      'Minor performance degradation',
      'Attackers could bypass authentication or escalate privileges',
      'Only affects development environments',
      'No security impact, only a code quality issue'
    ],
    correctAnswer: 1,
    explanation: 'Race conditions in authentication can allow attackers to bypass security checks or gain unauthorized access.'
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
