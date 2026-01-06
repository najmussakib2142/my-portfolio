import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projects } from "../../data/projectsData";
import { HashLink } from "react-router-hash-link";

// LightGallery imports
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="pt-24 container mx-auto px-6 text-center text-gray-600 dark:text-gray-300 animate-pulse">
        Project not found.
      </div>
    );

  // Ensure images array exists for LightGallery
  const galleryImages = project.images || [project.image];

  return (
    <div className=" w-full min-h-screen bg-[#f3f4f6] dark:bg-gray-900">
      <motion.div
        className=" pt-8 max-w-7xl  container mx-auto px-6 md:px-16 pb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Breadcrumbs */}
        <nav className="flex items-center md:gap-1 mb-4 text-xs md:text-sm  tracking-wider text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-blue-600 -ml-4 transition-colors">Home</Link>
          <span>/</span>
          <HashLink smooth to="/#projects" className="hover:text-blue-600 transition-colors">Projects</HashLink>
          <span>/</span>
          <span className="text-blue-500 pl-3 font-semibold">{project.title}</span>
        </nav>

        {/* Header */}
        <motion.h1
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          // 1. Use "willChange" to tell the browser to optimize rendering
          // 2. Add "antialiased" to clean up the edges
          style={{
            willChange: "transform, opacity",
            WebkitFontSmoothing: "antialiased"
          }}
          initial={{ opacity: 0, y: 10 }} // Reduce the distance (from 30 to 10) to reduce jitter
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {project.title}
        </motion.h1>

        {/* LightGallery */}
        <LightGallery
          speed={500}
          plugins={[lgZoom, lgThumbnail]}
          elementClassNames="grid grid-cols-1 md:grid-cols-2  gap-4 mb-8"
        >
          {galleryImages.map((img, idx) => (
            <a key={idx} href={img} className="block rounded overflow-hidden">
              <img
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full min-h-1/2 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                loading="lazy"
              />
            </a>
          ))}
        </LightGallery>

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
                className="badge badge-lg bg-primary/10 text-black dark:text-white border border-primary/30 hover:bg-gray-800 dark:hover-bg-white hover:text-white transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* keyFeatures */}
        {project.keyFeatures && (
          <section className="mb-8">
            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-3">
              key Features
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              {project.keyFeatures.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        )}


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
        <div className="flex flex-col gap-6 mt-10">
          <div className="flex flex-wrap gap-4">
            {/* Primary Action: Live Demo */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium   transition-all duration-300 active:scale-95"
              >
                Live Demo
                <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />

              </a>
            )}

            {/* Secondary Actions: GitHub Links */}
            {[
              { link: project.clientSide, label: "Client Code" },
              { link: project.ServerSide, label: "Server Code" }
            ].map((btn, idx) => btn.link && (
              <a
                key={idx}
                href={btn.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900/50 backdrop-blur-sm  hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-95"
              >
                {btn.label} <FaGithub size={18} className="text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Navigation Action: Back Button */}
          <HashLink
            smooth
            to="/#projects"
            className="flex mt-3 items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors w-fit group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </HashLink>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
