import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";


const About = () => {
    return (
        <div>
            <section
                id="about"
                className=" px-6 py-22 md:px-16 transition-colors duration-500  text-gray-300"
                data-aos="fade-up"
            >

                {/* <section
                    id="about"
                    className="py-22 px-6 md:px-16  transition-colors duration-500"
                    data-aos="fade-up"
                >
                    
                </section> */}

                <div className="container pb-5 mx-auto max-w-4xl text-center md:text-left">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold mb-6 text-primary tracking-wide">
                        About Me
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                        My journey into <span className="text-primary font-semibold">web development</span> began from simple curiosity —
                        wondering how websites truly work behind the scenes. Over time, this curiosity grew into a deep passion for
                        crafting <span className="text-primary font-semibold">intuitive user interfaces</span> and writing clean,
                        efficient code.
                        <br />
                        <br />
                        When I’m not coding, I enjoy <span className="text-primary font-medium">football</span>, tending to my
                        <span className="text-primary font-medium"> garden</span>, and exploring new books — keeping both creativity and
                        curiosity alive.
                    </p>

                    {/* Skills Badges */}
                    <div className="flex  flex-wrap justify-center md:justify-start gap-3 mt-6">
                        {["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((skill) => (
                            <span
                                key={skill}
                                className="badge badge-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>


                <hr className="border-gray-700 mt-10 mb-3 py-5" />


                <div className="container  mx-auto max-w-4xl">

                    {/* Contact & Info */}
                    <div className="grid text-left grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 text-sm md:text-base">
                        <div>
                            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Contact</h3>
                            <p className="text-primary font-medium">najmussakib2142@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Phone</h3>
                            <p className="text-primary font-medium">+880 1736 007474</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Date of Birth</h3>
                            <p className="text-primary font-semibold">October 21, 2000</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Spoken Languages</h3>
                            <p className="text-primary font-medium">English – Bengali</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Interest</h3>
                            <p className="text-primary font-medium">Music, Reading, Journey</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Social Media</h3>
                            <div className="flex justify-center md:justify-start gap-6 text-xl mt-3">
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
                        </div>

                    </div>

                    {/* Social Media Icons */}

                </div>
            </section>

        </div>
    );
};

export default About;