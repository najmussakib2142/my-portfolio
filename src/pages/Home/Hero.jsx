import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaArrowUp } from "react-icons/fa";
import { projects } from "../../data/projectsData";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVite } from "react-icons/si";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Hero = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) setShowTopBtn(true);
            else setShowTopBtn(false);
        });
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
    return (
        <div className="font-roboto overflow-hidden">
            {/* HERO SECTION */}
            <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-10" data-aos="fade-up">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left space-y-5"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Hi, I’m <span className="text-primary">Najmus Sakib</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        Frontend Developer | React Enthusiast | Lifelong Learner
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                        <a href="#projects" className="btn btn-primary hover:scale-105 transition-transform">
                            🚀 View Projects
                        </a>

                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            View CV
                        </a>

                        <a
                            href="/cv.pdf"
                            download
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Download CV
                        </a>
                    </div>


                    <div className="flex justify-center md:justify-start gap-6 text-2xl mt-6">
                        {[FaGithub, FaLinkedin, FaTwitter, FaFacebook].map((Icon, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    data-aos="zoom-in"
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <img
                        src="https://i.ibb.co/mCsF003L/Chat-GPT-Image-Sep-6-2025-11-02-32-PM.png"
                        alt="Najmus Sakib"
                        className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-accent hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>
            </section>

            {/* ABOUT SECTION */} <section id="about" className="py-20 px-6 md:px-16 bg-base-100"> <div className="container mx-auto max-w-4xl text-center md:text-left"> <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2> <p className="text-gray-700 dark:text-gray-300 leading-relaxed"> I started learning web development out of curiosity — fascinated by how websites function behind the scenes. Over time, I’ve become passionate about crafting engaging user experiences with clean, modern UI and efficient code. Outside of programming, I enjoy football, sketching, and reading technology blogs — keeping both my creativity and curiosity alive. </p> </div> </section>

            {/* SKILLS SECTION */}
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

            {/* EDUCATION SECTION */}
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

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-20 px-6 md:px-16 bg-base-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-primary" data-aos="fade-up">Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                className="card bg-base-100 p-4 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
                                data-aos="zoom-in"
                                data-aos-delay={idx * 150}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded" />
                                <h3 className="text-lg font-semibold mt-3">{p.title}</h3>
                                <p className="text-gray-600 line-clamp-2">{p.description}</p>
                                <div className="mt-3 flex gap-2">
                                    <a href={p.liveLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Live</a>
                                    <a href={p.codeLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">Code</a>
                                    <Link to={`/projects/${p.id}`} className="btn btn-sm btn-outline">Details</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden" data-aos="fade-up">
                {/* Decorative Circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>

                <div className="container mx-auto text-center px-6 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                        🚀 Interested in collaborating?
                    </h3>
                    <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
                        I’m open to internships, freelance work, and exciting web projects. Let’s build something amazing together!
                    </p>

                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <Link
                            to="/contact"
                            className="btn bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
                        >
                            ✉️ Contact Me
                        </Link>

                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-transparent border border-white hover:bg-white hover:text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
                        >
                            📄 View CV
                        </a>
                    </div>
                </div>
            </section>


            {/* SCROLL TO TOP BUTTON */}
            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-focus transition"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default Hero;
