import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-24 px-6 md:px-16 bg-base-100 overflow-hidden"
            data-aos="fade-up"
        >
            {/* --- Background glow shapes --- */}
            <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="absolute -z-10 bottom-10 right-10 w-72 h-72 bg-secondary/10 blur-3xl rounded-full"></div>

            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-10">
                {/* --- Image side (optional, can replace later) --- */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>
                        <img
                            src="https://i.ibb.co/mCsF003L/Chat-GPT-Image-Sep-6-2025-11-02-32-PM.png"
                            alt="Najmus Sakib"
                            className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                {/* --- Text side --- */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center md:text-left space-y-6"
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        About Me
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        I started learning web development out of curiosity — fascinated by
                        how websites function behind the scenes. Over time, I’ve become
                        passionate about crafting engaging user experiences with clean,
                        modern UI and efficient code.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        Outside of programming, I enjoy football, sketching, and reading
                        technology blogs — keeping both my creativity and curiosity alive.
                    </p>

                    {/* --- Quick Info badges --- */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                        {[
                            "Frontend Developer",
                            "React Enthusiast",
                            "Team Player",
                            "Lifelong Learner",
                        ].map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full border border-primary/30 bg-primary/10 text-primary font-medium hover:bg-primary/20 transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
