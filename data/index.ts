import {
  Code,
  Database,
  Globe,
  Server,
  Brain,
  Wrench,
  Layers,
} from "lucide-react";

export const skills = [
  // ML / AI
  { name: "Machine Learning", icon: Brain, level: 95 },
  { name: "Deep Learning", icon: Brain, level: 90 },
  { name: "NLP & LLMs", icon: Brain, level: 95 },
  { name: "RAG & ReAct Agents", icon: Brain, level: 95 },
  { name: "LangChain / LangGraph", icon: Brain, level: 95 },
  { name: "Fine-Tuning", icon: Brain, level: 85 },
  { name: "Scikit-learn", icon: Code, level: 90 },
  { name: "TensorFlow / PyTorch", icon: Brain, level: 85 },
  { name: "FastAPI", icon: Server, level: 90 },
  { name: "n8n", icon: Wrench, level: 85 },
  // Frontend
  { name: "React.js / Next.js", icon: Globe, level: 85 },
  { name: "Streamlit", icon: Globe, level: 90 },
  // Databases & Infra
  { name: "MongoDB / PostgreSQL", icon: Database, level: 85 },
  { name: "Vector DBs (Pinecone, FAISS)", icon: Database, level: 90 },
  { name: "Docker / Kubernetes", icon: Server, level: 80 },
  { name: "AWS", icon: Server, level: 75 },
  { name: "CI/CD", icon: Wrench, level: 80 },
  { name: "Git / GitHub", icon: Layers, level: 90 },
];

