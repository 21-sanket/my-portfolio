import { motion } from "framer-motion";

// ICONS (add more later if you download them)
import cssIcon from "../assets/icons/css.png";
import expressIcon from "../assets/icons/express.png";
import fastapiIcon from "../assets/icons/fastapi.png";
import flaskIcon from "../assets/icons/flask.png";
import githubIcon from "../assets/icons/github.png";
import htmlIcon from "../assets/icons/html.png";
import javascriptIcon from "../assets/icons/javascript.png";
import langchainIcon from "../assets/icons/langchain.svg";
import linuxIcon from "../assets/icons/linux.png";
import mlIcon from "../assets/icons/ml.png";
import mongoIcon from "../assets/icons/mongo.png";
import mysqlIcon from "../assets/icons/mysql.png";
import nodeIcon from "../assets/icons/node.png";
import postmanIcon from "../assets/icons/postman.png";
import pythonIcon from "../assets/icons/python.png";
import reactIcon from "../assets/icons/react.png";
import restapiIcon from "../assets/icons/restapi.png";
import scikitlearnIcon from "../assets/icons/scikit-learn.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import tensorflowIcon from "../assets/icons/tensorflow.png";
import typescriptIcon from "../assets/icons/typescript.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Express", icon: expressIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "RestAPI", icon: restapiIcon },
  { name: "FastAPI", icon: fastapiIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Machine Learning", icon: mlIcon },
  { name: "Tensorflow", icon: tensorflowIcon },
  { name: "Scikit-learn", icon: scikitlearnIcon },
  { name: "LangChain", icon: langchainIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Flask", icon: flaskIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Linux", icon: linuxIcon },
  { name: "Postman", icon: postmanIcon },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* TITLE */}
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{
              scale: 1.12,
              rotate: index % 2 === 0 ? 2 : -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="icon-wrapper">
              <img src={skill.icon} alt={skill.name} />
            </div>

            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}