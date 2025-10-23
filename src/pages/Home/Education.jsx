import React from 'react';
import { FaGraduationCap, FaCertificate } from "react-icons/fa";


const Education = () => {
  return (
    <div>
      <section
        id="education"
        className="py-20 px-6 md:px-16 bg-base-100 relative overflow-hidden"
        data-aos="fade-left"
      >
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center md:text-left">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bachelor Degree */}
            <div
              className="card bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              data-aos="zoom-in-up"
            >
              <div className="flex items-center mb-3 gap-3">
                <FaGraduationCap className="text-indigo-600 w-6 h-6" />
                <h3 className="font-semibold text-xl">
                  Bachelor of Arts in History
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Dhaka College, Bangladesh — 2018 – 2023
              </p>
            </div>

            {/* Web Development Certificate */}
            <a
              href="https://web.programming-hero.com/course-details"
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 relative group block"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-3 gap-3">
                <FaCertificate className="text-purple-600 w-6 h-6" />
                <h3 className="font-semibold text-xl">
                  Web Development Certification
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Programming Hero L1 — React, JS — Ongoing
              </p>

              {/* Tooltip */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg transition-opacity">
                Click to view course outline
              </span>
            </a>
          </div>
        </div>

        {/* Optional decorative circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-100 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-100 rounded-full opacity-10 animate-pulse"></div>
      </section>

    </div>
  );
};

export default Education;