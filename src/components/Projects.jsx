import { motion } from "framer-motion";
import { projects } from "../data/resume";

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