// import profile from "../assets/profile-sketch.png";
import { motion } from "framer-motion";
import profile from "../assets/cartoon-profile-sketch.png";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* LEFT */}
      <div className="hero-text">

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Hi, I'm <span className="highlight">Sanket Raj</span>
        </motion.h1>

        {/* DRAW LINE */}
        <motion.svg width="220" height="20">
          <motion.line
            x1="0"
            y1="10"
            x2="220"
            y2="10"
            stroke="black"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.svg>

        {/* ROLE */}
        <motion.h3
          className="role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Freelance Full Stack Web Developer
        </motion.h3>

        {/* DESCRIPTION */}
        <motion.p
          className="desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build robust, high-performance web applications and scalable digital experiences.<br></br>
          With 4+ years of experience, I've delivered 15+ projects and collaborated with engineering teams at Zomato.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        className="hero-img sketch-box"
        initial={{ opacity: 0, x: 50, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img src={profile} alt="Sanket Raj" />
      </motion.div>

    </motion.section>
  );
}