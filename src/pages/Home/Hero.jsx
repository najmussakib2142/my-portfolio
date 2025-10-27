import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaArrowUp, FaEnvelope, FaWhatsapp } from "react-icons/fa";


const Hero = () => {

    const forceDownload = async () => {
        try {
            const res = await fetch("/my-resume.pdf", { cache: "no-cache" });
            if (!res.ok) throw new Error("Network response was not ok");
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Najmus-Sakib-CV.pdf"; // filename the user will get
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("Download failed:", err);
            // fallback: open in new tab so user can right-click -> save
            window.open("/my-resume.pdf", "_blank", "noopener,noreferrer");
        }
    };


    return (
        <div className="font-roboto overflow-hidden">
            {/* HERO SECTION */}
            <section
                className="relative  flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-24 gap-12 overflow-hidden"
                data-aos="fade-up"
            >
                {/* --- Animated Background Glow --- */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -z-10 top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute -z-10 bottom-0 right-0 w-80 h-80 bg-secondary/10 blur-3xl rounded-full"
                ></motion.div>

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
                            href="https://drive.google.com/file/d/1FyPK7lkl5Mm-EjoVHerNo_y8aOjxkYpL/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
                        >
                            View CV
                        </a>
                        <button
                            onClick={forceDownload}
                            className="btn cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 relative z-50 pointer-events-auto"
                        >
                            Download CV
                        </button>






                    </div>

                    {/* --- Social Icons --- */}
                    <div className="flex justify-center md:justify-start gap-6 text-2xl mt-8">
                        {[
                            { Icon: FaGithub, link: "https://github.com/najmussakib2142" },
                            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/sm-najmus-sakib" },
                            { Icon: FaWhatsapp, link: "https://wa.me/8801736007474" },
                            { Icon: FaEnvelope, link: "mailto:najmussakib2142@gmail.com" },
                        ].map(({ Icon, link }, idx) => (
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

                {/* --- Right Image Section --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="relative group"
                    >
                        {/* Animated glow ring */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>

                        <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                            {/* Dim and overlay the image */}
                            <img
                                src="https://i.ibb.co/mCsF003L/Chat-GPT-Image-Sep-6-2025-11-02-32-PM.png"
                                alt="Najmus Sakib"
                                className="object-cover w-full h-full brightness-80 contrast-100 transition duration-500 group-hover:brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ABOUT SECTION */}
            



            {/* SKILLS SECTION */}


            {/* EDUCATION SECTION */}

            {/* PROJECTS SECTION */}


            {/* CONTACT CTA */}



            {/* SCROLL TO TOP BUTTON */}

        </div>
    );
};

export default Hero;
