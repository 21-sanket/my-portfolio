import { motion } from "framer-motion";

const projects = [
  {
    title: "Prepify AI — Interview Preparation Platform",
    desc: "AI-powered platform that analyzes resumes against job descriptions and generates personalized interview questions.",
    points: [
      "Generated technical & behavioral questions using LLM APIs",
      "Used Google Gemini API for intelligent question generation",
      "Implemented resume parsing and skill-gap analysis",
      "Built secure REST APIs with JWT authentication",
      "Enabled resume scoring and PDF generation",
    ],
    tech: "React, Node.js, Express, MongoDB, Gemini APIs",
    link: "https://prepify-ai-zeta.vercel.app",
    github: "https://github.com/22-vaibhav/Prepify-AI",
  },
  {
    title: "InsightForge — Multi-Agent AI Research System",
    desc: "Multi-agent system that automates research using search, scraping, and report generation.",
    points: [
      "Built LangChain-based multi-agent workflow",
      "Integrated Tavily API & BeautifulSoup for real-time data",
      "Designed LLM-driven research & critique pipeline",
      "Developed Streamlit UI with downloadable reports",
    ],
    tech: "Python, LangChain, Mistral AI, Streamlit",
    link: "https://multi-agent-research-system-69gtkgbo2bihaj4use9cwr.streamlit.app/",
    github: "https://github.com/22-vaibhav/Multi-Agent-Research-System",
  },
  {
    title: "QuoteGenie — AI Quote Generation System",
    desc: "LSTM-based NLP model for generating context-aware quotes.",
    points: [
      "Built next-word prediction model using LSTM",
      "Developed NLP pipeline (tokenization, sequence generation)",
      "Designed deep learning model (Embedding + LSTM + Softmax)",
      "Deployed using Streamlit"
    ],
    tech: "Python, TensorFlow, Keras, NLP, Streamlit",
    link: "https://github.com/22-vaibhav/QuoteGenie",
    github: "https://github.com/22-vaibhav/QuoteGenie",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      {/* PROJECT CARDS */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
          >
            <h3>{project.title}</h3>

            <p className="project-desc">{project.desc}</p>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="tech"><strong>Tech:</strong> {project.tech}</p>

            <div className="project-links">
              <button onClick={() => window.open(project.link)}>
                Live Demo
              </button>
              <button onClick={() => window.open(project.github)}>
                GitHub
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}