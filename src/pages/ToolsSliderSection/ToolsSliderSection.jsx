import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiFirebase,
} from "react-icons/si";
import { FaKey } from "react-icons/fa";

const tools = [
  { icon: <SiReact className="text-cyan-400" />, name: "React" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-200 dark:text-gray-400" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaKey className="text-yellow-400" />, name: "JWT" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
  { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
  { icon: <SiGithub className="text-gray-900 dark:text-white" />, name: "GitHub" },
];

const ToolsSliderSection = () => {
  return (
    <section className="py-20 overflow-hidden   transition-colors duration-500">
      <div className="container mx-auto  text-center">
        {/* --- Section Heading --- */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">
            Tools & Technologies I Work With
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            A collection of technologies I use daily to design, build, and deploy
            responsive and efficient web applications.
          </p>
        </motion.div>

        {/* --- Marquee --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0F172A] pointer-events-none z-50"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0F172A] pointer-events-none z-50"></div>
          <Marquee
            speed={45}
            gradient={false}
            pauseOnHover={true}
            className="py-6"
          >
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: 3 }}
                className="flex flex-col items-center justify-center mx-10 text-center group cursor-pointer"
              >
                <div className="relative text-6xl mb-2 transition-all duration-300">
                  {/* Glow effect */}
                  <span className="absolute inset-0 blur-md opacity-10 group-hover:opacity-40 transition-opacity duration-500">
                    {tool.icon}
                  </span>
                  {tool.icon}
                </div>
                <p className="py-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-lime-400 transition-colors duration-300">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSliderSection;
