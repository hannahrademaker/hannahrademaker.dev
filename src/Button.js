import { motion } from "framer-motion";

function Button() {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      Click me!
    </motion.button>
  );
}

export default Button;
