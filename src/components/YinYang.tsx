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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative"
      >
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          className="drop-shadow-2xl"
        >
          {/* Definitions for gradients and shadows */}
          <defs>
            {/* White side gradient */}
            <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#e8e8e8" />
            </linearGradient>
            
            {/* Dark side gradient */}
            <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a2a3d" />
              <stop offset="50%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0f0f1a" />
            </linearGradient>
            
            {/* Inner shadow for depth */}
            <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
              <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
            </filter>
            
            {/* Outer glow */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* 3D sphere effect for small circles */}
            <radialGradient id="whiteSphereGradient" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e0e0e0" />
              <stop offset="100%" stopColor="#c0c0c0" />
            </radialGradient>
            
            <radialGradient id="darkSphereGradient" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#3a3a4d" />
              <stop offset="70%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0a0a15" />
            </radialGradient>
          </defs>
          
          {/* Outer ring shadow */}
          <circle
            cx="80"
            cy="80"
            r="75"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="3"
          />
          
          {/* Main outer circle with border */}
          <circle
            cx="80"
            cy="80"
            r="74"
            fill="none"
            stroke="#1a1a2e"
            strokeWidth="2"
          />
          
          {/* White (light) half */}
          <path
            d="M80,6 A74,74 0 0,0 80,154 A37,37 0 0,0 80,80 A37,37 0 0,1 80,6"
            fill="url(#whiteGradient)"
          />
          
          {/* Dark half */}
          <path
            d="M80,6 A74,74 0 0,1 80,154 A37,37 0 0,1 80,80 A37,37 0 0,0 80,6"
            fill="url(#darkGradient)"
          />
          
          {/* Small white circle (in dark half) - 3D sphere effect */}
          <circle
            cx="80"
            cy="117"
            r="12"
            fill="url(#whiteSphereGradient)"
            filter="url(#glow)"
          />
          
          {/* Small dark circle (in white half) - 3D sphere effect */}
          <circle
            cx="80"
            cy="43"
            r="12"
            fill="url(#darkSphereGradient)"
          />
          
          {/* Highlight on white side for 3D effect */}
          <ellipse
            cx="55"
            cy="50"
            rx="20"
            ry="15"
            fill="rgba(255,255,255,0.3)"
            transform="rotate(-30, 55, 50)"
          />
        </svg>
      </motion.div>
      
      <motion.p
        className="text-center mt-6 text-sm tracking-[0.3em] uppercase font-body text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        click here
      </motion.p>
    </motion.div>
  );
};

export default YinYang;
