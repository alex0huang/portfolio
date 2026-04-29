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
    title: "Course Planning AI Agent",
    tech: ["Python", "LangChain", "RAG", "Vector Search", "OpenAI API", "FastAPI"],
    description:
      "AI-powered academic planning assistant that retrieves course information and helps students reason about selection and prerequisite constraints.",
    bullets: [
      "Implemented retrieval-augmented generation over PDF course documents using embeddings and vector search",
      "Built a prerequisite-checking tool integrated into an agent workflow",
      "Used a zero-shot ReAct-style agent to automatically select tools based on user questions",
      "Designed the system for future support of degree planning, multi-school catalogs, and web-based updates"
    ],
    links: {
      github: "",
      youtube: "",
      live: ""
    }
  },
  {
    title: "Full-Stack Web Application",
    tech: ["React", "Node.js", "Express", "SQL", "Git"],
    description:
      "Full-stack application with a responsive frontend, backend API routes, and database-backed user interactions.",
    bullets: [
      "Built reusable frontend components and responsive layouts",
      "Designed REST-style backend endpoints",
      "Connected application data to a relational database",
      "Practiced version control and iterative feature development"
    ],
    links: {
      github: "",
      youtube: "",
      live: "https://fitness-eight-mocha.vercel.app/"
    }
  },
  {
    title: "Machine Learning Experiments",
    tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    description:
      "Machine learning experiments across regression, classification, clustering, feature engineering, and model evaluation.",
    bullets: [
      "Trained and evaluated models using standard ML workflows",
      "Performed data preprocessing and feature selection",
      "Compared model performance using appropriate metrics",
      "Built a foundation for future applied ML projects"
    ],
    links: {
      github: "",
      youtube: ""
    }
  }
];

