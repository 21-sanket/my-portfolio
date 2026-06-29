import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Let's Build Your Product
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
        <p><strong>Email:</strong> sanketraj526@gmail.com</p>
        <p><strong>Location:</strong> Gurugram, India</p>

        <div className="contact-links">
          <a
            href="https://wa.me/917979713506?text=Hi%20Sanket,%20I'd%20like%20to%20discuss%20a%20development%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/21-sanket"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* INTAKE FUNNEL FORM GATEWAY */}
        <div className="contact-form" style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
          
          <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "16px", textAlign: "left" }}>
            To ensure I come fully prepared with a tailored tech stack approach, clear pricing framework, 
            and a realistic timeline estimate for our introductory sync, please take 5 minutes to outline 
            your requirements in my interactive project scoping form.
          </p>

          <motion.a
            href="https://client-intake-form.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              cursor: "pointer",
              width: "100%"
            }}
          >
            Launch Project Intake Form &nbsp;→
          </motion.a>

        </div>

      </motion.div>

    </section>
  );
}