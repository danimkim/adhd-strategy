# ADHD Strategy

A practical guide and interactive toolkit for ADHD developers to overcome project paralysis and build sustainable momentum.

## 🎯 Overview

**ADHD Dev Strategy** is a web-based resource designed to help developers with ADHD (or similar executive function challenges) complete their projects. It combines research-backed psychological strategies, behavioral techniques, and structured execution systems into an actionable guide.

### The Problem

Many ADHD developers experience a familiar pattern:
- ✅ Start projects with excitement and momentum
- ✅ Build initial features successfully  
- ❌ Hit a wall when repetitive work begins
- ❌ Struggle to restart after interruptions
- ❌ Project remains incomplete despite effort

This isn't a character flaw—it's how ADHD brains are wired. With the right system, you can finish your projects.

## 🚀 Features

### 📚 Four Core Strategies
1. **Psychological Strategy** - Reframe failure as debugging, not shame
2. **Behavioral Strategy** - Design work to match how your brain actually works
3. **Environment Design** - Create sensory anchors that trigger focus instantly
4. **Execution System** - Structured daily routines that work WITH your ADHD brain

### 🌍 Multi-Language Support
- English
- Korean (한국어)
- Language switcher in navigation bar
- Persistent language preference (localStorage)

### ✅ Interactive Features
- Execution plan with 6-week roadmap
- Daily routine template
- Weekly retro checklist
- Energy log tracker
- Interactive task checklist with progress tracking

### 🎨 Design
- Responsive design (mobile, tablet, desktop)
- Professional typography (Poppins + Inter)
- High-quality custom illustrations
- Accessible UI components (shadcn/ui)

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Routing**: Wouter
- **Internationalization**: i18next
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
adhd-dev-strategy/
├── client/
│   ├── public/
│   │   ├── locales/
│   │   │   ├── en/translation.json      # English translations
│   │   │   └── ko/translation.json      # Korean translations
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── LanguageSwitcher.tsx     # Language toggle
│   │   │   ├── InteractiveChecklist.tsx # Task tracker
│   │   │   └── ui/                      # shadcn/ui components
│   │   ├── i18n/
│   │   │   └── config.ts                # i18next configuration
│   │   ├── pages/
│   │   │   ├── Home.tsx                 # Main strategy guide
│   │   │   └── ExecutionPlan.tsx        # 6-week roadmap
│   │   ├── App.tsx                      # Router & layout
│   │   ├── main.tsx                     # Entry point
│   │   └── index.css                    # Global styles
│   └── package.json
├── server/
│   └── index.ts                         # Express server (static)
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The app will be available at `http://localhost:3000`

## 🌐 Internationalization (i18n)

The site supports multiple languages with automatic detection and manual switching.

### Adding a New Language

1. Create translation file: `client/public/locales/[lang]/translation.json`
2. Add language to i18n config: `client/src/i18n/config.ts`
3. Update LanguageSwitcher component if needed

Example structure for new language:
```json
{
  "nav": {
    "title": "ADHD Dev Strategy",
    "strategies": "Strategies",
    "execution": "Execution"
  },
  // ... rest of translations
}
```

## 📖 Content Sections

### Home Page (`/`)
- Hero section with value proposition
- Problem diagnosis (4 ADHD-related challenges)
- 4 core strategies with detailed explanations
- FAQ section
- Call-to-action

### Execution Plan Page (`/execution-plan`)
- 6-week structured roadmap
- Phase 1: Foundation (Week 1)
- Phase 2: Execution (Weeks 2-6)
- Daily routine template
- Weekly retro checklist
- Energy log tracker
- Interactive task checklist

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Accent**: Amber (#f59e0b)
- **Background**: Light slate (#f8fafc)
- **Text**: Dark slate (#1e293b)

### Typography
- **Display**: Poppins (bold, headings)
- **Body**: Inter (regular, content)

### Components
All UI components from shadcn/ui with custom styling via Tailwind CSS.

## 🔒 Security

- No hardcoded secrets or API keys
- Environment variables properly configured
- `.gitignore` includes all sensitive files
- Safe for public GitHub repository

## 📝 License

MIT License - Feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional language translations
- More strategy examples
- Community success stories
- Enhanced tracking features

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🙏 Acknowledgments

This guide is based on research-backed strategies for ADHD and executive function challenges. It combines insights from:
- ADHD psychology research
- Productivity systems (GTD, Pomodoro, Kanban)
- Developer community experiences
- Behavioral science principles
