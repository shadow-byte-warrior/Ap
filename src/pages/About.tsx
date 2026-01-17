import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import FloatingElement from "@/components/FloatingElement";
import AnimatedText from "@/components/AnimatedText";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <Logo />
        <SocialBar />

        {/* Back button */}
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title text-5xl md:text-7xl"
              >
                ABOUT
              </motion.h1>

              <AnimatedText
                text="I'm a Software Developer passionate about AI and Machine Learning. I adore designing user-friendly applications that are both simple and elegant yet scalable."
                className="text-lg text-muted-foreground leading-relaxed"
                delay={0.3}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-muted-foreground leading-relaxed"
              >
                I consider myself to be a lifelong learner. I'm proficient in data structures, 
                algorithms, and have experience building full-stack applications with modern technologies. 
                My journey includes working on healthcare AI systems and e-commerce platforms.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-muted-foreground leading-relaxed"
              >
                Currently pursuing BTech in Artificial Intelligence and Data Science at EASA College 
                of Engineering Technology, Coimbatore.
              </motion.p>
            </div>

            {/* Floating Spaceman Illustration */}
            <div className="relative flex justify-center items-center">
              <FloatingElement duration={8} y={30}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-64 h-64 md:w-80 md:h-80 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Astronaut illustration */}
                    <circle cx="100" cy="80" r="35" className="fill-foreground/10 stroke-foreground stroke-2" />
                    <circle cx="100" cy="80" r="25" className="fill-background stroke-foreground stroke-2" />
                    <ellipse cx="100" cy="140" rx="30" ry="40" className="fill-foreground/10 stroke-foreground stroke-2" />
                    <line x1="70" y1="130" x2="50" y2="160" className="stroke-foreground stroke-2" />
                    <line x1="130" y1="130" x2="150" y2="160" className="stroke-foreground stroke-2" />
                    <line x1="90" y1="175" x2="80" y2="200" className="stroke-foreground stroke-2" />
                    <line x1="110" y1="175" x2="120" y2="200" className="stroke-foreground stroke-2" />
                    {/* Stars */}
                    <circle cx="30" cy="50" r="2" className="fill-accent" />
                    <circle cx="170" cy="30" r="3" className="fill-accent" />
                    <circle cx="160" cy="150" r="2" className="fill-accent" />
                    <circle cx="40" cy="170" r="2" className="fill-accent" />
                  </svg>
                </motion.div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