export const projects = [
  {
    title: "AI Co-Browser — Portfolio Assistant",
    description:
      "A full-stack AI-powered portfolio website with a co-browsing chat assistant. The chatbot can navigate the page, highlight elements, and answer questions about projects, skills, and experience using OpenAI's GPT model with function calling for co-browsing tools.",
    tech: ["React", "Vite", "TailwindCSS", "Express", "TypeScript", "PostgreSQL", "Drizzle ORM", "OpenAI GPT", "Radix UI"],
    github: "https://github.com/ayusingh-54/AI-Co-Browser",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Vizzy Chat",
    description:
      "A premium AI-powered conversational creative platform built for Deckoviz. Provides a single conversational interface where users can create, transform, iterate, and deploy visual, narrative, and experiential content. Powered by OpenAI's GPT-4o and DALL-E 3 models, orchestrated through a LangChain + LangGraph state machine pipeline with a polished Streamlit chat UI.",
    tech: ["OpenAI GPT-4o", "DALL-E 3", "LangChain", "LangGraph", "Streamlit", "Python"],
    github: "https://github.com/ayusingh-54/A-premium-AI-powered-conversational-creative-platform",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "RAG Knowledge Quest",
    description:
      "A production-ready Retrieval-Augmented Generation (RAG) chatbot specializing in human nutrition knowledge. Built from scratch with modern web technologies, processes PDF documents and enables intelligent Q&A through semantic search and large language model integration.",
    tech: ["RAG", "LLM", "Semantic Search", "PDF Processing", "Next.js", "TypeScript"],
    github: "https://github.com/ayusingh-54/Production-Rag-System-",
    live: "https://production-rag-system.vercel.app/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Grow My Therapy — Dr. Maya Reynolds",
    description:
      "A modern, responsive therapist portfolio website built as a Stage 2 Internship Selection Project. Redesigns a Squarespace Lilac template into a fully custom React application for Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California.",
    tech: ["React", "TypeScript", "TailwindCSS", "Responsive Design", "Vercel"],
    github: "https://github.com/ayusingh-54/Grow-My-Therapy-Dr.-Maya-Reynolds-PsyD",
    live: "https://grow-my-therapy-dr-maya-reynolds-ps.vercel.app/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "100 Days – 100 AI Agents Challenge",
    description:
      "Built 100+ AI agents using LangChain, LangGraph, and AutoGen to solve real-world problems across customer support, research, sales, and automation. Developed RAG and multi-agent AI systems with vector databases (Pinecone, FAISS) and Streamlit frontends for interactive, production-ready demos. Integrated external APIs (Instagram, Google Maps, DuckDuckGo, Apify) to enrich AI agents with live data for lead generation, web research, and automated communication.",
    tech: ["LangChain", "LangGraph", "AutoGen", "Streamlit", "Pinecone", "FAISS", "ChromaDB", "Python", "OpenAI"],
    github: "https://github.com/ayusingh-54/100-Days-100-AI-AGENTS-",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "CodeForge-AI",
    description:
      "Built a framework-free autonomous coding agent using the ReAct methodology, enabling multi-step reasoning, tool execution, and self-correcting workflows. Reduced developer task execution time from ~30 minutes to ~30 seconds using natural-language-driven automation. Designed a context-aware, secure AI system with workspace memory, tool orchestration, and safety guardrails for real-world coding tasks.",
    tech: ["Python", "OpenAI GPT-4o", "ReAct", "Rich CLI", "Async IO", "MCP"],
    github: "https://github.com/ayusingh-54",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Kisan Mitra",
    description:
      "End-to-end AI-driven crop yield prediction platform (React + Python backend) integrating ML models with weather and soil APIs, achieving 89% prediction accuracy. Features AI-powered chatbot for real-time query resolution in regional languages.",
    tech: ["React", "Python", "Pandas", "NumPy", "Scikit-learn", "ML"],
    github: "https://github.com/ayusingh-54/SIH_frontend",
    live: "https://sih-frontend-virid.vercel.app/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Vehicle Insurance MLOps Pipeline",
    description:
      "Automated MLOps data pipeline for vehicle insurance prediction using Python, Jupyter Notebook, and Docker. Implemented scalable cloud storage, continuous data ingestion, and modular model training workflows with CI/CD integration.",
    tech: ["Python", "Docker", "MLOps", "CI/CD", "Jupyter"],
    github: "https://github.com/ayusingh-54/MLOps-Project---Vehicle-Insurance-Data-Pipeline",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "OmniMind",
    description:
      "100% local AI workspace platform eliminating cloud dependency, reducing inference latency by ~60-70%. Designed end-to-end async data flow with RAG and LLM integration. Built 25+ reusable React components with TypeScript.",
    tech: ["React", "TypeScript", "RAG", "LLM", "WebSocket"],
    github: "https://github.com/ayusingh-54/OmniMind---Comprehensive-Project-Documentation",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Startup Funding Predictor",
    description:
      "Machine learning regression model to predict startup funding amounts with 84% R² score. Processed and analyzed 2,900+ Indian startup records (2018-2020), achieving 30% faster insight extraction through optimized EDA.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "Streamlit"],
    github: "https://github.com/ayusingh-54/Startup-Analysis",
    live: "https://startup-analysis-ayush-singh.streamlit.app/",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
];

export const experience = [
  {
    title: "Full Stack AI Engineer",
    company: "Tycho Technologies",
    period: "August 2025 - December 2025",
    location: "Remote",
    description:
      "Building end-to-end RAG systems and developing agentic RAG solutions for test monitoring and quality assurance automation.",
    achievements: [
      "Developing end-to-end RAG systems for intelligent document retrieval and question answering",
      "Building agentic RAG pipelines for automated test monitoring and anomaly detection",
      "Implementing full-stack AI solutions with modern web technologies and LLM integrations",
    ],
  },
  {
    title: "AI Engineer Intern",
    company: "U2xAI",
    period: "January 2024 - Present",
    location: "New Jersey, United States (Remote)",
    description:
      "Developing a data-first, AI-driven supply chain intelligence platform by integrating retail POS, distributor, and inventory data to deliver real-time insights and decision support.",
    achievements: [
      "Designing BigQuery-based analytics pipelines to preprocess large-scale operational data and compute inventory health, demand forecasts, and incentive metrics for AI consumption",
      "Designing MCP-based tool interfaces to expose structured supply chain metrics, enabling LLM-driven reasoning, explainability, and action recommendations",
      "Collaborating on frontend architecture to surface high-priority AI insights and notifications, minimizing manual data entry and improving product adoption",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "HapScale Pvt Ltd",
    period: "August 2024 - January 2025",
    location: "Bangalore, India (Remote)",
    description:
      "Spearheaded the development of secure API integrations and automated processes, significantly improving system performance and user experience.",
    achievements: [
      "Spearheaded the development of secure API integrations for seamless data handling, boosting performance by 25%",
      "Automated the password reset process, improving user account security and reducing manual interventions by 99.9%",
      "Optimized the HapScale Landing Page, leading to a 30% increase in user engagement and brand visibility",
      "Developed and enhanced the HapScale Tool, successfully tested on 3,000+ individuals, generating key insights for organizational improvement",
    ],
  },
];

export const achievements = [
  {
    title: "Rise To Top Winner",
    description: "District Level Competition",
    link: "",
  },
  {
    title: "SIH Internal Winner",
    description: "Secured 2nd place among 160+ teams in Smart India Hackathon internal round at MMMUT",
    link: "",
  },
  {
    title: "Hackathon Finalist - Techfest, IIT Bombay",
    description: "Top 0.5% out of 10,000+ applicants in VISIONX AI competition",
    link: "",
  },
];

export const education = {
  degree: "Bachelor of Technology in Information Technology",
  university: "Madan Mohan Malviya University of Technology",
  location: "Gorakhpur, India",
  period: "September 2023 - Present",
};
