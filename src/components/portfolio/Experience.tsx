import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Fulcrum Digital",
    role: "AI Scientist",
    period: "Jul 2024 – Present",
    current: true,
  },
  {
    company: "DBI360",
    role: "Python Developer",
    period: "Jul 2023 – Jun 2024",
    current: false,
  },
  {
    company: "Continental Automotive",
    role: "Data Analyst",
    period: "Apr 2023 – Mar 2024",
    current: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="font-mono text-primary text-sm mb-2">{'// experience'}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Work Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex gap-5"
                >
                  <div className={`relative z-10 mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    exp.current ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>
                    <Briefcase size={18} />
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5 flex-1 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="font-semibold text-lg">{exp.company}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-mono text-sm">{exp.role}</p>
                    {exp.current && (
                      <span className="inline-block mt-2 px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded">
                        current
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
