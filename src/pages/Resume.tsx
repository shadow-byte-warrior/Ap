import { motion } from "framer-motion";
import { useRef, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import SocialBar from "@/components/SocialBar";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, Phone, Github, Linkedin, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#faf8f3",
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("Arun_Pandian_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <Logo />
        <SocialBar />

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

        <div className="container mx-auto px-8 py-32 md:py-40 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold italic">RESUME</h1>
              <p className="text-muted-foreground mt-2">Last Updated on 17th January 2026</p>
            </div>
            <motion.button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-accent transition-colors disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download size={18} />
                  Download PDF
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Resume Content - This gets converted to PDF */}
          <div ref={resumeRef} className="bg-card rounded-2xl p-8 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Arun Pandian</h2>
              <div className="flex flex-wrap gap-4 md:gap-6 text-muted-foreground text-sm">
                <a href="mailto:arunpandi47777@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={14} />
                  arunpandi47777@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <Phone size={14} />
                  824.896.0558
                </span>
                <a href="https://github.com/Arunpandian" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Github size={14} />
                  Arunpandian
                </a>
                <a href="https://linkedin.com/in/Arunpandian" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Linkedin size={14} />
                  Arunpandian
                </a>
              </div>
            </motion.div>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-display font-bold mb-4 text-accent uppercase tracking-widest border-b border-border pb-2">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-bold">EASA College of Engineering Technology</h4>
                  <p className="text-muted-foreground text-sm">BTech. Artificial Intelligence Data Science</p>
                  <p className="text-xs text-muted-foreground">Dec 2020 | Coimbatore, TN | GPA: 8/10</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-bold">Government HR Sec School</h4>
                  <p className="text-muted-foreground text-sm">Bio-maths HSE</p>
                  <p className="text-xs text-muted-foreground">2022 | Poovanathapuram, Sivakasi, TN | GPA: 3.83/4.0</p>
                </div>
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-display font-bold mb-4 text-accent uppercase tracking-widest border-b border-border pb-2">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="font-bold">Carpedium Technology</h4>
                      <p className="text-sm text-muted-foreground">AI Software Engineer Intern</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Dec 2025 – Jan 2026</span>
                  </div>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Designed full-stack healthcare web application with Python and Streamlit</li>
                    <li>• Integrated ML models for real-time predictive analysis</li>
                  </ul>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="font-bold">Rinex.AI</h4>
                      <p className="text-sm text-muted-foreground">AI Engineering Intern</p>
                    </div>
                    <span className="text-xs text-muted-foreground">July 2025 – Oct 2025</span>
                  </div>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Developed ML models for web-based real-time predictions</li>
                    <li>• Built interactive UIs with database integration</li>
                  </ul>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="font-bold">Lovely Cards Private Ltd</h4>
                      <p className="text-sm text-muted-foreground">Graphics Designer & Intern</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Jan 2025 – Feb 2025</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-display font-bold mb-4 text-accent uppercase tracking-widest border-b border-border pb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "JavaScript", "SQL", "Angular", "Node.js", "REST APIs", "Git", "Linux", "MySQL", "MongoDB", "Machine Learning", "Data Structures", "OOP"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-display font-bold mb-4 text-accent uppercase tracking-widest border-b border-border pb-2">Projects</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold">AI Healthcare System <span className="text-xs font-normal text-muted-foreground">— Streamlit + Python + ML</span></h4>
                  <p className="text-sm text-muted-foreground">Full-stack application with ML models for healthcare predictions and SQL-based patient data storage.</p>
                </div>
                <div>
                  <h4 className="font-bold">E-Commerce Web Application <span className="text-xs font-normal text-muted-foreground">— Java + Angular + MySQL</span></h4>
                  <p className="text-sm text-muted-foreground">Full-stack platform with Java Spring Boot, REST APIs, and optimized database queries.</p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
