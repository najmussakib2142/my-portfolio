import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from "../providder/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";


const RootLayout = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

            <button
                onClick={toggleTheme}
                className=" fixed right-0 bottom-1/4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-50 flex items-center justify-center bg-gray-200
                 dark:bg-gray-800 text-gray-900 dark:text-white w-12 h-12 md:w-11 md:h-11 rounded-l-2xl shadow-md hover:shadow-lg hover:scale-105
                  transition-transform duration-300 focus:outline-none "
            >
                {theme === "dark" ? (
                    <FaSun className="w-6 h-6" />
                ) : (
                    <FaMoon className="w-6 h-6" />
                )}
            </button>

        </div>
    );
};

export default RootLayout;