import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import { projects } from "../../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="pt-24 container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
        Project not found.
      </div>
    );

  return (
    <motion.div
      className="pt-20 container mx-auto px-6 pb-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>

      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full max-h-[450px] object-cover rounded-2xl shadow-md mb-8 border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
        {project.description}
      </p>

      {/* Tech Stack */}
      <section className="mb-8">
        <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-3">
          Main Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Challenges */}
      {project.challenges && (
        <section className="mb-8">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-3">
            Challenges Faced
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Future Plans */}
      {project.improvements && (
        <section className="mb-8">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-3">
            Potential Improvements & Future Plans
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {project.improvements.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-none transition-all shadow-lg"
        >
          Live Demo <FaExternalLinkAlt size={14} />
        </a>

        <a
          href={project.codeLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 btn btn-outline border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Client Code <FaGithub size={16} />
        </a>

        <Link
          to="/projects"
          className="flex items-center gap-2 btn bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 border-none transition"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
