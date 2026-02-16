import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="font-mono text-primary text-sm mb-2">{'// about'}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Summary</h2>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 glow-border">
            <p className="text-foreground/85 leading-relaxed text-lg">
              AI Scientist at Fulcrum with hands-on experience in developing data-driven solutions and 2 years of prior expertise in Python development. Skilled in building analytical workflows, ETL processes, and backend systems using{" "}
              <span className="text-primary font-medium">Python, Flask, Django, MongoDB, and MySQL</span>. 
              Familiar with modern AI/ML technologies including{" "}
              <span className="text-primary font-medium">Large Language Models (LLMs), LangChain, LangSmith, Vector Databases, RAG, and Model Context Protocol (MCP)</span>{" "}
              through coursework and self-learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
