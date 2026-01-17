import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import FloatingElement from "@/components/FloatingElement";
import ElectricBorder from "@/components/ElectricBorder";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <Logo />
        <SocialBar />

        {/* Background ABOUT text */}
        <div className="absolute top-16 md:top-24 left-4 md:left-16 pointer-events-none select-none">
          <span className="text-[20vw] md:text-[15vw] font-display font-bold text-foreground/5">
            ABOUT
          </span>
        </div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed top-6 right-6 md:top-8 md:right-8 z-50"
        >
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-foreground/30 hover:border-accent hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 md:px-16 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
            {/* Text Content - Takes up more space */}
            <motion.div 
              className="lg:col-span-3 space-y-6 order-2 lg:order-1 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ElectricBorder 
                color="hsl(var(--accent))" 
                speed={0.8} 
                chaos={0.08} 
                borderRadius={16}
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed italic font-body"
                  >
                    I'm a Software Developer at Zoho Corporation. I adore designing 
                    user-friendly websites that are both simple and elegant yet 
                    scalable. I consider myself to be a lifelong learner. I'm 
                    proficient in data structures and algorithms.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed italic font-body"
                  >
                    I'm also interested in Machine Learning, and I adore 
                    experimenting with new ideas and putting together fantastic 
                    projects. I've always been interested in robotics and built 
                    around seven of them when I was 15 years old.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed italic font-body"
                  >
                    I'm a Crypto junkie and a Pianist contrasting right? I've been 
                    fascinated by technology since I was a child and grown up as a 
                    Tech Savvy and Build few Enterprise level Softwares.
                  </motion.p>
                </div>
              </ElectricBorder>
            </motion.div>

            {/* Profile Photo */}
            <div className="lg:col-span-2 relative flex justify-center lg:justify-end items-start order-1 lg:order-2">
              <FloatingElement duration={6} y={15}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative"
                >
                  {/* Decorative asterisk */}
                  <motion.div
                    className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-accent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                      <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17Z" />
                    </svg>
                  </motion.div>
                  
                  {/* Profile image - cartoon style */}
                  <div className="relative w-48 h-auto sm:w-56 md:w-72 lg:w-80">
                    <img
                      src={profilePhoto}
                      alt="Arun Pandian"
                      className="w-full h-auto object-contain"
                    />
                  </div>
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
