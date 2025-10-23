import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ResumeButton from "./ResumeButton";
import { useTheme } from "../providder/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        className={({ isActive }) =>
          `${
            isActive
              ? "text-primary  font-semibold border-b-2 border-primary"
              : "text-gray-600 dark:text-gray-300 hover:text-primary"
          } transition-colors  px-3 py-1 rounded ${isMobile ? "block" : "inline-block"}`
        }
        onClick={() => isMobile && setMobileOpen(false)}
      >
        {item.name}
      </NavLink>
    ));

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Najmus Sakib
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {renderNavLinks()}

          {/* Resume Button */}
          <ResumeButton />

          {/* Theme Switch */}
          <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-full p-1">
            <button
              onClick={() => toggleTheme("light")}
              className={`rounded-full p-2 transition ${
                theme === "light"
                  ? "bg-base-100 text-yellow-500"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              aria-label="Switch to light mode"
            >
              ☀️
            </button>
            <button
              onClick={() => toggleTheme("dark")}
              className={`rounded-full p-2 transition ${
                theme === "dark"
                  ? "bg-indigo-100 text-indigo-500"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              aria-label="Switch to dark mode"
            >
              🌙
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            ☰
          </button>

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-all"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-base-100 dark:bg-gray-900 shadow-lg rounded-b-lg"
        >
          <div className="flex flex-col items-start p-4 space-y-2">{renderNavLinks(true)}</div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
