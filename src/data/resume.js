/**
 * resume.js — Single source of truth for portfolio content.
 *
 * Imported by React components AND used to generate the static
 * /resume.json and /resume.html crawler-accessible routes.
 */

export const meta = {
  name: "Sanket Raj",
  role: "Software Development Engineer & AI/ML Engineer",
  tagline: "Hi, I'm Sanket Raj",
  description:
    "Software Development Engineer & AI/ML Engineer with experience at Microsoft and Eternal Ltd. Delivered 50+ high-impact projects across distributed cloud systems, modern web, and AI domains. Specializing in Azure, Microservices, React, Node.js, Python, and Scalable APIs.",
  email: "sanketdev521@gmail.com",
  location: "Bangalore, India",
  github: "https://github.com/21-sanket",
  whatsapp:
    "https://wa.me/917979713506?text=Hi%20Sanket,%20I'd%20like%20to%20discuss%20a%20development%20project.",
  intakeForm: "https://client-intake-form.tiiny.site",
};

export const about = {
  paragraphs: [
    "I'm Sanket Raj, a Software Development Engineer & AI/ML Engineer specializing in architecting high-throughput distributed systems, resilient cloud backends, and modern full-stack web platforms.",
    "Over the past 4+ years, I have engineered and deployed 50+ production-grade solutions across high-growth startups and top-tier tech ecosystems, with an uncompromising focus on sub-second latency, fault tolerance, and developer ergonomics.",
    "At Microsoft, I work within Cloud & Distributed Systems, designing scalable microservices on Azure, managing high-throughput event streaming via Event Hubs and Redis, and architecting robust CI/CD container pipelines on Kubernetes (AKS).",
    "Previously at Eternal Ltd. (Formerly Zomato), I contributed to high-concurrency food delivery and quick-commerce web platforms—engineering real-time order tracking workflows, optimizing Core Web Vitals across millions of page impressions, and building accessible UI design systems.",
    "Beyond systems architecture, I bridge the gap between distributed infrastructure and intelligent AI/ML systems—building multi-agent LLM pipelines, neural models, and high-performance REST/gRPC interfaces that solve real-world operational challenges.",
    "I thrive in fast-paced environments where code quality, p99 reliability, and seamless user experiences are paramount. Whether scaling backend microservices to tens of thousands of requests per second or optimizing client-side render cycles, I treat every codebase as an enterprise-grade product.",
  ],
};

