# AI Engineer Portfolio

Production-grade portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed to land senior AI engineering and cloud architecture roles.

## ✨ Features

- **8-page portfolio** — Home, About, Projects, Skills, Certifications, Resume, Blog, Contact
- **AI Chatbot** — Streaming OpenAI-powered assistant trained on your experience
- **12 project case studies** — Enterprise-level architecture and impact documentation
- **Responsive dark design** — Premium glassmorphism aesthetic with custom animations
- **SEO optimized** — Full metadata, OpenGraph, structured data
- **Performance optimized** — Vercel-ready, static where possible

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/ai-engineer-portfolio
cd ai-engineer-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# 4. Run development server
npm run dev
# Visit http://localhost:3000
```

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# OPENAI_API_KEY = your key
```

Or click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🔧 Personalization

### 1. Update your personal info
Edit `data/index.ts` — name, email, GitHub, LinkedIn, projects, experience.

### 2. Add your headshot
Replace the placeholder in `app/about/page.tsx` with an `<Image>` component.

### 3. Update the AI chatbot
Edit the `SYSTEM_PROMPT` in `app/api/chat/route.ts` with your actual experience.

### 4. Add your resume PDF
Place `resume.pdf` in the `/public` directory.

## 📁 Project Structure

```
/app
  /about          — About page
  /projects       — Project case studies
  /skills         — Skills with progress bars
  /certifications — Cert showcase + roadmap
  /resume         — Resume page + download
  /blog           — Blog posts list
  /contact        — Contact form
  /api/chat       — AI chatbot streaming API
  layout.tsx      — Root layout + metadata
  page.tsx        — Homepage
  globals.css     — Design tokens + global styles

/components
  /layout
    Nav.tsx       — Navigation
    Footer.tsx    — Footer
  /ui
    AIChat.tsx    — AI assistant widget

/data
  index.ts        — All content (projects, skills, experience)
```

## 🤖 AI Chatbot Setup

The chatbot uses OpenAI's `gpt-4-turbo-preview` with streaming responses.

1. Get an API key from [platform.openai.com](https://platform.openai.com)
2. Add to `.env.local`: `OPENAI_API_KEY=sk-...`
3. Customize the system prompt in `app/api/chat/route.ts`

Cost: ~$0.02–0.05 per conversation with GPT-4 Turbo.

## 🎨 Design Customization

CSS variables in `app/globals.css`:
```css
--accent: #6ee7f7;      /* Primary accent color */
--bg-primary: #080810;   /* Main background */
--font-display: 'Syne';  /* Heading font */
--font-body: 'Geist';    /* Body font */
```

## 📈 Recruiter Optimization Tips

1. **Update all placeholder content** in `data/index.ts` with real projects
2. **Add real metrics** — recruiters respond to specific numbers
3. **Deploy on a custom domain** — yourname.com looks more professional
4. **Enable the AI chatbot** — it's a differentiator that impresses technical interviewers
5. **Write 2-3 real blog posts** — shows thought leadership
6. **Add a real headshot** — human connection matters

## 🔮 Roadmap

- [ ] GitHub API integration (live commit stats)
- [ ] Framer Motion page transitions
- [ ] Command palette (⌘K) navigation
- [ ] Dark/light mode toggle
- [ ] Blog with MDX support
- [ ] Analytics integration (Plausible/Vercel)

## 📄 License

MIT — free to use, modify, and deploy.
