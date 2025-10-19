# 🛡️ CyberSelf - Adaptive Cybersecurity Skills Assessment Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An intelligent, gamified cybersecurity assessment platform that adapts to user skill levels in real-time. CyberSelf provides personalized learning paths, multi-language support, and comprehensive analytics to help individuals and organizations evaluate and improve their cybersecurity knowledge.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Quick Start](#-quick-start)
- [Features](#-features)
- [Supported Languages](#-supported-languages)
- [Installation](#-installation)
- [Usage](#-usage)
- [Demo Flow](#-demo-flow)
- [Technical Details](#-technical-details)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Project Overview

**CyberSelf** is a modern web-based platform designed to assess and enhance cybersecurity awareness and skills across three core domains:

- **🔐 Cyber Hygiene** - Password management, phishing detection, software updates, data backup
- **🌐 Network Security** - Firewall configuration, VPN usage, network monitoring, intrusion detection
- **💻 Secure Software Development** - Secure coding practices, code review, vulnerability testing, security frameworks

### Key Capabilities

- **Adaptive Testing** - Questions adjust difficulty based on real-time performance
- **Gamification** - XP points, badges, levels, and leaderboards to motivate learning
- **Personalized Results** - AI-driven persona identification and customized learning paths
- **Multi-Language Support** - Available in 7 languages across the EU
- **Privacy-First** - No personal data collected; all data stored locally

### Use Cases

- Individual skill assessment and improvement
- Corporate training programs
- Educational institutions
- Cybersecurity awareness campaigns
- Skills gap analysis for teams

---

## 🚀 Quick Start

Get the demo running in less than 2 minutes:

```bash
# Clone the repository
git clone <repository-url>
cd cyberself

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser to `http://localhost:8080` and start your assessment!

---

## ✨ Features

### 🎓 Assessment System

- **Adaptive Difficulty Engine** - Questions dynamically adjust based on accuracy and response time
- **30 Curated Questions** - Covering beginner to advanced cybersecurity topics
- **Real-Time Feedback** - Instant explanations for correct and incorrect answers
- **Progress Tracking** - Visual indicators showing completion status
- **Hint System** - Context-aware hints available when needed

### 🏆 Gamification

- **XP System** - Earn experience points for correct answers and fast responses
- **Achievement Badges** - Unlock badges like \"Rising Learner\", \"Security Analyst\", \"Cyber Expert\"
- **Level Progression** - Advance through levels as you accumulate XP
- **Global Leaderboard** - Compare your performance with other learners
- **XP Growth Tracking** - Visual charts showing your progress over time

### 📊 Analytics & Insights

- **Comprehensive Dashboard** - Overview of all assessment results
- **Domain Performance** - Detailed breakdown by cybersecurity domain
- **Skill Tree Visualization** - Interactive tree showing mastered and recommended skills
- **Persona Identification** - AI-driven categorization (e.g., Penetration Tester, Policy Strategist)
- **Personalized Learning Paths** - Customized recommendations based on weaknesses

### 🌍 Multi-Language Support

- Complete UI translation for all content
- Language-specific question banks
- Seamless language switching
- Right-to-left (RTL) support ready

### 📱 User Experience

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode** - Automatic theme detection with manual override
- **Accessible** - WCAG 2.1 compliant with keyboard navigation
- **Progress Snapshots** - Periodic updates during long assessments
- **Export & Share** - Download PDF reports or share achievements

---

## 🌐 Supported Languages

CyberSelf is available in **7 languages** to serve the diverse European Union community:

| Language | Code | Flag | Status |
|----------|------|------|--------|
| **English** | `en` | 🇬🇧 | ✅ Complete |
| **Estonian** | `et` | 🇪🇪 | ✅ Complete |
| **Hungarian** | `hu` | 🇭🇺 | ✅ Complete |
| **Lithuanian** | `lt` | 🇱🇹 | ✅ Complete |
| **Polish** | `pl` | 🇵🇱 | ✅ Complete |
| **Portuguese** | `pt` | 🇵🇹 | ✅ Complete |
| **Slovak** | `sk` | 🇸🇰 | ✅ Complete |
| **Slovenian** | `sl` | 🇸🇮 | ✅ Complete |

All translations include:
- ✅ Complete UI/UX text
- ✅ All 30 assessment questions with answers
- ✅ Hints and explanations
- ✅ Dashboard and results pages
- ✅ Error messages and feedback

---

## 📦 Installation

### Prerequisites

- **Node.js** version 18.x or higher
- **npm** version 9.x or higher (or **yarn** 1.22.x+)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd cyberself
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional)
   
   Create a `.env` file if you need custom configuration:
   ```env
   VITE_APP_NAME=CyberSelf
   VITE_DEFAULT_LANGUAGE=en
   ```

4. **Verify Installation**
   ```bash
   npm run dev
   ```
   
   Expected output:
   ```
   VITE v5.x.x  ready in xxx ms

   ➜  Local:   http://localhost:8080/
   ➜  Network: use --host to expose
   ```

### Production Build

To create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 💡 Usage

### Getting Started

1. **Launch the Application**
   - Navigate to the landing page
   - Choose your preferred language from the top-right selector
   - Click \"Start Assessment\" to begin

2. **Registration** (No Account Required)
   - Enter a nickname (stored locally only)
   - Select assessment domains you want to focus on:
     - ✅ Cyber Hygiene
     - ✅ Network Security
     - ✅ Secure Software Development
   - Minimum 1 domain required, maximum 3 domains

3. **Take the Assessment**
   - Read each question carefully
   - Select your answer from multiple choices
   - Use the hint button (💡) if you need help
   - Submit your answer and view instant feedback
   - Continue through all questions (10 per domain)

4. **Review Your Results**
   - View your overall score and domain breakdown
   - See your assigned persona based on performance
   - Explore your personalized skill tree
   - Check the leaderboard ranking
   - Download your progress report

5. **Dashboard Features**
   - **Overview Panel** - Total XP, score, and badges earned
   - **Gamification Panel** - Level progress and XP growth chart
   - **Skill Tree Panel** - Visual representation of mastered skills
   - **Persona Panel** - Your cybersecurity profile with strengths/weaknesses
   - **Recommendations Panel** - Personalized learning resources
   - **Leaderboard Panel** - Global ranking comparison
   - **Export Panel** - Download reports or share achievements

---

## 🎬 Demo Flow

### Expected User Journey

**Phase 1: Welcome & Setup** (1-2 minutes)
```
Landing Page → Language Selection → Registration → Domain Selection
```

**Phase 2: Assessment** (10-15 minutes)
```
Introduction → Questions (adaptive) → Progress Snapshots → Completion
```

**Phase 3: Results & Dashboard** (5-10 minutes)
```
Results Summary → Dashboard Exploration → Skill Tree Review → Leaderboard Check
```

### Success Criteria

✅ User completes registration without errors  
✅ Questions adapt based on performance (easier after wrong answers, harder after correct)  
✅ Progress snapshots appear every 3-5 questions  
✅ Final score calculated correctly (domain accuracy + XP)  
✅ Persona assigned matches performance profile  
✅ Dashboard loads all panels without errors  
✅ Language switching works on all pages  
✅ Export functionality generates shareable content  

### Sample Test Scenario

```
1. Select English language
2. Register with nickname \"TestUser\"
3. Choose all 3 domains
4. Answer 5 questions correctly → Difficulty increases
5. Answer 3 questions incorrectly → Difficulty decreases
6. Complete all 30 questions
7. Expected Results:
   - Overall score: 60-80%
   - Assigned persona: \"Security Analyst\" or \"Generalist\"
   - XP earned: 150-250 points
   - Badges: \"Rising Learner\", possibly \"Security Analyst\"
   - Level: 2-3
```

---

## 🏗️ Technical Details

### Architecture

**Frontend Framework**
- React 18.3+ with TypeScript
- Vite for fast development and optimized builds
- React Router for client-side navigation

**Styling**
- Tailwind CSS for utility-first styling
- Custom design system with semantic tokens
- shadcn/ui component library
- Responsive design with mobile-first approach

**State Management**
- React Context API for global state (language, theme)
- Local storage for persistent data
- Session-based progress tracking

**Key Technologies**
- **TypeScript** - Type-safe development
- **Lucide React** - Beautiful icon library
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **Date-fns** - Date manipulation

### Project Structure

```
cyberself/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui base components
│   │   ├── dashboard/      # Dashboard-specific panels
│   │   ├── LanguageSelector.tsx
│   │   ├── Navigation.tsx
│   │   ├── SkillTree.tsx
│   │   └── ...
│   ├── pages/              # Route-level components
│   │   ├── Landing.tsx
│   │   ├── Register.tsx
│   │   ├── Assessment.tsx
│   │   ├── Results.tsx
│   │   └── Dashboard.tsx
│   ├── contexts/           # React context providers
│   │   └── LanguageContext.tsx
│   ├── data/               # Static data
│   │   ├── domains.ts      # Cybersecurity domains
│   │   └── questions.ts    # Assessment questions
│   ├── i18n/               # Internationalization
│   │   └── translations.ts # All language translations
│   ├── types/              # TypeScript definitions
│   │   ├── assessment.ts
│   │   └── persona.ts
│   ├── utils/              # Helper functions
│   │   ├── adaptiveEngine.ts
│   │   └── skillTreeGenerator.ts
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles & design tokens
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts
```

### Data Flow

```
Landing Page → Registration → Domain Selection → Assessment Intro
                                                        ↓
                                              Question Loop ←→ Adaptive Engine
                                                        ↓
                                              Calculate Results
                                                        ↓
                                              Results Page → Dashboard
```

### Adaptive Algorithm

The assessment uses a real-time adaptive algorithm:

```typescript
// Simplified logic
if (accuracy >= 80% && avgTime < 15s) {
  difficulty = 'advanced';
} else if (accuracy >= 50%) {
  difficulty = 'intermediate';
} else {
  difficulty = 'beginner';
}
```

Factors considered:
- **Accuracy** - Percentage of correct answers
- **Response Time** - Average time per question
- **Consecutive Errors** - Recent performance trends
- **Domain Strength** - Performance in specific topics

### Persona Assignment

Based on domain scores, users are assigned one of 6 personas:

| Persona | Characteristics |
|---------|----------------|
| **Penetration Tester** | High network security, strong in vulnerability testing |
| **Policy Strategist** | Excellent cyber hygiene, governance focus |
| **Cloud Defender** | Strong infrastructure knowledge |
| **Incident Responder** | Quick response time, threat detection skills |
| **Security Architect** | Balanced skills, architectural thinking |
| **Generalist** | Well-rounded across all domains |

### Security & Privacy

🔒 **Privacy-First Design**
- No backend server - fully client-side application
- No personal data collected (email, phone, etc.)
- All data stored in browser's localStorage
- No analytics or tracking scripts
- No cookies or third-party integrations

🛡️ **Data Storage**
```javascript
localStorage.setItem('cyberself_session', JSON.stringify({
  nickname: 'string',        // User-chosen nickname
  selectedDomains: [],       // Assessment preferences
  responses: [],             // Question responses
  totalXP: number,          // Earned experience points
  timestamp: Date           // Session creation time
}));
```

🔐 **Content Security**
- All questions and answers are static content
- No SQL injection or XSS vulnerabilities (no backend)
- CSP headers recommended for production deployment

---

## 🔧 Troubleshooting

### Common Issues

#### Issue: Application won't start

**Symptoms:**
```
Error: Cannot find module 'vite'
```

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

#### Issue: Language not switching

**Symptoms:**
- Selected language but UI still shows English
- Some text translated, some not

**Solution:**
1. Check browser console for errors
2. Clear localStorage: `localStorage.clear()`
3. Refresh the page (Ctrl+F5 / Cmd+Shift+R)
4. Verify the language context is properly wrapped:
   ```tsx
   <LanguageProvider>
     <App />
   </LanguageProvider>
   ```

---

#### Issue: Questions not loading

**Symptoms:**
- Assessment page shows empty or loading indefinitely
- Console error: \"Cannot read property 'questions' of undefined\"

**Solution:**
1. Verify domain selection in localStorage
2. Check `src/data/questions.ts` exists and exports correctly
3. Ensure selected domains have question sets:
   ```javascript
   // Check in console
   console.log(localStorage.getItem('cyberself_session'));
   ```

---

#### Issue: Dashboard not showing data

**Symptoms:**
- Dashboard panels are empty
- No XP or scores displayed

**Solution:**
1. Complete at least one full assessment
2. Check session storage:
   ```javascript
   const session = JSON.parse(localStorage.getItem('cyberself_session'));
   console.log(session.responses); // Should have array of answers
   ```
3. Navigate to `/dashboard` after completing assessment

---

#### Issue: Build fails in production

**Symptoms:**
```
Error: Failed to resolve entry for package \"X\"
```

**Solution:**
```bash
# Update dependencies
npm update

# Clear cache
npm cache clean --force

# Rebuild
npm run build
```

---

#### Issue: TypeScript errors

**Symptoms:**
- Red squiggly lines in IDE
- Type errors during development

**Solution:**
```bash
# Restart TypeScript server (VS Code)
Cmd+Shift+P → \"TypeScript: Restart TS Server\"

# Or rebuild type definitions
npm run build
```

---

#### Issue: Styles not applying

**Symptoms:**
- Components look unstyled or broken
- Tailwind classes not working

**Solution:**
1. Verify `tailwind.config.ts` includes all content paths:
   ```typescript
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ]
   ```
2. Restart dev server
3. Check browser dev tools for CSS loading errors

---

### Performance Issues

If the application feels slow:

1. **Clear Browser Cache**
   - Chrome: Settings → Privacy → Clear browsing data
   - Firefox: Settings → Privacy → Clear Data

2. **Check Network Tab**
   - Look for failed requests
   - Verify all assets load successfully

3. **Reduce Concurrent Processes**
   - Close other applications
   - Close unused browser tabs

4. **Update Browser**
   - Use latest version of Chrome, Firefox, or Edge
   - Enable hardware acceleration

---

### Browser Compatibility

**Supported Browsers:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Not Supported:**
- ❌ Internet Explorer (any version)
- ❌ Opera Mini
- ❌ UC Browser

---

### Getting Help

If you encounter issues not covered here:

1. **Check Console Logs**
   - Open browser DevTools (F12)
   - Look for error messages in Console tab
   - Note the exact error text

2. **Verify Environment**
   ```bash
   node --version  # Should be 18.x or higher
   npm --version   # Should be 9.x or higher
   ```

3. **Test in Incognito Mode**
   - Eliminates browser extension conflicts
   - Fresh localStorage state

4. **Report Issues**
   - Include browser version
   - Include error messages
   - Describe steps to reproduce

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding New Languages

1. Add translations to `src/i18n/translations.ts`:
   ```typescript
   export const translations = {
     // ... existing languages
     de: {  // German example
       welcome: \"Willkommen\",
       // ... all translation keys
     }
   };
   ```

2. Update language selector in `src/components/LanguageSelector.tsx`

3. Add questions in `src/data/questions.ts`

4. Test thoroughly across all pages

### Adding New Questions

1. Open `src/data/questions.ts`
2. Add question following the existing format:
   ```typescript
   {
     id: 'new-question-id',
     domain: 'cyber-hygiene',
     difficulty: 'intermediate',
     text: {
       en: \"Question text\",
       // ... all languages
     },
     options: {
       en: [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"],
       // ... all languages
     },
     correctAnswer: 0,
     explanation: {
       en: \"Why this is correct...\",
       // ... all languages
     }
   }
   ```

### Code Style

- Use TypeScript for type safety
- Follow existing naming conventions
- Add comments for complex logic
- Test across all supported languages
- Ensure responsive design on mobile

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ENISA** - European Union Agency for Cybersecurity for domain inspiration
- **shadcn/ui** - Beautiful component library
- **Lucide** - Icon system
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing framework
- **EU Community** - For multi-language requirements and testing

---

## 📞 Support

For questions, issues, or feedback:

- 📧 Email: support@cyberself.example.com
- 💬 Discord: [Join our community](#)
- 📝 Documentation: [docs.cyberself.example.com](#)
- 🐛 Bug Reports: [GitHub Issues](#)

---

## 🗺️ Roadmap

### Version 2.0 (Planned)

- [ ] Real-time multiplayer assessments
- [ ] Advanced analytics dashboard
- [ ] Certificate generation
- [ ] Mobile native apps (iOS/Android)
- [ ] Integration with corporate LMS platforms
- [ ] AI-powered chatbot for learning assistance
- [ ] Video tutorials for each topic
- [ ] Custom question sets for organizations
- [ ] Team assessment features
- [ ] More language support (Spanish, French, German, etc.)

---

<div align="center">

**Made with ❤️ for a safer digital world**

[⬆ Back to Top](#-cyberself---adaptive-cybersecurity-skills-assessment-platform)

</div>
