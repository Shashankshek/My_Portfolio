  import { useState, useEffect } from "react";
  import { motion } from "framer-motion";

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          {/* <a href="/SS-logo.png" className="font-mono font-bold text-primary text-lg">
            SS<span className="text-foreground"></span>
          </a> */}
          <a href="SS-logo.png" className="flex items-center">
            <img
              src="/SS_logo_transparent.png"
              alt="Shashank Logo"
              className="h-10 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
    );
  };

  export default Navbar;
