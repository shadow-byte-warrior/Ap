import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <motion.div
      className="fixed top-8 left-8 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Link to="/" className="font-display text-3xl font-bold tracking-tight hover:text-accent transition-colors duration-300">
        AP
      </Link>
    </motion.div>
  );
};

export default Logo;
