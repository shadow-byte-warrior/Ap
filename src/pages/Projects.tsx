import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Healthcare System",
    tech: "Streamlit + Python + ML",
    year: "2025",
    description: "Full-stack web application integrating machine learning models for healthcare predictions with modular backend architecture.",
  },
  {
    title: "E-Commerce Web Application",
    tech: "Java + Angular + MySQL",
    year: "2025",
    description: "Full-stack web platform using Java Spring Boot and Angular with REST APIs for high-performance data communication.",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <Logo />
        <SocialBar />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="fixed top-8 right-8 z-50"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-sm tracking-widest uppercase hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </motion.div>

        <div className="container mx-auto px-8 py-32 md:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title text-5xl md:text-7xl mb-16"
          >
            PROJECTS
          </motion.h1>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="group relative border-b border-border pb-12"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                      <span className="text-sm text-accent font-medium">{project.tech}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors cursor-pointer"
                  >
                    <span className="text-sm uppercase tracking-widest">View</span>
                    <ExternalLink size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
