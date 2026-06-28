import { motion } from "framer-motion";

export default function DrawBox({ children }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 300 200"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <motion.rect
          x="2"
          y="2"
          width="296"
          height="196"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.svg>

      <div style={{ padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}