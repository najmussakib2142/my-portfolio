import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiReactrouter,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAxios,
  SiFramer,
  // SiReactspring,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiStripe,
  SiGit,
  SiGithub,
  SiVercel,
  SiVite,
  SiNetlify,
  // SiVisualstudiocode,
  SiReactquery
} from "react-icons/si";
import { FaPalette, FaServer, FaNetworkWired } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";


const ProjectCard = ({ project, reverse }) => {

  const techIcons = {
    // Frontend
    "React": <SiReact className="text-sky-500 text-xl" />,
    "React Router": <SiReactrouter className="text-blue-400 text-xl" />,
    "JavaScript (ES6+)": <SiJavascript className="text-yellow-400 text-xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl" />,
    "DaisyUI": <SiTailwindcss className="text-cyan-400 text-xl" />, // substitute
    "HTML5": <SiHtml5 className="text-orange-500 text-xl" />,
    "CSS3": <SiCss3 className="text-blue-500 text-xl" />,
    "Axios": <SiAxios className="text-blue-300 text-xl" />,
    "Framer Motion": <SiFramer className="text-pink-400 text-xl" />,
    // "React-Spring": <SiReactspring className="text-green-400 text-xl" />,

    // Backend
    "Node.js": <SiNodedotjs className="text-green-600 text-xl" />,
    "Express.js": <SiExpress className="text-gray-400 text-xl" />,
    "MongoDB": <SiMongodb className="text-green-500 text-xl" />,
    "Mongoose": <SiMongodb className="text-green-500 text-xl" />, // substitute
    "Firebase": <SiFirebase className="text-amber-500 text-xl" />,
    "RESTful APIs": <FaServer className="text-gray-500 text-xl" />,
    "JWT": <SiJsonwebtokens className="text-purple-500 text-xl" />,
    "CORS": <FaNetworkWired className="text-gray-500 text-xl" />,
    "Stripe": <SiStripe className="text-indigo-500 text-xl" />,

    // State & Forms
    "TanStack Query": <SiReactquery className="text-blue-500 text-xl" />,
    "React Hook Form": <SiReact className="text-sky-500 text-xl" />, // substitute

    // Tools / Platforms
    "Git": <SiGit className="text-orange-600 text-xl" />,
    "GitHub": <SiGithub className="text-gray-800 dark:text-white text-xl" />,
    "Vercel": <SiVercel className="text-gray-800 dark:text-white text-xl" />,
    "Vite": <SiVite className="text-purple-500 text-xl" />,
    "Netlify": <SiNetlify className="text-cyan-500 text-xl" />,
    // "VS Code": <SiVisualstudiocode className="text-blue-500 text-xl" />,
    // "Stripe": <SiStripe className="text-indigo-500 text-xl" />,
  };

  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
        } border border-gray-200  md:h-[500px]
         dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 `}
    >
      <div className="md:w-1/2 p-8 flex flex-col justify-center text-left">
        <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wide">
          {project.category || "Featured Project"}
        </h4>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>



        <div className="flex gap-3 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="mr-2">
              {techIcons[tech] || tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="w-fit inline-flex px-4 py-2 border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline"
        >
          <div className="flex justify-between items-center gap-1">
            View Project  <RxArrowTopRight  />
          </div>

        </Link>
      </div>

      <div className="md:w-1/2  overflow-hidden relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
