import { motion } from "framer-motion";

export default function About() {
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
          <p>
            I'm <strong>Sanket Raj</strong>, a Full Stack MERN & AI/ML Engineer focused on
            engineering high-performance frontends and robust, scalable web architectures.
          </p>

          <p>
            Over the past 4 years, I have committed myself to mastering full-stack ecosystems,
            delivering 15+ successful client projects across multiple industries while prioritizing
            user experience and conversion-driven performance.
          </p>

          <p>
            My experience includes collaborating directly with engineering teams at
            Zomato, where I contributed to refining clean interface modules, optimizing code layouts,
            and ensuring structural stability.
          </p>

          <p>
            Whether it's deploying lightweight, lightning-fast static spaces or building full-scale
            dynamic web applications with complex API pipelines, I treat every project as a strategic business asset.
          </p>

          <p>
            I enjoy solving complex architectural problems, optimizing rendering speeds, and building
            accessible digital platforms that are both highly secure and impactful.
          </p>
        </motion.div>

        {/* EXPERIENCE HIGHLIGHT */}
        <motion.div
          className="about-side sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Experience</h3>

          <p><strong>Full Stack Mern & AI/ML Engineer</strong></p>
          <p>Eternal Ltd. (Formerly Zomato), Gurugram</p>

          <ul>
            <li>
              Engineered and shipped 15+ custom business platforms using modern MERN
              and full-stack tech ecosystems, maintaining a 100% project delivery rate.
            </li>

            <li>
              Collaborated on product segments with teams at Zomato to implement clean styling systems,
              improving user interface performance guidelines.
            </li>

            <li>
              Architected highly responsive, keyboard-accessible UI systems that maximize digital client
              engagement metrics across mobile and desktop viewports.
            </li>

            <li>
              Integrated custom third-party integrations, ranging from cloud-based form validation tools
              and payment systems to dynamic real-time data collection dashboards.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}