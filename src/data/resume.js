/**
 * resume.js — Single source of truth for portfolio content.
 *
 * Imported by React components AND used to generate the static
 * /resume.json and /resume.html crawler-accessible routes.
 */

export const meta = {
  name: "Sanket Raj",
  role: "Full Stack MERN & AI/ML Engineer",
  tagline: "Hi, I'm Sanket Raj",
  description:
    "Full Stack MERN & AI/ML Engineer with 4+ years of experience. Delivered 15+ high-impact projects across web and AI domains. Specializing in React, Node.js, MongoDB, Python, LangChain, and TensorFlow.",
  email: "sanketdev521@gmail.com",
  location: "Bangalore, India",
  github: "https://github.com/21-sanket",
  whatsapp:
    "https://wa.me/917979713506?text=Hi%20Sanket,%20I'd%20like%20to%20discuss%20a%20development%20project.",
  intakeForm: "https://client-intake-form.tiiny.site",
};

export const about = {
  paragraphs: [
    "I'm Sanket Raj, a Full Stack MERN & AI/ML Engineer focused on engineering high-performance frontends and robust, scalable web architectures.",
    "Over the past 4 years, I have committed myself to mastering full-stack ecosystems, delivering 15+ successful client projects across multiple industries while prioritizing user experience and conversion-driven performance.",
    "My experience includes collaborating directly with engineering teams at Zomato, where I contributed to refining clean interface modules, optimizing code layouts, and ensuring structural stability.",
    "Whether it's deploying lightweight, lightning-fast static spaces or building full-scale dynamic web applications with complex API pipelines, I treat every project as a strategic business asset.",
    "I enjoy solving complex architectural problems, optimizing rendering speeds, and building accessible digital platforms that are both highly secure and impactful.",
  ],
};

export const experience = [
  {
    role: "Full Stack MERN & AI/ML Engineer",
    company: "Eternal Ltd. (Formerly Zomato)",
    location: "Bangalore, India",
    bullets: [
      "Engineered and shipped 15+ custom business platforms using modern MERN and full-stack tech ecosystems, maintaining a 100% project delivery rate.",
      "Collaborated on product segments with teams at Zomato to implement clean styling systems, improving user interface performance guidelines.",
      "Architected highly responsive, keyboard-accessible UI systems that maximize digital client engagement metrics across mobile and desktop viewports.",
      "Integrated custom third-party integrations, ranging from cloud-based form validation tools and payment systems to dynamic real-time data collection dashboards.",
    ],
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
  "RestAPI",
  "FastAPI",
  "Python",
  "Machine Learning",
  "Tensorflow",
  "Scikit-learn",
  "LangChain",
  "MySQL",
  "Flask",
  "GitHub",
  "Linux",
  "Postman",
];

export const projects = [
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
    link: "https://prepify-ai-ebon.vercel.app/",
    github: "https://github.com/21-sanket/Prepify-AI",
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
    link: "https://insightforge-ai-bysanket.streamlit.app/",
    github: "https://github.com/21-sanket/InsightForge-AI",
  },
  {
    title: "QuoteGenie — AI Quote Generation System",
    desc: "LSTM-based NLP model for generating context-aware quotes.",
    points: [
      "Built next-word prediction model using LSTM",
      "Developed NLP pipeline (tokenization, sequence generation)",
      "Designed deep learning model (Embedding + LSTM + Softmax)",
      "Deployed using Streamlit",
    ],
    tech: "Python, TensorFlow, Keras, NLP, LSTM Recurrent Neural Networks, Tokenizers, Numpy, Streamlit",
    link: "https://quotegenie-ai-bysanket.streamlit.app/",
    github: "https://github.com/21-sanket/QuoteGenie-AI",
  },
];

export const contact = {
  email: meta.email,
  location: meta.location,
  github: meta.github,
  whatsapp: meta.whatsapp,
  intakeForm: meta.intakeForm,
  contactDesc:
    "I'm open to freelance full-stack web development contracts, custom application design scoping, and scalable digital architecture engagements. Let's build something impactful together.",
};
