import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const skills = {
  programming: ["Java", "Python", "JavaScript", "SQL"],
  frameworks: ["Angular", "Node.js", "REST APIs", "Git", "Linux"],
  databases: ["MySQL", "MongoDB"],
  concepts: ["Data Structures", "OOP", "SDLC", "Agile Development"],
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <Logo />
        <SocialBar />

        {/* Centered Back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50"
        >
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground/30 hover:border-accent hover:text-accent transition-colors bg-background/50 backdrop-blur-sm"
          >
            <ArrowLeft size={18} />
          </Link>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-24 md:py-32 lg:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold italic mb-16"
          >
            MY SKILLS
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-display font-bold uppercase tracking-widest text-accent">
                  {category}
                </h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-3"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Grid pattern */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.06] -z-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </PageTransition>
  );
};

export default Skills;
