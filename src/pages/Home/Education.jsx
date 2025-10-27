import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-16 relative overflow-hidden transition-colors duration-500"
    >
      {/* Decorative circles */}
      {/* <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-10 blur-2xl animate-pulse"></div> */}
      {/* <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl animate-pulse"></div> */}

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bachelor Degree */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-indigo-400"
          >
            <div className="flex items-center mb-3 gap-3">
              <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 w-7 h-7" />
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                Bachelor of Arts in History
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Dhaka College, Bangladesh — 2018 – 2023
            </p>
          </motion.div>

          {/* Web Development Certificate */}
          <motion.a
            href="https://web.programming-hero.com/course-details"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-purple-400 relative group block"
          >
            <div className="flex items-center mb-3 gap-3">
              <FaCertificate className="text-purple-600 dark:text-purple-400 w-7 h-7" />
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                Programming Hero – Complete Web Development
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Programming Hero L1
            </p>

            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm px-3 py-1 rounded shadow-lg transition-opacity duration-300">
              Click to view course outline
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Education;
