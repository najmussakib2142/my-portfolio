import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded-full flex items-center gap-2 text-sm"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="block w-16 truncate text-xs border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 text-center"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline hover:gap-3 transition-all"
          >
            View Details <FaInfoCircle size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
