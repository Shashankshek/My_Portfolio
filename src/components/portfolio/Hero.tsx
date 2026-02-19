import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Download } from "lucide-react";
import Swal from "sweetalert2";
import { showSuccessToast } from "@/utils/swalToast";


const RotatingLetter = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      style={{ display: "inline-block", transformStyle: "preserve-3d" }}
      animate={{ rotateY: [0, 180, 180, 360] }}
      transition={{
        duration: 6,        // rotation speed
        ease: "easeInOut",
        repeat: Infinity,   // repeat forever
        times: [0, 0.25, 0.6, 1],
      }}
    >
      {children}
    </motion.span>
  );
};



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-6"
        >
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight [perspective:1000px]"
        >
          <RotatingLetter>S</RotatingLetter>
          hashank{" "}
          <span>
    <RotatingLetter>
      <span className="text-gradient">S</span>
    </RotatingLetter>
    <span className="text-gradient">hekhar</span>
  </span>
        </motion.h1>

        {/* <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          Shashank{" "}
          <span className="text-gradient">Shekhar</span>
        </motion.h1> */}
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
        >
          AI Scientist · Python Developer · AI Enthusiast
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto text-muted-foreground/80 leading-relaxed mb-10"
        >
          Building data-driven solutions with Python, ML pipelines, and modern AI technologies. 
          Currently crafting intelligent systems at Fulcrum Digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-lg hover:border-primary/50 transition-colors">
            Get in Touch
          </a>
          <a
            href="/Shashank_u-Resume.pdf"
            download
            onClick={() => showSuccessToast("Resume downloading...")}
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Resume <Download size={18} />
          </a>


        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { icon: Github, href: "https://github.com/Shashankshek", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shashank-shekhar-48918b1aa/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:shashank.shekhar0214@.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
