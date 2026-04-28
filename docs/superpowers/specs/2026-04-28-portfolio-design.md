# Portfolio Website Spec (Jiasheng Huang)

Date: 2026-04-28  
Stack: Next.js (App Router) + TypeScript + Tailwind CSS  
Design direction: Single-column narrative + Dark default + Slate/Cyan accent + Strong project cards

## Goal

Build a clean, professional personal portfolio website optimized for software engineering / AI & ML internship recruiting.

Success means:
- Recruiter-friendly scanning (clear hierarchy, fast to understand, minimal fluff)
- Responsive on desktop/mobile
- Dark mode by default
- Smooth scrolling between sections
- Subtle animations only (no flashy effects)
- Deployed to Vercel with no extra setup (no backend, no paid APIs)
- Content is centralized in reusable data arrays for easy future edits

## Audience

- Primary: recruiters and engineers reviewing internship candidates
- Secondary: peers and collaborators

## Information Architecture (Single Page)

Single page at `/` with anchored section navigation.

Sections in order:
1. Hero
2. Featured Projects
3. About
4. Skills
5. Resume
6. Contact
7. Footer

Navbar anchor targets:
- `#projects`
- `#about`
- `#skills`
- `#resume`
- `#contact`

## Content Requirements

### Hero
- Name: Jiasheng Huang
- Headline: Building AI Agents and Scalable Software Systems
- Intro: Computer Science and Engineering student at Santa Clara University focused on AI agents, RAG systems, and full-stack development.
- Buttons:
  - View Projects (scroll to `#projects`)
  - Resume (link to `/resume.pdf`)
  - GitHub (placeholder)
  - LinkedIn (placeholder)

### About
- CSE junior at Santa Clara University
- Interested in AI agents, retrieval-augmented generation, machine learning, and full-stack software engineering
- Looking for software engineering / AI / ML internship opportunities

### Featured Projects

Render as 3 strong cards with consistent structure:
- Title
- Tech stack (badges)
- Description
- Highlights (bullets)

**Project 1: Course Planning AI Agent**
- Tech: Python, LangChain, RAG, Vector Search, OpenAI API, FastAPI
- Description: Built an AI-powered academic planning assistant that retrieves information from university course documents and helps students reason about course selection and prerequisite constraints.
- Bullets:
  - Implemented retrieval-augmented generation over PDF course documents using embeddings and vector search
  - Built a prerequisite-checking tool integrated into an agent workflow
  - Used a zero-shot ReAct-style agent to automatically select tools based on user questions
  - Designed the system for future support of degree planning, multi-school catalogs, and web-based updates

**Project 2: Full-Stack Web Application**
- Tech: React, Node.js, Express, SQL, Git
- Description: Developed a full-stack application with a responsive frontend, backend API routes, and database-backed user interactions.
- Bullets:
  - Built reusable frontend components and responsive layouts
  - Designed REST-style backend endpoints
  - Connected application data to a relational database
  - Practiced version control and iterative feature development

**Project 3: Machine Learning Experiments**
- Tech: Python, PyTorch, Scikit-learn, Pandas, NumPy
- Description: Applied machine learning techniques including regression, classification, clustering, feature engineering, and model evaluation.
- Bullets:
  - Trained and evaluated models using standard ML workflows
  - Performed data preprocessing and feature selection
  - Compared model performance using appropriate metrics
  - Built a foundation for future applied ML projects

### Skills

Organize into categories and render as grouped badges/tags:
- Languages: Python, Java, C++, SQL, JavaScript, TypeScript, HTML, CSS
- AI/ML: PyTorch, Scikit-learn, Pandas, NumPy, LangChain, RAG, Vector Search
- Web: React, Next.js, Node.js, Express, FastAPI, Tailwind CSS
- Tools: Git, GitHub, Docker, Linux/Unix, AWS, Vercel, VS Code, Cursor

### Resume
- Section with a button labeled “Download Resume”
- Assumes file located at `/public/resume.pdf` and accessible via `/resume.pdf`

### Contact
- Easy-to-edit placeholders:
  - Email: `your-email@example.com`
  - GitHub: `https://github.com/yourusername`
  - LinkedIn: `https://linkedin.com/in/yourusername`

## Visual Design System

### Theme
- Dark mode default
- Palette:
  - Background: near `slate-950`
  - Surfaces: `slate-900`/`slate-800` layering
  - Text: high contrast slate/white
  - Accent: Cyan for links, primary button, focus rings, subtle borders

### Typography & Layout
- Clean modern sans (e.g. Geist or Inter via next/font)
- Max content width ~960–1100px, comfortable line-height
- Strong, consistent vertical rhythm (section spacing) to avoid “empty” feel

### Projects Card Style (Strong Cards)
- Card composition: border + surface background + very subtle shadow
- Hover: slight translate/raise + border/accent tweak (subtle)
- Content inside card uses consistent hierarchy for fast scanning

### Motion (Subtle Only)
- Smooth scrolling for anchor navigation
- Section reveal animation (fade-in + slight upward motion) with reduced-motion support
- Button and card hover transitions only; avoid flashy effects

## Accessibility & Interaction Details

- Semantic HTML: `header`, `nav`, `main`, `section`, `footer`
- Keyboard support and visible focus styles (`focus-visible`)
- `aria-label` for icon-only links/buttons
- Honor `prefers-reduced-motion`
- Anchor scroll offset so fixed navbar doesn’t cover section headings:
  - Use global `scroll-padding-top` and/or per-section `scroll-margin-top`
- Mobile nav: collapsible menu; closes on selection; prevents background scroll when open

## SEO / Metadata

- `app/layout.tsx` sets `metadata`: title + description
- Basic Open Graph / Twitter metadata with placeholders (optional `public/og.png` later)
- Default site language for recruiting: English (content in English)

## Implementation Plan (High-Level, for Next Step)

File structure recommendation:
- `app/layout.tsx`, `app/page.tsx`
- `components/`: `Navbar`, `Hero`, `Projects`, `About`, `Skills`, `Resume`, `Contact`, `Footer`
- `content/` (or `data/`): `site.ts`, `projects.ts`, `skills.ts`
- `styles/globals.css` for tailwind + global scroll behavior
- `public/resume.pdf` provided by user

Out of scope for this phase:
- Backend, database, paid APIs
- Blog/CMS
- Heavy animations or flashy visual effects
- Multi-language support (can be added later if desired)

