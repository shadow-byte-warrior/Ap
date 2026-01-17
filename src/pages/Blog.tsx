import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Healthcare Systems",
    excerpt: "Exploring the architecture and challenges of developing machine learning models for healthcare predictions with modular backend design.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "AI/ML",
    tags: ["Python", "Streamlit", "Healthcare", "ML"],
  },
  {
    id: 2,
    title: "Modern Full-Stack Development with Java & Angular",
    excerpt: "A deep dive into building high-performance e-commerce platforms using Spring Boot, Angular, and REST APIs.",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    category: "Web Dev",
    tags: ["Java", "Angular", "Spring Boot", "REST"],
  },
  {
    id: 3,
    title: "Data Structures & Algorithms: A Practical Guide",
    excerpt: "Essential DSA concepts every developer should know, with real-world applications and interview tips.",
    date: "Jan 5, 2026",
    readTime: "12 min read",
    category: "Programming",
    tags: ["DSA", "Algorithms", "Interview Prep"],
  },
  {
    id: 4,
    title: "Getting Started with Robotics",
    excerpt: "My journey building seven robots at 15 and lessons learned along the way. From basic circuits to autonomous navigation.",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "Robotics",
    tags: ["Arduino", "Robotics", "IoT", "Electronics"],
  },
];

const Blog = () => {
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold italic mb-4">
              BLOG
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              Thoughts on software development, AI, and building things that matter.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <motion.span
                    className="flex items-center gap-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <ArrowRight size={14} />
                  </motion.span>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 md:mt-16 text-center"
          >
            <p className="text-muted-foreground italic">
              More articles coming soon...
            </p>
          </motion.div>
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

export default Blog;
