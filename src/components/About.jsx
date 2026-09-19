import { motion } from "framer-motion";
import { about, experience } from "../data/resume";

export default function About() {
  const exp = experience[0];

  return (
    <section id="about" className="about-section">

      {/* TITLE */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">

        {/* MAIN TEXT */}
        <motion.div
          className="about-text sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {about.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>

        {/* EXPERIENCE HIGHLIGHT */}
        <motion.div
          className="about-side sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Experience</h3>

          <p><strong>{exp.role}</strong></p>
          <p>{exp.company}, {exp.location}</p>

          <ul>
            {exp.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}