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
    FaCheckCircle
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVite } from "react-icons/si";

// --- Data & Helper Components (Kept for Context) ---

const skillsData = {
    coreTech: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-6 h-6" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-500 w-6 h-6" /> },
        { name: "React", icon: <FaReact className="text-cyan-500 w-6 h-6" /> },
        { name: "React Router", icon: <FaReact className="text-cyan-400 w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-6 h-6" /> },
    ],

    tools: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-gray-700 w-6 h-6" /> },
        { name: "Vite", icon: <SiVite className="text-purple-600 w-6 h-6" /> },
        { name: "Firebase Auth", icon: <SiFirebase className="text-yellow-600 w-6 h-6" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-600 w-6 h-6" /> },
        { name: "Postman", icon: <FaDatabase className="text-orange-500 w-6 h-6" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500 w-6 h-6" /> },
    ],

    whatICanDo: [
        "Build responsive, mobile-first UIs using React & Tailwind",
        "Create reusable and optimized React components",
        "Integrate RESTful APIs with Axios & Fetch",
        "Implement protected routes using Firebase Authentication",
        "Build forms with validation (React Hook Form)",
        "Manage server state using TanStack Query",
        "Use Framer Motion for smooth animations",
        "Deploy production-ready sites with Vercel & Netlify",
        "Write clean, scalable, maintainable code",
    ],

    softSkills: [
        "Problem Solving",
        "Clear Communication",
        "Effective Team Collaboration",
        "Strong Adaptability",
        "Time Management",
        "Attention to Detail",
        "Continuous Learning Mindset",
    ],
};

const SkillCard = ({ children, title, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="p-6 bg-gradient-to-b from-white to-gray-100 dark:from-[#131924] dark:to-[#070e19]
        rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-colors h-full" // Added h-full to ensure cards stretch vertically in the same row
    >
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        {children}
    </motion.div>
);

const BadgeGrid = ({ data }) => (
    // Changed to a 3-column grid to make badges slightly smaller when span is 4
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((item) => (
            <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-md cursor-pointer"
            >
                {item.icon}
                <span className="text-sm truncate">{item.name}</span>
            </motion.div>
        ))}
    </div>
);

// --- Modified Skills Component ---

const Skills = () => {
    return (
        <section id="skills" className="py-12 md:py-16 px-6 md:px-16 max-w-7xl mx-auto">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                    Technical Stack & Expertise
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                    The refined set of technologies and core competencies I leverage to deliver modern web solutions.
                </p>
            </motion.div>

            {/* Grid Layout - Asymmetric/Staggered */}
            <div className="grid md:grid-cols-6 gap-6">

                {/* 1. Core Technologies - Primary focus (4/6 columns) */}
                <div className="md:col-span-4">
                    <SkillCard title="Core Technologies">
                        {/* Switched to a 3-column badge grid to better fill the 4-column space */}
                        <BadgeGrid data={skillsData.coreTech} />
                    </SkillCard>
                </div>

                {/* 2. Tools & Platforms - Secondary focus (2/6 columns) */}
                <div className="md:col-span-2">
                    <SkillCard title="Tools & Platforms" delay={0.15}>
                        {/* Kept 2-column badge grid as it fits the 2-column space well */}
                        <BadgeGrid data={skillsData.tools} />
                    </SkillCard>
                </div>

                {/* 3. Professional Strengths (Soft Skills) - Smallest block (2/6 columns) */}
                {/* Note: This is now placed in the second row, aligned with "What I Can Do" */}
                <div className="md:col-span-2">
                    <SkillCard title="Professional Strengths" delay={0.3}>
                        <div className="flex flex-wrap gap-3">
                            {skillsData.softSkills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full font-medium shadow-sm cursor-pointer text-sm"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </SkillCard>
                </div>

                {/* 4. What I Can Do – Blue Tick Version - Wide content (4/6 columns) */}
                <div className="md:col-span-4">
                    <SkillCard title="What I Can Do" delay={0.45}>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            {skillsData.whatICanDo.map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ scale: 1.02, x: 6 }}
                                    className="flex  gap-2 text-sm"
                                >
                                    <FaCheckCircle className="text-blue-500 w-4 h-4" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </SkillCard>
                </div>
            </div>
        </section>
    );
};

export default Skills;