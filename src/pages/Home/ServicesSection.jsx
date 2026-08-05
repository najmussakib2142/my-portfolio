// import { FaLaptopCode, FaPaintBrush, FaFilm } from "react-icons/fa";

import { FaLaptopCode, FaChartLine, FaShoppingCart, FaMobileAlt, FaRocket, FaUserCircle } from "react-icons/fa";

// const services = [
//     {
//         icon: <FaMobileAlt className="text-purple-500 text-3xl" />,
//         title: "Responsive Web Design",
//         description:
//             "Mobile-first website development using Tailwind CSS or styled-components to ensure a seamless experience across all devices.",
//     },
//     // {
//     //     icon: <FaRocket className="text-yellow-400 text-3xl" />,
//     //     title: "Website Optimization",
//     //     description:
//     //         "Performance tuning and SEO-friendly components to make websites faster, more efficient, and easier to discover online.",
//     // },
//     // {
//     //     icon: <FaLaptopCode className="text-green-500 text-3xl" />,
//     //     title: "Landing Pages & Marketing Sites",
//     //     description:
//     //         "Fast, engaging single-page apps to showcase products, services, or campaigns effectively.",
//     // },
//     {
//         icon: <FaUserCircle className="text-blue-500 text-3xl" />,
//         title: "Portfolio Websites",
//         description:
//             "Custom React-based portfolios for individuals or startups with dynamic content and interactive components.",
//     },
//     {
//         icon: <FaChartLine className="text-pink-500 text-3xl" />,
//         title: "Interactive Dashboards",
//         description:
//             "Data-driven dashboards using the MERN stack with Chart.js or Recharts for visualizing insights effectively.",
//     },
//     // {
//     //     icon: <FaShoppingCart className="text-red-500 text-3xl" />,
//     //     title: "E-commerce Development",
//     //     description:
//     //         "Building simple and scalable online shops using React frontend and Node/Mongo backend.",
//     // },
// ];

const services = [
    {
        icon: <FaMobileAlt className="text-gray-800 dark:text-gray-300 text-3xl" />,
        title: "Responsive Web Design",
        description:
            "Creating mobile-first websites with React and Tailwind CSS or styled-components, ensuring seamless experiences across all devices.",
    },
    {
        icon: <FaUserCircle className="text-gray-800 dark:text-gray-300 text-3xl" />,
        title: "Portfolio Websites",
        description:
            "Developing dynamic, interactive portfolios for individuals and startups, showcasing skills, projects, and brand identity effectively.",
    },
    {
        icon: <FaChartLine className="text-gray-800 dark:text-gray-300 text-3xl" />,
        title: "Interactive Dashboards",
        description:
            "Building data-driven dashboards using the MERN stack with Chart.js or Recharts, helping clients visualize insights clearly and interactively.",
    },
];


const ServicesSection = () => {
    return (
        <section
            className="py-12 md:py-16  bg-gradient-to-b from-gray-50 to-white text-gray-800 dark:from-[#0e151f] dark:to-[#060d18] dark:text-gray-200 transition-colors duration-500"
        // style={{ clipPath: "ellipse(50% 100% at 50% 0%)" }}
        >
            <div className="max-w-7xl mx-auto  px-6 md:px-16">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 text-black dark:text-white">
                        Services I Offer
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto text-center">
                        I build modern, responsive web applications using React, Next.js, Firebase, and the MERN stack — from business websites and dashboards to full-stack applications with authentication and payment integration.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 text-left gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6  bg-gradient-to-b from-white to-gray-100 dark:from-[#131924] dark:to-[#070e19]  rounded-lg border border-gray-200 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-700  transition-colors duration-300 cursor-pointer shadow-sm dark:shadow-none"
                        >
                            <div className="mb-5">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ServicesSection;
