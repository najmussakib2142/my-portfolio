import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const forceDownload = async () => {
    try {
      const res = await fetch("/my-resume.pdf", { cache: "no-cache" });
      if (!res.ok) throw new Error("Network response was not ok");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Najmus-Sakib-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
      window.open("/my-resume.pdf", "_blank", "noopener,noreferrer");
    }
  };

  // Parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  const imageX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const imageY = useTransform(mouseY, [-1, 1], [-20, 20]);

  return (
    <div className="font-roboto " onMouseMove={handleMouseMove}>
      <section className="relative py-14 md:py-24   flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>

        <div className="relative max-w-7xl z-10 px-6 md:px-16 container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left space-y-5"
          >
            {/* --- Heading --- */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
              Hi, I’m{" "}
              <span className="text-gray-900 dark:text-gray-100">Najmus Sakib</span>
            </h1>

            {/* --- Subheading --- */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Frontend Developer | React Enthusiast | Lifelong Learner
            </p>

            {/* --- Buttons --- */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <a
                href="#projects"
                className="btn bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                🚀 View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1FyPK7lkl5Mm-EjoVHerNo_y8aOjxkYpL/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gray-800 text-white hover:bg-gray-600 transition-colors"
              >
                View CV
              </a>
              <button
                onClick={forceDownload}
                className="btn bg-gray-800 text-white hover:bg-gray-600 transition-colors"
              >
                Download CV
              </button>
            </div>

            {/* --- Social Icons --- */}
            <div className="flex justify-center md:justify-start gap-6 text-2xl mt-8 text-gray-700 dark:text-gray-300">
              {[
                { Icon: FaGithub, link: "https://github.com/najmussakib2142" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/sm-najmus-sakib" },
                { Icon: FaWhatsapp, link: "https://wa.me/8801736007474" },
                { Icon: FaEnvelope, link: "mailto:najmussakib2142@gmail.com" },
              ].map(({ Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>


          {/* Image Section with Parallax */}
          <motion.div
            className="flex-1 flex  justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              style={{ x: imageX, y: imageY }}
              className="relative w-64 h-64  md:w-80 md:h-80 overflow-hidden shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 dark:to-white/20 pointer-events-none"></div>

              <img
                src="https://i.ibb.co/mCsF003L/Chat-GPT-Image-Sep-6-2025-11-02-32-PM.png"
                alt="Najmus Sakib"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;