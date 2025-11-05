// src/components/TimelineSection.jsx
import React from "react";
import {
    FaBriefcase,
    FaCertificate,
    FaChalkboardTeacher,
    FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

// --- Timeline Data ---
const timelineData = [
    { type: "divider", label: "Experience" },

    {
        side: "right",
        year: "Jan 2025 – Present",
        title: "Frontend Development Journey",
        // company: "Self-Employed", // Added company for consistency
        subtitle: "Building real-world projects with React, Tailwind CSS & Firebase",
        icon: <FaBriefcase />,
        color: "bg-yellow-400",
    },

    {
        side: "right",
        year: "Sep 2022 – Oct 2023",
        title: "Data Solution & Due Diligence",
        company: "SEBPO",
        subtitle: "Data review • Accuracy checking • Process documentation • Reporting",
        icon: <FaBriefcase />,
        color: "bg-yellow-400",
    },

    { type: "divider", label: "Certificates" },

    {
        side: "left",
        year: "2025",
        title: "Complete Web Development",
        subtitle: "Programming Hero",
        icon: <FaCertificate />,
        color: "bg-purple-400",
        // link: "https://drive.google.com/file/d/YOUR_PDF_LINK/view",
    },

    {
        side: "left",
        year: "2022",
        title: "Professional Digital Content Management",
        subtitle: "Content planning • Online content workflow • Digital tools",
        icon: <FaChalkboardTeacher />,
        color: "bg-rose-400",
        // link: "https://drive.google.com/file/d/YOUR_PDF_LINK/view",
    },

    { type: "divider", label: "Education" },

    {
        side: "right",
        year: "2018 – 2023",
        title: "Bachelor of Arts in History",
        subtitle: "Dhaka College, Bangladesh",
        icon: <FaGraduationCap />,
        color: "bg-indigo-400",
    },

    {
        side: "right",
        year: "2016 – 2018",
        title: "Higher Secondary Certificate (Science)",
        subtitle: "Satkhira Govt. College",
        icon: <FaGraduationCap />,
        color: "bg-indigo-400",
    },
];


// --- Timeline Item (UPGRADED FOR MOBILE) ---
const TimelineItem = ({ item }) => {
    const isRight = item.side === "right";

    // Force text to left on mobile for single-column alignment
    const cardBaseClasses = `p-4 bg-gradient-to-b from-white to-gray-100 dark:from-[#131924] dark:to-[#070e19] 
        border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:bg-gray-100 
        dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer 
        text-left`;

    const card = (
        <div className={cardBaseClasses}>
            <p className="text-sm font-mono text-indigo-700 dark:text-indigo-400 mb-1 tracking-widest">
                {item.year}
            </p>
            <h3 className="text-lg font-bold text-black dark:text-white mb-1">
                {item.title}
            </h3>
            {item.company && (
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">
                    {item.company}
                </p>
            )}
            <p className="dark:text-gray-400 text-gray-600 text-sm">{item.subtitle}</p>
        </div>
    );

    const wrappedCard = item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
            {card}
        </a>
    ) : (
        card
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: isRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative flex flex-col md:flex-row w-full mb-8"
        >

            {/* LEFT HALF - Renders content ONLY on DESKTOP (md+) if side is LEFT */}
            <div className={`w-0 md:w-1/2 ${!isRight ? 'md:flex md:justify-end md:pr-8' : ''}`}>
                {!isRight && <div className="hidden md:block">{wrappedCard}</div>}
            </div>

            {/* CENTER CIRCLE - Mobile-adjusted positioning: left:0 on mobile, centered on desktop */}
            <div className="absolute  md:left-1/2 transform md:-translate-x-1/2 top-5/12  md:top-5/12 left-0  z-10 
                        w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200 dark:bg-black flex items-center justify-center
                        shadow-lg ring-4 ring-gray-400 dark:ring-gray-900">
                <div
                    className={`${item.color} w-4 h-4 rounded-full flex items-center justify-center md:w-6 md:h-6`}
                >
                    {React.cloneElement(item.icon, { className: "w-3 h-3 text-black" })}
                </div>
            </div>

            {/* RIGHT HALF - Renders content ALWAYS on MOBILE, and on DESKTOP if side is RIGHT */}
            {/* pl-8 ensures content starts after the icon on mobile */}
            <div className={`w-full md:w-1/2 flex justify-start pl-8 md:pl-8`}>
                {/* Desktop right card */}
                {isRight && wrappedCard}

                {/* Mobile card: always display the content, hidden on desktop if it's a left item */}
                <div className={`w-full md:hidden ${!isRight ? '' : 'hidden'}`}>
                    {wrappedCard}
                </div>
            </div>
        </motion.div>
    );
};

// --- Timeline Divider ---
const TimelineDivider = ({ label }) => (
    <div className="relative my-12 md:my-14 flex justify-center w-full">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-700/50 dark:bg-gray-800 transform -translate-y-1/2"></div>
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-md font-semibold px-4 py-1 bg-gray-900 dark:bg-gray-900 z-20 uppercase tracking-widest text-white border border-gray-700 rounded-full"
        >
            {label}
        </motion.span>
    </div>
);

// --- Main Timeline Section (UPGRADED FOR MOBILE) ---
const TimelineSection = () => (
    <section className="py-12 md:py-16 mx-auto max-w-7xl px-6 md:px-16 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-14 text-center"
            >
                Education & <span className="text-blue-600 dark:text-blue-400">Experience</span>
            </motion.h2>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line: On mobile, it's on the far left (left-3). On desktop, it's centered (md:left-1/2). */}
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gray-700/50 dark:bg-gray-800 h-full"></div>

                {timelineData.map((item, index) =>
                    item.type === "divider" ? (
                        <TimelineDivider key={index} label={item.label} />
                    ) : (
                        <TimelineItem key={index} item={item} />
                    )
                )}
            </div>
        </div>
    </section>
);

export default TimelineSection;