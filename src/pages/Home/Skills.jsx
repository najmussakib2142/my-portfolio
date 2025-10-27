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
        <section id="skills" className="relative py-15   overflow-hidden transition-colors duration-500">
            {/* Background Shapes */}
            {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300/30 dark:bg-purple-700/30 rounded-full blur-3xl animate-spin-slow pointer-events-none"></div> */}
            {/* <div className="absolute -bottom-16 right-10 w-60 h-60 bg-indigo-300/20 dark:bg-indigo-800/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div> */}

            <div className="container mx-auto px-6  text-center md:text-left relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <h2 className="text-4xl font-extrabold text-center text-primary mb-3"> Skills & Tools </h2> 
                    <p className="text-gray-600 text-center dark:text-gray-400 max-w-2xl mx-auto text-lg"> A blend of technical and creative skills that help me turn ideas into beautiful, functional web experiences. I’m always learning and improving — one project at a time.

                    </p>
                </motion.div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend */}
                    <motion.div
                        className="p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-lg backdrop-blur-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-2 text-primary">
                            Frontend Development
                        </h3>
                        {skillsData.frontend.map((s) => (
                            <div key={s.name} className="mb-5 group">
                                <div className="flex items-center justify-between text-sm mb-1">
                                    <div className="flex items-center gap-2">
                                        {s.icon}
                                        <span>{s.name}</span>
                                    </div>
                                    <span>{s.level}%</span>
                                </div>
                                <motion.div
                                    className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.level}%` }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full group-hover:scale-x-105 transform origin-left transition-all duration-500"></div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        className="p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-lg backdrop-blur-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-2 text-primary">
                            Tools & Platforms
                        </h3>
                        {skillsData.tools.map((s) => (
                            <div key={s.name} className="mb-5 group">
                                <div className="flex items-center justify-between text-sm mb-1">
                                    <div className="flex items-center gap-2">
                                        {s.icon}
                                        <span>{s.name}</span>
                                    </div>
                                    <span>{s.level}%</span>
                                </div>
                                <motion.div
                                    className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.level}%` }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    <div className="h-full bg-gradient-to-r from-gray-700 to-gray-500 rounded-full group-hover:scale-x-105 transform origin-left transition-all duration-500"></div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        className="p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-lg backdrop-blur-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-5 text-primary">
                            Professional Strengths
                        </h3>
                        <div className="flex flex-wrap overflow-x-auto gap-3 justify-center md:justify-start">
                            {skillsData.softSkills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
                                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full font-medium cursor-pointer shadow-sm transition-all duration-300"
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
