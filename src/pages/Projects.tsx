import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, Users, Calendar, ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import ElectricBorder from "@/components/ElectricBorder";
import { useRef } from "react";

import projectUber from "@/assets/project-uber.png";
import projectDisease from "@/assets/project-disease.png";

const projects = [
  {
    id: 1,
    title: "Uber Project",
    tech: ["Python"],
    year: "2025",
    description: "A comprehensive ride-sharing application project built with Python, implementing core Uber-like functionality with data analysis and route optimization features.",
    color: "#8B5CF6",
    image: projectUber,
    githubUrl: "https://github.com/shadow-byte-warrior/uber-project",
    hasDemo: false,
    hasGithub: true,
  },
  {
    id: 2,
    title: "Chronic Disease Classification",
    tech: ["Python", "ML", "Healthcare"],
    year: "2025",
    description: "Machine learning-based chronic disease classification system using advanced algorithms for early detection and prediction of various health conditions.",
    color: "#EF4444",
    image: projectDisease,
    githubUrl: "https://github.com/shadow-byte-warrior/Chronical_disease-classification-",
    hasDemo: false,
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
        
        {/* Back button */}
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
          {/* GitHub Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                PROJECTS
              </h1>
              <a 
                href="https://github.com/shadow-byte-warrior"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full hover:bg-accent transition-colors text-sm font-medium"
              >
                <Github size={16} />
                shadow-byte-warrior
              </a>
            </div>
            
            {/* GitHub Stats */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Users size={14} />
                <span className="font-medium text-foreground">0</span> followers
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="font-medium text-foreground">2</span> following
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                Joined last week
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm mb-8"
          >
            Popular repositories
          </motion.p>

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
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[450px] lg:w-[500px] snap-center"
              >
                <ElectricBorder
                  color={project.color}
                  speed={1.2}
                  chaos={0.15}
                  borderRadius={24}
                  className="h-full"
                >
                  <div className="bg-card/90 backdrop-blur-sm rounded-3xl overflow-hidden h-full min-h-[420px] flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      {/* Header with year */}
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-mono text-muted-foreground">
                          {project.year}
                        </span>
                        <div className="flex gap-2">
                          {project.hasGithub && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
                            >
                              <Github size={16} />
                            </motion.a>
                          )}
                          {project.hasDemo && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background transition-colors"
                            >
                              <ExternalLink size={16} />
                            </motion.button>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl md:text-2xl font-display font-bold mb-3 text-foreground">
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-mono rounded-full border border-foreground/20 text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ElectricBorder>
              </motion.div>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="md:hidden text-center mt-4"
          >
            <span className="text-xs text-muted-foreground">
              ← Swipe to explore →
            </span>
          </motion.div>
        </div>

        {/* Subtle grid pattern */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </PageTransition>
  );
};

export default Projects;
