import { motion } from "framer-motion";
import { enterpriseProjects, personalProjects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* MAIN TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="projects-container">

        {/* ── SECTION 1: PERSONAL & OPEN SOURCE PROJECTS ── */}
        <div className="projects-group-header">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Personal &amp; Open-Source Projects
          </motion.h3>
          <p>Full-stack and AI applications with live demos and public repositories</p>
        </div>

        <div className="projects-subgroup">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
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
                <button onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}>
                  Live Demo
                </button>
                <button onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}>
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── SECTION 2: ENTERPRISE & CONFIDENTIAL ARCHITECTURE ── */}
        <div className="projects-group-header" style={{ marginTop: "45px" }}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Enterprise &amp; Proprietary Systems
          </motion.h3>
          <p>High-throughput cloud architectures built for enterprise production</p>
        </div>

        {/* CONFIDENTIALITY NOTICE */}
        <motion.div
          className="confidentiality-notice sketch-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="notice-icon">🔒</span>
          <div className="notice-content">
            <h4>Confidentiality &amp; NDA Notice</h4>
            <p>
              Due to Non-Disclosure Agreements (NDAs) and proprietary intellectual property policies, live staging endpoints and internal source code repositories cannot be publicly hosted. High-level architecture, scalability metrics, and technology stacks are outlined below.
            </p>
          </div>
        </motion.div>

        <div className="projects-subgroup">
          {enterpriseProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card enterprise"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
            >
              <div className="project-header-row">
                <h3>{project.title}</h3>
                <span className="enterprise-tag">🔒 {project.category}</span>
              </div>

              <p className="project-desc">{project.desc}</p>

              <ul>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <p className="tech"><strong>Tech:</strong> {project.tech}</p>

              <div className="confidential-badge-row">
                <span>🔒</span>
                <span>Proprietary System &mdash; Source code and live deployment protected under Enterprise NDA</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}