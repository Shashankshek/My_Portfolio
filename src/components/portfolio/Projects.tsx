import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Brain, Database, Server, BarChart3, Car } from "lucide-react";

const projects = [
  {
    title: "IFLI – AI Research",
    company: "Fulcrum Digital",
    role: "AI Scientist",
    icon: Brain,
    tech: ["Python", "LangChain", "LangSmith", "Vector DBs", "RAG"],
    description: "Explored LLM pipelines, vector databases, and RAG frameworks. Studied MCP integration for AI applications and contributed to POC evaluations.",
  },
  {
    title: "ETL Automation Pipelines",
    company: "DBI360",
    role: "Python / ETL Developer",
    icon: Database,
    tech: ["Python", "Pandas", "Boto3", "MongoDB", "Elasticsearch", "AWS S3", "RabbitMQ"],
    description: "Designed automated ETL pipelines for multi-file datasets across AWS S3, Elasticsearch, and MongoDB with country normalization and timezone adjustment.",
  },
  {
    title: "Task Management Web App",
    company: "DBI360",
    role: "Python Developer",
    icon: Server,
    tech: ["Flask", "MongoDB", "MySQL", "JWT", "REST APIs", "Graph API"],
    description: "Full-featured task management app with JWT auth, Microsoft Teams notifications, email alerts, task escalation, and advanced filtering workflows.",
  },
  {
    title: "Employee Management System",
    company: "DBI360",
    role: "Backend Developer",
    icon: Server,
    tech: ["Django", "MySQL", "REST APIs", "AWS S3"],
    description: "Secure HRMS module with encrypted staff ID authentication, data models for employee info, and HOD verification middleware.",
  },
  {
    title: "JIRA Dashboard Automation",
    company: "Continental Automotive",
    role: "Data Analyst",
    icon: BarChart3,
    tech: ["PowerBI", "Selenium", "Excel", "xlwings", "Pandas"],
    description: "Automated JIRA ticket extraction and built interactive PowerBI dashboards with DAX formulas, treemaps, and drill-down reporting.",
  },
  {
    title: "ADAS Data Simulation",
    company: "Continental Automotive",
    role: "Data Analyst",
    icon: Car,
    tech: ["Python", "Test Scripts", "DOORS", "CSV/BSIG"],
    description: "Contributed to ADAS simulation workflows, generating CSV/BSIG files for labeling and supporting SIL testing with automated scripts.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="font-mono text-primary text-sm mb-2">{'// projects'}</p> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:glow-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{project.company}</span>
                </div>

                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-primary/70 mb-3">{project.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-mono rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
