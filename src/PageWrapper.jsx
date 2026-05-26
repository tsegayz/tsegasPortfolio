import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // Starts slightly lower and invisible
      animate={{ opacity: 1, y: 0 }}    // Animates up to its spot and fades in
      exit={{ opacity: 0, y: -20 }}     // Fades out and glides upward on leave
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 1, 0.5, 1] // Custom cubic-bezier curve for that crisp, premium "Figma feel"
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;