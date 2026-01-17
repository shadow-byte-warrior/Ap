import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, Phone, Github, Linkedin } from "lucide-react";

const Resume = () => {
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

        <div className="container mx-auto px-8 py-32 md:py-40 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <h1 className="section-title text-5xl md:text-7xl">RESUME</h1>
              <p className="text-muted-foreground mt-2">Last Updated on 17th January 2026</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-accent transition-colors"
            >
              <Download size={18} />
              Download PDF
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Arun Pandian</h2>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <a href="mailto:arunpandi47777@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={16} />
                arunpandi47777@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={16} />
                824.896.0558
              </span>
              <a href="https://github.com/Arunpandian" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Github size={16} />
                Arunpandian
              </a>
              <a href="https://linkedin.com/in/Arunpandian" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Linkedin size={16} />
                Arunpandian
              </a>
            </div>
          </motion.div>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-accent uppercase tracking-widest">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-xl font-bold">EASA College of Engineering Technology</h4>
                <p className="text-muted-foreground">BTech. Artificial Intelligence Data Science</p>
                <p className="text-sm text-muted-foreground">Dec 2020 | Coimbatore, TN | GPA: 8/10</p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <h4 className="text-xl font-bold">Government HR Sec School</h4>
                <p className="text-muted-foreground">Bio-maths HSE</p>
                <p className="text-sm text-muted-foreground">2022 | Poovanathapuram, Sivakasi, TN | GPA: 3.83/4.0</p>
              </div>
            </div>
          </motion.section>

          {/* Experience Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-accent uppercase tracking-widest">Experience</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-l-2 border-accent pl-6">
                <div>
                  <h4 className="font-bold">Carpedium Technology</h4>
                  <p className="text-sm text-muted-foreground">AI Software Engineer Intern</p>
                </div>
                <span className="text-sm text-muted-foreground">Dec 2025 – Jan 2026</span>
              </div>
              <div className="flex justify-between items-start border-l-2 border-border pl-6">
                <div>
                  <h4 className="font-bold">Rinex.AI</h4>
                  <p className="text-sm text-muted-foreground">AI Engineering Intern</p>
                </div>
                <span className="text-sm text-muted-foreground">July 2025 – Oct 2025</span>
              </div>
              <div className="flex justify-between items-start border-l-2 border-border pl-6">
                <div>
                  <h4 className="font-bold">Lovely Cards Private Ltd</h4>
                  <p className="text-sm text-muted-foreground">Graphics Designer & Intern</p>
                </div>
                <span className="text-sm text-muted-foreground">Jan 2025 – Feb 2025</span>
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-accent uppercase tracking-widest">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "JavaScript", "SQL", "Angular", "Node.js", "REST APIs", "Git", "Linux", "MySQL", "MongoDB", "Machine Learning"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
