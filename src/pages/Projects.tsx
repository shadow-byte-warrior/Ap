import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import ElectricBorder from "@/components/ElectricBorder";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "AI Healthcare System",
    tech: ["Streamlit", "Python", "ML"],
    year: "2025",
    description: "Full-stack web application integrating machine learning models for healthcare predictions with modular backend architecture.",
    color: "#5227FF",
    hasDemo: true,
    hasGithub: true,
  },
  {
    id: 2,
    title: "Graphical Password Authentication",
    tech: ["React", "Node.js", "Security"],
    year: "2024",
    description: "Users can set passwords using images and their sequence using this project, which implements the same concept for password authentication as recaptcha.",
    color: "#FF6B35",
    hasDemo: true,
    hasGithub: true,
  },
  {
    id: 3,
    title: "Breach Checker",
    tech: ["Python", "API", "Security"],
    year: "2024",
    description: "This website checks if your passwords or critical information has been leaked anywhere in the internet or not. Completely free, secure and not vulnerable to attacks.",
    color: "#00D4FF",
    hasDemo: true,
    hasGithub: true,
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    tech: ["Java", "Angular", "MySQL"],
    year: "2025",
    description: "Full-stack web platform using Java Spring Boot and Angular with REST APIs for high-performance data communication.",
    color: "#FFD700",
    hasDemo: true,
    hasGithub: true,
  },
];

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden">
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

        {/* Background WORK text */}
        <div className="absolute top-1/3 right-0 pointer-events-none select-none opacity-5">
          <span className="text-[15vw] font-display font-bold text-foreground">
            WORK
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-24 md:py-32 lg:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold italic mb-8 md:mb-16"
          >
            PROJECTS
          </motion.h1>

          {/* Horizontal Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 -mx-4 px-4 md:-mx-8 md:px-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[400px] lg:w-[450px] snap-center"
              >
                <ElectricBorder
                  color={project.color}
                  speed={1.2}
                  chaos={0.15}
                  borderRadius={24}
                  className="h-full"
                >
                  <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 h-full min-h-[320px] flex flex-col">
                    {/* Header with year */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-mono text-muted-foreground">
                        {project.year}
                      </span>
                      <div className="flex gap-2">
                        {project.hasGithub && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
                          >
                            <Github size={16} />
                          </motion.button>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-display font-bold mb-4 text-foreground">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow mb-6">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-muted/50 rounded-full text-muted-foreground"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit Button */}
                    {project.hasDemo && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-background text-foreground rounded-xl font-medium hover:bg-muted transition-colors border border-border"
                      >
                        Visit
                        <ExternalLink size={16} />
                      </motion.button>
                    )}
                  </div>
                </ElectricBorder>
              </motion.div>
            ))}
          </div>

          {/* Swipe hint for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center md:hidden"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span>Swipe</span>
              <motion.span
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </p>
          </motion.div>
        </div>

        {/* Bottom swipe indicator */}
        <div className="fixed bottom-8 right-8 pointer-events-none select-none opacity-10 hidden md:block">
          <span className="text-6xl md:text-8xl font-display font-bold italic text-foreground">
            Swipe
          </span>
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

export default Projects;
