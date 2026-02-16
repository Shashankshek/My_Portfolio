import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="font-mono text-primary text-sm mb-2">{'// education'}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Education</h2>

          <div className="bg-card border border-border rounded-xl p-6 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Technology (B.Tech)</h3>
              <p className="text-primary font-mono text-sm mt-1">Electronics and Communication</p>
              <p className="text-muted-foreground text-sm mt-2">
                Oriental Institute of Science and Technology, Bhopal
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded">
                CGPA: 7.6
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
