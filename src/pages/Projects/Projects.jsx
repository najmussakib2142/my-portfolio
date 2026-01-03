import { useState, useEffect } from "react"; // 1. Import hooks
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
// import ProjectCardSkeleton from "../../components/ProjectCardSkeleton"; // 2. Import your skeleton
import { projects as projectData } from "../../data/projectsData";
import { ProjectCardSkeleton } from "../../components/ProjectCardSkeleton";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate a network delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setProjects(projectData);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto py-12 md:py-16 lg:py-20 px-6 md:px-16 transition-colors duration-500"
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-black dark:text-white mb-5"
        >
          Showcasing My Remarkable Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center dark:text-gray-400 max-w-3xl mx-auto text-lg mb-14"
        >
         A collection of my latest web development projects. Each project reflects my passion for crafting clean, responsive, and functional user experiences.
        </motion.p>
      </div>

      <div className="space-y-0 border dark:border-gray-800 border-gray-200">
        {isLoading
          ? // 3. Show Skeletons while loading
            [1, 2, 3].map((_, index) => (
              <ProjectCardSkeleton key={index} reverse={index % 2 !== 0} />
            ))
          : // 4. Show actual Projects when loaded
            projects.map((project, index) => (
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