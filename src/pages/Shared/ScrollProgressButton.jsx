import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaArrowUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollProgressButton = () => {
    const [progress, setProgress] = useState(0);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progressValue = (scrollTop / docHeight) * 100;
            setProgress(progressValue);

            setShowTopBtn(scrollTop > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            {showTopBtn && (
                <div
                    data-aos="fade-up"
                    className="fixed bottom-10 right-10  z-50 w-12 h-12 group"
                >
                    <div className="relative  w-full h-full">
                        {/* Circular progress ring */}
                        <CircularProgressbar
                            value={progress}
                            strokeWidth={6}
                            styles={buildStyles({
                                pathColor: "#0ea5e9", 
                                trailColor: "#e5e7eb", 
                                pathTransitionDuration: 0.15,
                            })}
                            className="dark:[&_.CircularProgressbar-path]:stroke-[#225cee]
                         dark:[&_.CircularProgressbar-trail]:stroke-[#1f2937]"
                        />

                        
                        <button
                            onClick={scrollToTop}
                            className="absolute inset-1 flex items-center justify-center rounded-full bg-primary text-white shadow-lg 
                        hover:scale-110 transition-transform duration-300
                        dark:bg-transparent dark:opacity-100 "
                        >
                            <FaArrowUp size={30} color="#0ea5e9"/>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollProgressButton;