export const experience = [
  {
    role: "Software Development Engineer",
    company: "Microsoft Corporation",
    location: "Bangalore, India",
    bullets: [
      "Architected and deployed scalable, high-availability microservices and distributed cloud backends on Microsoft Azure.",
      "Engineered low-latency REST and asynchronous messaging pipelines, optimizing p99 API latencies and data processing throughput.",
      "Implemented resilient event-driven architectures utilizing Azure Event Hubs, Service Bus, and Redis cache clusters for high-concurrency data streaming.",
      "Automated CI/CD workflows, containerized multi-tier workloads with Docker & Kubernetes (AKS), and integrated real-time observability with Azure Monitor.",
    ],
  },
  {
    role: "Full Stack MERN & AI/ML Engineer",
    company: "Eternal Ltd. (Formerly Zomato)",
    location: "Gurugram, India",
    bullets: [
      "Built and scaled high-concurrency merchant and delivery partner web applications supporting thousands of live order updates and dispatch events per minute.",
      "Engineered real-time order tracking and dynamic status notifications utilizing WebSockets and polling fallbacks, significantly reducing state synchronization latency.",
      "Optimized frontend performance and Core Web Vitals (improving LCP by 35% and CLS by 40%) across high-traffic customer-facing web menus and checkout funnels.",
      "Architected reusable, accessible UI component primitives for the internal design system, standardizing component patterns across multiple product lines.",
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

export const personalProjects = [
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

export const enterpriseProjects = [
  {
    title: "Construction Site & Field Operations Tracker",
    category: "Civil Infrastructure & Site Ops",
    desc: "Real-time multi-site civil construction management platform tracking planned vs. actual task milestones, material movements, and safety logs.",
    points: [
      "Engineered offline-first PWA with background sync and MinIO/S3 photo audit logging for remote field engineers",
      "Automated forward-looking material inventory alerts against upcoming Gantt tasks to preempt cement/steel shortages",
      "Structured standardized delay root-cause taxonomy (weather, material, labour), reducing delay detection from days to same-day",
      "Delivered an estimated 70–80% reduction in manual report compilation and 50–60% fewer status inquiries",
    ],
    tech: "Next.js, React, Tailwind CSS, NestJS, PostgreSQL, BullMQ, Redis, MinIO/S3, Docker Compose",
    confidential: true,
    ndaNote: "Confidential / NDA Protected — Proprietary enterprise architecture",
  },
  {
    title: "Food & Cosmetics Batch Production & Quality Pipeline",
    category: "Industrial Manufacturing & QC",
    desc: "End-to-end stage-gated batch pipeline and regulatory compliance engine tracking products from raw material intake to final dispatch.",
    points: [
      "Developed stage-gated batch pipeline with automated quality-hold gates blocking packaging and dispatch queues upon lab alerts",
      "Implemented append-only immutable audit logging and QR code batch labeling for rigorous manufacturing traceability",
      "Architected cross-department blocker routing and automated evening digests, reducing blocker resolution cycles by 30–40%",
      "Reduced batch idle waiting time between production stages by 10–20% and manual compiling effort by 75–85%",
    ],
    tech: "Next.js, Node.js, NestJS, PostgreSQL, Redis, BullMQ, QR Code Generation, PDF Pipeline, Docker",
    confidential: true,
    ndaNote: "Confidential / NDA Protected — Proprietary enterprise architecture",
  },
  {
    title: "Hospital Department Operations & Resource Tracker",
    category: "Healthcare Infrastructure (Non-PHI)",
    desc: "Shift-based operational healthboard tracking staffing ratios, biomedical equipment uptime, and consumables with strict zero-patient-data privacy.",
    points: [
      "Designed shift-based operational forms and real-time biomedical equipment issue queues with automated priority triage",
      "Engineered automated 2-hour escalation timers routing unresolved critical equipment issues directly to hospital administrators",
      "Configured encrypted PostgreSQL volumes at rest and full audit trails tracking access to departmental operational dashboards",
      "Cut administrative reporting overhead by 60–70% and accelerated critical issue escalation times by 30–40%",
    ],
    tech: "Next.js, TypeScript, NestJS, PostgreSQL (Encrypted Volumes), Redis, WebSockets, Docker, Nginx",
    confidential: true,
    ndaNote: "Confidential / NDA Protected — Proprietary enterprise architecture",
  },
  {
    title: "Fresh Produce Supply Chain & Wastage Reconciliation Tracker",
    category: "Agri-Logistics & Quick Commerce",
    desc: "High-velocity inventory intake, order fulfillment, and daily wastage reconciliation system for perishables and farm produce.",
    points: [
      "Built automated daily reconciliation engine enforcing `Purchased - Delivered - Wasted = Closing Stock` across daily shifts",
      "Programmed instant mismatch detection flagging inventory gaps and supplier-wise spoilage patterns in real time",
      "Integrated WhatsApp Business API webhooks for automated evening owner digests and weekly margin/wastage analytics",
      "Reduced daily stock reconciliation time by 60–70% and cut perishable inventory wastage by an estimated 10–20%",
    ],
    tech: "Next.js, Tailwind CSS, Node.js, PostgreSQL, Redis, WhatsApp Business API, Chart.js, Docker",
    confidential: true,
    ndaNote: "Confidential / NDA Protected — Proprietary enterprise architecture",
  },
  {
    title: "Azure EventFlow — Distributed Stream Processing Engine",
    category: "Enterprise Cloud System",
    desc: "High-throughput distributed event streaming and microservice pipeline built on Azure for real-time telemetry ingestion and processing.",
    points: [
      "Architected event-driven ingestion engine capable of processing 100K+ events/sec with sub-second latency",
      "Integrated Azure Event Hubs, Redis cache clustering, and Azure Functions for scalable stream computing",
      "Built resilient microservices with circuit breaking, distributed tracing, and dead-letter queue recovery",
      "Configured automated deployment pipelines using Docker, Kubernetes (AKS), and Azure Monitor",
    ],
    tech: "Azure, Microservices, Node.js, TypeScript, Docker, Kubernetes, Redis, Azure Event Hubs",
    confidential: true,
    ndaNote: "Confidential / NDA Protected — Proprietary enterprise architecture",
  },
  {
    title: "CloudScale Sentinel — High-Throughput API Gateway & Telemetry Mesh",
    category: "Distributed Infrastructure",
    desc: "Enterprise microservice orchestrator and telemetry mesh providing dynamic rate-limiting, load balancing, and distributed tracing.",
    points: [
      "Engineered high-performance API gateway handling concurrent routing, TLS termination, and token verification",
      "Implemented dynamic token-bucket rate limiting and distributed caching with Redis to safeguard backend services",
      "Structured OpenTelemetry tracing and structured logging for end-to-end distributed system observability",
      "Containerized with Docker and deployed on Azure Kubernetes Service (AKS) with zero-downtime rolling updates",
    ],
    tech: "Azure, Docker, Kubernetes, Node.js, Express, Redis, OpenTelemetry, Azure Monitor",
    confidential: true,
    ndaNote: "Confidential / NDA Protected — Proprietary enterprise architecture",
  },
];

export const projects = personalProjects;

export const contact = {
  email: meta.email,
  location: meta.location,
  github: meta.github,
  whatsapp: meta.whatsapp,
  intakeForm: meta.intakeForm,
  contactDesc:
    "I'm open to freelance full-stack web development contracts, custom application design scoping, and scalable digital architecture engagements. Let's build something impactful together.",
};
