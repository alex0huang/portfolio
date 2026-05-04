export type Project = {
  title: string;
  tech: string[];
  description: string;
  bullets: string[];
  links?: {
    github?: string;
    youtube?: string;
    live?: string;
  };
};

export const featuredProjects: Project[] = [
  {
    title: "SCU Course Planner",
    tech: ["Python", "Streamlit", "Gemini API", "RateMyProfessor API", "Multi-Agent"],
    description:
      "AI-powered course planning system for SCU students. Upload your Academic Progress export and get personalized next-quarter schedule recommendations with professor ratings and a weekly calendar view — no more switching between Workday, RateMyProfessor, and your transcript.",
    bullets: [
      "Built a multi-agent pipeline that parses SCU Academic Progress exports to identify requirement gaps and generate personalized schedules",
      "Implemented a Gemini-powered planning agent that accepts natural language preferences and recommends courses based on remaining degree requirements",
      "Integrated RateMyProfessor API with parallel thread execution to enrich recommendations with professor ratings, difficulty scores, and would-take-again percentages",
      "Designed an interactive weekly calendar UI in Streamlit that maps course schedules from SCU Find Course Sections data",
      "Architected modular agent structure with roadmap for PDF-based requirement parsing, orchestrator agent, and email automation with human-in-the-loop approval"
    ],
    links: {
      github: "https://github.com/CSEN-SCU/csen-174-s26-team-project-course-planner/",
      youtube: "https://www.youtube.com/watch?v=EqVv-q5eWN8",  
      live: ""
    }
  },

  {
    title: "Underwriting Copilot",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Python",
      "FastAPI"
    ],
    description:
      "End-to-end underwriting copilot MVP that streamlines KYB/KYC submission and underwriter review. The system includes a customer-facing submission portal for brokers and business owners, plus a structured underwriter console that organizes submitted business information, documents, missing fields, risk signals, and decision evidence into a single review workflow.",
    bullets: [
      "Built a customer-facing submission portal for brokers and business owners to provide KYB/KYC information and upload supporting documents",
      "Developed a structured underwriter console that consolidates submitted data, uploaded documents, missing information, and reviewer notes into a single case view",
      "Reduced manual email and attachment tracking by turning fragmented broker/business-owner submissions into organized underwriting cases",
      "Designed missing-information indicators and evidence-based review sections to help underwriters triage cases and make faster decisions",
      "Created a deploy-ready MVP with sanitized seed data and a Vercel-based demo setup for fast public walkthroughs"
    ],
    links: {
      github: "https://github.com/cicidi/hackathon-district-cover"
    }
  },

  {
    title: "Fitness Tracker (Full-Stack Web App)",
    tech: [
      "React",
      "React Router",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "SQL",
      "Git",
      "Vercel",
      "Render",
      "Neon"
    ],
    description:
      "Built a full-stack nutrition and meal tracking web app to replace ad-heavy free fitness apps and streamline my personal daily diet tracking workflow. The app provides a responsive React UI, JWT-authenticated REST API, PostgreSQL persistence, daily macro tracking, date-based filtering, and end-to-end deployment on Vercel, Render, and Neon.",
    bullets: [
      "Built a personalized meal logging and macro tracking system that reduced manual diet tracking time by ~50% compared with using ad-supported free apps",
      "Developed reusable React components and responsive layouts for meal entry, daily macro summaries, and progress-oriented dashboards",
      "Designed REST-style Express API endpoints with JWT authentication, protected routes, and user-specific data access",
      "Modeled relational PostgreSQL tables for users, meal entries, and nutrition data, using SQL queries for persistent tracking and daily summaries",
      "Implemented timezone-safe date filtering with UTC storage and local-date UX to ensure accurate daily nutrition records",
      "Improved production reliability with request timeout handling and retry logic for Render cold-start scenarios"
    ],
    links: {
      github: "https://github.com/alex0huang/fitness",
      youtube: "",
      live: "https://fitness-eight-mocha.vercel.app/"
    }
  },
  
  {
    title: "Face Recognition with ResNet and Vision Transformer",
    tech: ["Python", "PyTorch", "ResNet", "Vision Transformer", "Computer Vision"],
    description:
      "Developed a face recognition system using CNN and transformer architectures to study deep visual representation learning.",
    bullets: [
      "Developed face recognition pipelines using ResNet and Vision Transformer models in PyTorch",
      "Processed facial image datasets and implemented training workflows for supervised recognition tasks",
      "Benchmarked CNN and transformer architectures through comparative performance evaluation",
      "Applied transfer learning and deep feature extraction techniques for computer vision tasks"
    ],
    links: {
      github: "https://github.com/alex0huang/face-recongnition-with-resnet-vision-transformer",
    }
  },
  {
    title: "Personal Portfolio Website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "Modern, recruiter-friendly portfolio built with a clean single-page layout, reusable content data, and strong project cards.",
    bullets: [
      "Built with Next.js App Router + TypeScript + Tailwind CSS",
      "Content is centralized in data files for quick edits (projects, skills, links)",
      "Responsive layout with accessible navigation and subtle interactions",
      "Designed for fast deploys on Vercel with no backend"
    ],
    links: {
      github: "https://github.com/alex0huang/portfolio"
    }
  }
];

