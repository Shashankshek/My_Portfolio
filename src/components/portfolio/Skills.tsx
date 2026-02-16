import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const primarySkills = [
  "Python", "Pandas", "NumPy", "MongoDB", "SQL", "REST APIs",
  "RabbitMQ", "AWS S3 (Boto3)", "GitHub", "Postman", "PowerBI",
  "OOP", "RegEx", "Multiprocessing"
];

const secondarySkills = [
  "LLMs", "LangChain", "LangSmith", "Vector Databases", "RAG Pipelines",
  "Model Context Protocol", "HTML", "xlwings", "Flask", "Django",
  "Selenium", "auto-py-to-exe"
];

const SkillBadge = ({ name, index, accent }: { name: string; index: number; accent?: boolean }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    className={`inline-block px-3 py-1.5 rounded-md font-mono text-xs border transition-colors ${
      accent
        ? "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20"
        : "border-border bg-secondary text-secondary-foreground hover:border-primary/30"
    }`}
  >
    {name}
  </motion.span>
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="font-mono text-primary text-sm mb-2">{'// skills'}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Technical Skills</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-wider">Primary</h3>
              <div className="flex flex-wrap gap-2">
                {inView && primarySkills.map((skill, i) => (
                  <SkillBadge key={skill} name={skill} index={i} accent />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-wider">Secondary</h3>
              <div className="flex flex-wrap gap-2">
                {inView && secondarySkills.map((skill, i) => (
                  <SkillBadge key={skill} name={skill} index={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
