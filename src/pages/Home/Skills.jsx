import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaFigma,
    FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVite } from "react-icons/si";

const skillsData = {
    frontend: [
        { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-600 w-5 h-5" /> },
        { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-600 w-5 h-5" /> },
        { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-500 w-5 h-5" /> },
        { name: "React", level: 80, icon: <FaReact className="text-cyan-500 w-5 h-5" /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-teal-500 w-5 h-5" /> },
    ],
    tools: [
        { name: "Git & GitHub", level: 80, icon: <FaGitAlt className="text-gray-700 w-5 h-5" /> },
        { name: "Vite", level: 70, icon: <SiVite className="text-purple-600 w-5 h-5" /> },
        { name: "Firebase", level: 65, icon: <SiFirebase className="text-yellow-700 w-5 h-5" /> },
        { name: "Figma", level: 75, icon: <FaFigma className="text-pink-500 w-5 h-5" /> },
        { name: "Database", level: 70, icon: <FaDatabase className="text-gray-600 w-5 h-5" /> },
    ],
    softSkills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Adaptability",
        "Time Management",
        "Creativity",
        "Critical Thinking",
        "Attention to Detail",
        "Continuous Learning",
        "Interpersonal Skills",
    ],
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-16 px-10 relative transition-colors duration-500 "
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-extrabold text-primary mb-3">Skills & Tools</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        A blend of technical and creative skills that help me turn ideas into functional web experiences.
                    </p>
                </motion.div>

                {/* Skill Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend Skills */}
                    <motion.div
                        className="p-6 bg-gradient-to-b from-white to-gray-100 dark:from-[#131924] dark:to-[#070e19] 
        rounded-lg border border-gray-200 dark:border-gray-700 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-colors duration-300 cursor-pointer shadow-sm dark:shadow-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-xl font-semibold mb-5 text-primary flex items-center gap-2">
                            Frontend Development
                        </h3>
                        {skillsData.frontend.map((s) => (
                            <div key={s.name} className="mb-4 group">
                                <div className="flex justify-between items-center text-sm mb-1">
                                    <div className="flex items-center gap-2">{s.icon}<span>{s.name}</span></div>
                                    <span>{s.level}%</span>
                                </div>
                                <motion.div
                                    className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.level}%` }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    <div className="h-full bg-gradient-to-r from-slate-700 to-slate-500 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-105"></div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Tools & Platforms */}
                    <motion.div
                        className="p-6 bg-gradient-to-b from-white to-gray-100 dark:from-[#131924] dark:to-[#070e19] 
        rounded-lg border border-gray-200 dark:border-gray-700 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-colors duration-300 cursor-pointer shadow-sm dark:shadow-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-5 text-primary flex items-center gap-2">
                            Tools & Platforms
                        </h3>
                        {skillsData.tools.map((s) => (
                            <div key={s.name} className="mb-4 group">
                                <div className="flex justify-between items-center text-sm mb-1">
                                    <div className="flex items-center gap-2">{s.icon}<span>{s.name}</span></div>
                                    <span>{s.level}%</span>
                                </div>
                                <motion.div
                                    className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.level}%` }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    <div className="h-full bg-gradient-to-r from-gray-700 to-gray-500 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-105"></div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        className="p-6 bg-gradient-to-b from-white to-gray-100 dark:from-[#131924] dark:to-[#070e19] 
        rounded-lg border border-gray-200 dark:border-gray-700 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-colors duration-300 cursor-pointer shadow-sm dark:shadow-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-5 text-primary">Professional Strengths</h3>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {skillsData.softSkills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
                                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full font-medium shadow-sm transition-transform duration-300 cursor-pointer"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
