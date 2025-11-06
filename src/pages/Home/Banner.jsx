import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="font-roboto relative overflow-hidden">
      <section className="relative py-28 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        
        {/* ---- Soft Gradient Shape ---- */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] 
                        bg-gradient-to-br from-blue-500/20 to-purple-500/20
                        rounded-3xl blur-3xl opacity-50 pointer-events-none">
        </div>

        <div className="relative z-10 container mx-auto max-w-5xl px-6 flex flex-col items-start text-left gap-10">
          
          {/* ---- Heading ---- */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Najmus Sakib
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
              Frontend Developer • React Enthusiast • Lifelong Learner  
            </p>

            {/* ---- Buttons ---- */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="btn bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white"
              >
                🚀 View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1FyPK7lkl5Mm-EjoVHerNo_y8aOjxkYpL/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gray-800 text-white hover:bg-gray-600 dark:bg-gray-300 dark:text-gray-900"
              >
                View CV
              </a>
            </div>

            {/* ---- Social Icons ---- */}
            <div className="flex gap-6 text-2xl mt-8 text-gray-700 dark:text-gray-300">
              {[
                { Icon: FaGithub, link: "https://github.com/najmussakib2142" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/sm-najmus-sakib" },
                { Icon: FaWhatsapp, link: "https://wa.me/8801736007474" },
                { Icon: FaEnvelope, link: "mailto:najmussakib2142@gmail.com" },
              ].map(({ Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
