import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVite } from "react-icons/si";


const skillsData = {
    frontend: [
        { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-700 w-5 h-5" /> },
        { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-700 w-5 h-5" /> },
        { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-800 w-5 h-5" /> },
        { name: "React", level: 80, icon: <FaReact className="text-cyan-600 w-5 h-5" /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-teal-600 w-5 h-5" /> },
    ],
    tools: [
        { name: "Git & GitHub", level: 80, icon: <FaGitAlt className="text-gray-700 w-5 h-5" /> },
        { name: "Vite", level: 70, icon: <SiVite className="text-purple-600 w-5 h-5" /> },
        { name: "Firebase", level: 65, icon: <SiFirebase className="text-yellow-700 w-5 h-5" /> },
        { name: "Figma", level: 75, icon: <FaFigma className="text-gray-800 w-5 h-5" /> },
        { name: "Database", level: 70, icon: <FaDatabase className="text-gray-600 w-5 h-5" /> },
    ],
    softSkills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Time Management",
        "Adaptability",
        "Creativity",
    ],
};

const Skills = () => {
    return (
        <div>
            <section id="skills" className="py-20 bg-gradient-to-b from-base-100 to-base-200">
                <div className="container mx-auto px-6 md:px-16">
                    <h2 className="text-3xl font-bold mb-12 text-center md:text-left text-primary">
                        Skills & Tools
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Frontend */}
                        <div data-aos="fade-up">
                            <h3 className="font-semibold mb-5 text-lg flex items-center gap-2">
                                Frontend
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
                                    <div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full group-hover:from-indigo-500 group-hover:to-indigo-300 transition-all duration-700"
                                            style={{ width: `${s.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tools */}
                        <div data-aos="fade-up" data-aos-delay="150">
                            <h3 className="font-semibold mb-5 text-lg flex items-center gap-2">
                                Tools
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
                                    <div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-gray-700 to-gray-500 rounded-full group-hover:from-gray-600 group-hover:to-gray-400 transition-all duration-700"
                                            style={{ width: `${s.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Soft Skills */}
                        <div data-aos="fade-up" data-aos-delay="300">
                            <h3 className="font-semibold mb-5 text-lg">Soft Skills</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                {skillsData.softSkills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="hover:text-primary transition-colors cursor-pointer"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;