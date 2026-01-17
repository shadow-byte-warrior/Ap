import { motion } from "framer-motion";

interface YinYangProps {
  onClick?: () => void;
  isDark?: boolean;
}

const YinYang = ({ onClick, isDark = false }: YinYangProps) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        className="drop-shadow-lg"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground"
        />
        
        {/* Black half */}
        <path
          d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2"
          className="fill-foreground"
        />
        
        {/* White half */}
        <path
          d="M50,2 A48,48 0 0,0 50,98 A24,24 0 0,0 50,50 A24,24 0 0,1 50,2"
          className="fill-background"
        />
        
        {/* Small white circle */}
        <circle cx="50" cy="26" r="6" className="fill-background" />
        
        {/* Small black circle */}
        <circle cx="50" cy="74" r="6" className="fill-foreground" />
      </motion.svg>
      
      <motion.p
        className="text-center mt-4 text-sm tracking-widest uppercase font-body text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        click here
      </motion.p>
    </motion.div>
  );
};

export default YinYang;
