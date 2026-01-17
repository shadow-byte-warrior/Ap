import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import FloatingElement from "@/components/FloatingElement";
import AnimatedText from "@/components/AnimatedText";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <Logo />
        <SocialBar />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
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

        <div className="container mx-auto px-8 md:px-16 py-32 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              className="space-y-8 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-7xl font-display font-bold italic"
              >
                ABOUT
              </motion.h1>

              <AnimatedText
                text="I'm a Software Developer passionate about AI and Machine Learning. I adore designing user-friendly applications that are both simple and elegant yet scalable."
                className="text-lg text-muted-foreground leading-relaxed"
                delay={0.5}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-muted-foreground leading-relaxed"
              >
                I consider myself to be a lifelong learner. I'm proficient in data structures, 
                algorithms, and have experience building full-stack applications with modern technologies. 
                My journey includes working on healthcare AI systems and e-commerce platforms.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                Currently pursuing BTech in Artificial Intelligence and Data Science at EASA College 
                of Engineering Technology, Coimbatore.
              </motion.p>
            </motion.div>

            {/* Profile Photo */}
            <div className="relative flex justify-center items-center order-1 md:order-2">
              <FloatingElement duration={6} y={15}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative"
                >
                  {/* Decorative ring */}
                  <motion.div
                    className="absolute -inset-4 rounded-full border-2 border-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-full blur-2xl" />
                  
                  {/* Profile image */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <img
                      src={profilePhoto}
                      alt="Arun Pandian"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating accent dots */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-3 h-3 rounded-full bg-accent/70"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-accent/50"
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
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
