import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import YinYang from "@/components/YinYang";
import EdgeNavigation from "@/components/EdgeNavigation";
import SocialBar from "@/components/SocialBar";
import Logo from "@/components/Logo";

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleYinYangClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <Logo />
      <SocialBar />
      <EdgeNavigation isExpanded={isExpanded} />
      
      {/* Main Content - Centered Yin Yang */}
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="relative z-10"
        >
          <YinYang onClick={handleYinYangClick} isDark={isExpanded} />
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.03, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6 }}
              className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.03, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-foreground blur-3xl pointer-events-none"
            />
          </>
        )}
      </AnimatePresence>

      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

export default Index;
