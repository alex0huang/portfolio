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
      github: "https://github.com/alex0huang/District-Cover-Underwriting-Copilot"
    }
  },

  {
    title: "Course Planning AI Agent",
    tech: ["Python", "LangChain", "RAG", "Vector Search", "OpenAI API", "FastAPI"],
    description:
      "AI-powered academic planning assistant designed to streamline the course planning workflow for SCU students. Instead of switching between degree progress pages, course search tabs, professor research pages, and manual schedule planning tools, students can ask the agent course-related questions and receive retrieved course information with prerequisite-aware guidance.",
    bullets: [
      "Built an AI-powered academic planning assistant to consolidate progress review, course lookup, prerequisite checks, and schedule planning into a single workflow",
      "Implemented retrieval-augmented generation over PDF course documents using embeddings and vector search for accurate course information retrieval",
      "Developed a prerequisite-checking tool integrated into a LangChain agent workflow to reason about course eligibility constraints",
      "Used a zero-shot ReAct-style agent to automatically select between retrieval and prerequisite tools based on student questions",
      "Designed the system for future support of full degree planning, multi-school catalogs, professor data integration, and web-based course updates"
    ],
    links: {
      github: "https://github.com/CSEN-SCU/csen-174-s26-team-project-course-planner/tree/main/prototypes/student-template",
      youtube: "",
      live: ""
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

