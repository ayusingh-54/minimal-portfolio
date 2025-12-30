import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Brain,
  Wrench,
} from "lucide-react";

export const skills = [
  { name: "Python", icon: Code, level: 95 },
  { name: "C++", icon: Code, level: 85 },
  { name: "JavaScript", icon: Code, level: 80 },
  { name: "React", icon: Globe, level: 80 },
  { name: "Machine Learning", icon: Brain, level: 90 },
  { name: "Deep Learning", icon: Brain, level: 85 },
  { name: "LLMs & LangChain", icon: Brain, level: 90 },
  { name: "Scikit-learn", icon: Code, level: 90 },
  { name: "TensorFlow/PyTorch", icon: Brain, level: 85 },
  { name: "Docker", icon: Server, level: 75 },
  { name: "MLOps/CI-CD", icon: Wrench, level: 80 },
  { name: "Git/GitHub", icon: Server, level: 85 },
];

export const projects = [
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
    title: "CodeForge-AI",
    description:
      "AI coding agent using ReAct framework that automates 80% of repetitive developer tasks. Engineered modular architecture with 15+ core components enabling scalable reasoning workflows. Reduced manual debugging effort by 60%.",
    tech: ["Python", "ReAct", "LLM", "AI Agents"],
    github: "https://github.com/ayusingh-54",
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
  {
    title: "100 Days - 100 AI Agents",
    description:
      "Built 8+ AI agents integrating LLMs, multi-agent orchestration, vector databases, and real-world APIs. Implemented multi-agent customer support system with query routing and sentiment analysis, reducing manual support effort by ~60%.",
    tech: ["Python", "LangChain", "LangGraph", "APIs", "AI Agents"],
    github: "https://github.com/ayusingh-54/100-Days-100-AI-AGENTS-",
    live: "",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
];

export const experience = [
  {
    title: "AI Engineer (Part-Time)",
    company: "JaxAI",
    period: "2025 - Present",
    location: "Remote",
    description:
      "Leading AI development initiatives at a cutting-edge startup that merges applied research with cinematic design. Building AI automations, custom agents, and scalable solutions for elite teams and startups.",
    achievements: [
      "Architected and delivered multiple AI-powered products from concept to launch",
      "Developed custom AI agents and automation workflows using LangChain and OpenAI",
      "Collaborated with cross-functional pods (engineering, design, AI) in agile sprints",
      "Implemented explainable AI solutions with traceable decision-making logic",
      "Contributed to open-source projects including '100 Days – 100 AI Agents' initiative",
    ],
  },
  {
    title: "Software Developer",
    company: "HapScale Pvt Ltd",
    period: "Dec 2024 - July 2025",
    location: "Bangalore, India",
    description:
      "Spearheaded the development of secure API integrations and automated processes. Created dynamic dashboards and performed in-depth exploratory data analysis.",
    achievements: [
      "Boosted API performance by 25%",
      "Automated password reset process, reducing manual interventions by 99.9%",
      "Increased user engagement by 30% through landing page optimization",
      "Created 5+ dynamic dashboards using Streamlit and Matplotlib",
      "Reduced reporting time by 35% through automated EDA scripts",
    ],
  },
  {
    title: "Founder",
    company: "UniFoodHub",
    period: "Sept 2024 - Feb 2025",
    location: "Gorakhpur, Uttar Pradesh",
    description:
      "Founded a food delivery platform addressing the gap in meal accessibility for hostel students. Built end-to-end solution with restaurant partnerships, intuitive UI, and secure payment integration.",
    achievements: [
      "Collaborated with 10+ local restaurants, improving meal accessibility by 70%",
      "Designed intuitive ordering interface, reducing order placement time by 40%",
      "Integrated secure payment solutions with MongoDB, reducing query response time by 50%",
      "Generated ₹30,000+ in revenue by boosting customer engagement and restaurant visibility",
    ],
  },
];

export const achievements = [
  {
    title: "Rise To Top Winner",
    description: "District Level Competition",
  },
  {
    title: "Hackathon Finalist - Techfest, IIT Bombay",
    description: "Top 0.5% out of 10,000+ applicants in VISIONX AI competition",
  },
  {
    title: "SIH Internal Winner",
    description: "Secured 2nd place among 160+ teams in Smart India Hackathon internal round at MMMUT",
  },
  {
    title: "Workshop Participant",
    description: "Techfest, IIT Bombay & GUVI-HCL",
  },
];

export const education = {
  degree: "Bachelor of Engineering in Information Technology",
  university: "Madan Mohan Malaviya University of Technology",
  location: "Gorakhpur, Uttar Pradesh",
  period: "2023 - 2027",
};
