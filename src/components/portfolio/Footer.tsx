import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* <p className="font-mono text-primary text-sm mb-4">{'// get in touch'}</p> */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Open to discussing data science, AI projects, or collaboration opportunities.
        </p>

        <div className="flex items-center justify-center gap-5 mb-12">
          <a href="#" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary/50 hover:text-primary transition-colors font-mono">
            <Github size={16} /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary/50 hover:text-primary transition-colors font-mono">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="mailto:shashank@example.com" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary/50 hover:text-primary transition-colors font-mono">
            <Mail size={16} /> Email
          </a>
        </div>

        <p className="text-muted-foreground/60 text-xs font-mono">
          © 2026 Shashank Shekhar. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
