import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Arunpandian", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/Arunpandian", label: "LinkedIn" },
  { icon: Mail, href: "mailto:arunpandi47777@gmail.com", label: "Email" },
];

const SocialBar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="social-bar hidden md:flex"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2, y: -2 }}
          className="text-foreground/60 hover:text-accent transition-colors duration-300"
          aria-label={social.label}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialBar;
