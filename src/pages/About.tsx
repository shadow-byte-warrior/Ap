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

        <div className="container mx-auto px-4 sm:px-6 md:px-16 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
            {/* Text Content */}
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
                <div className="bg-background rounded-2xl p-6 md:p-8 space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed italic font-body"
                  >
                    I specialize in bridging the gap between cutting-edge Artificial Intelligence 
                    and tangible business value. My focus is on identifying, designing, and integrating 
                    AI capabilities—like Large Language Models (LLMs) and predictive analytics—into 
                    products and workflows to drive efficiency, innovation, and competitive advantage.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed italic font-body"
                  >
                    I possess a unique blend of technical understanding and strategic vision, 
                    allowing me to translate complex AI potential into actionable product roadmaps 
                    and user-centric features. My work involves leveraging platforms like OpenAI, 
                    LangChain, and vector databases to solve real-world problems.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed italic font-body"
                  >
                    From automating complex processes to creating intelligent customer experiences, 
                    I'm passionate about building enterprise-level software that makes a real impact. 
                    AI Engineer | MERN STACK | Python | Chatbot Integration | N8N Automation | Generative AI.
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
                  
                  {/* Profile image */}
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
        
        {/* Grid pattern */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.06]"
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

export default About;
