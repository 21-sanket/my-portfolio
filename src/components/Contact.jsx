import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-desc"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I'm open to freelance full-stack web development contracts, custom application design scoping,
        and scalable digital architecture engagements. Let's build something impactful together.
      </motion.p>

      <motion.div
        className="contact-box sketch-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >

        {/* CONTACT INFO */}
        <p><strong>Email:</strong> sanketraj.dev@gmail.com</p>
        <p><strong>Location:</strong> Bangalore, India</p>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/sanket-raj" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sanket-raj" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        {/* INTAKE FUNNEL FORM GATEWAY */}
        <div className="contact-form" style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
          
          <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "16px", textAlign: "left" }}>
            To ensure I come fully prepared with a tailored tech stack approach, clear pricing framework, 
            and a realistic timeline estimate for our introductory sync, please take 5 minutes to outline 
            your requirements in my interactive project scoping form.
          </p>

          <motion.button 
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://client-intake-form.tiiny.site", "_blank")}
            style={{ cursor: "pointer", width: "100%" }}
          >
            Launch Project Intake Form &nbsp;→
          </motion.button>

        </div>

      </motion.div>

    </section>
  );
}