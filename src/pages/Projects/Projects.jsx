import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-12  transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
        >
          Showcasing My Remarkable Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center dark:text-gray-400 max-w-3xl mx-auto text-lg mb-12"
        >
          A collection of my latest web development projects. Each project reflects my passion for crafting clean, responsive, and functional user experiences.
        </motion.p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} reverse={index % 2 !== 0} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
