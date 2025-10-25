// src/pages/Projects.jsx

import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20   px-6 md:px-12  transition-colors duration-500"
    >

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          Featured Projects
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          A collection of my latest web development projects — built with React,
          Tailwind CSS, and modern web technologies. Each project reflects my
          passion for crafting clean, responsive, and functional user
          experiences.
        </motion.p>

        {/* Project Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft glow accents */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 dark:bg-purple-900 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Projects;
