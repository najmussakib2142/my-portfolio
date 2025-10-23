import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaArrowUp, FaEnvelope, FaWhatsapp } from "react-icons/fa";
// import { projects } from "../../data/projectsData";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVite } from "react-icons/si";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard";

const Hero = () => {
    
    return (
        <div className="font-roboto overflow-hidden">
            {/* HERO SECTION */}
            <section
                className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-24 gap-12 overflow-hidden"
                data-aos="fade-up"
            >
                {/* --- Background Glow --- */}
                <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
                <div className="absolute -z-10 bottom-0 right-0 w-80 h-80 bg-secondary/10 blur-3xl rounded-full"></div>

                {/* --- Left Text Section --- */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left space-y-5"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Hi, I’m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Najmus Sakib
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                        Frontend Developer | React Enthusiast | Lifelong Learner
                    </p>

                    {/* --- Buttons --- */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                        <a
                            href="#projects"
                            className="btn btn-primary hover:scale-105 transition-transform"
                        >
                            🚀 View Projects
                        </a>

                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
                        >
                            View CV
                        </a>

                        <a
                            href="/cv.pdf"
                            download
                            className="btn bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* --- Social Icons --- */}
                    <div className="flex justify-center md:justify-start gap-6 text-2xl mt-8">
                        {[
                            { Icon: FaGithub, link: "https://github.com/najmussakib2142" },
                            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/sm-najmus-sakib" },
                            { Icon: FaWhatsapp, link: "https://wa.me/8801736007474" },].map(({ Icon, link }, idx) => (
                            { Icon: FaEnvelope, link: "mailto:najmussakib2142@gmail.com" },
                                <motion.a
                                    key={idx}
                                    whileHover={{ scale: 1.25, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                    </div>
                </motion.div>

                {/* --- Right Image --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <div className="relative group">
                        {/* Glow ring animation */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>

                        <img
                            src="https://i.ibb.co/mCsF003L/Chat-GPT-Image-Sep-6-2025-11-02-32-PM.png"
                            alt="Najmus Sakib"
                            className="relative w-56 h-56 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-700 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="py-20 px-6 md:px-16 bg-base-100"> <div className="container mx-auto max-w-4xl text-center md:text-left"> <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2> <p className="text-gray-700 dark:text-gray-300 leading-relaxed"> I started learning web development out of curiosity — fascinated by how websites function behind the scenes. Over time, I’ve become passionate about crafting engaging user experiences with clean, modern UI and efficient code. Outside of programming, I enjoy football, sketching, and reading technology blogs — keeping both my creativity and curiosity alive. </p> </div> </section>

            {/* SKILLS SECTION */}
            

            {/* EDUCATION SECTION */}
           
            {/* PROJECTS SECTION */}


            {/* CONTACT CTA */}



            {/* SCROLL TO TOP BUTTON */}
            
        </div>
    );
};

export default Hero;
