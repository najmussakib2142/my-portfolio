import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../providder/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];
  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={`text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-3 py-1 rounded ${isMobile ? "block" : "inline-block"}`}
        onClick={() => isMobile && setMobileOpen(false)}
      >
        {item.name}
      </a>
    ));

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-950/50 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl  mx-auto flex justify-between items-center px-4 md:px-10 py-0">

        {/* --- Logo --- */}
        <Link
          to="/"
          className="text-3xl font-extrabold "
        >
          <span className="text-slate-900 dark:text-white">N</span><span className="text-primary font-extrabold">.</span>
        </Link>


        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-6">
          {renderNavLinks()}

          {/* --- Theme Switch --- */}
          <div className="hidden">
            <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-full p-0.5">
              <button
                onClick={() => toggleTheme("light")}
                className={`rounded-full p-1 transition ${theme === "light"
                  ? "bg-base-100 text-yellow-500"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                aria-label="Switch to light mode"
              >
                ☀️
              </button>
              <button
                onClick={() => toggleTheme("dark")}
                className={`rounded-full p-1 transition ${theme === "dark"
                  ? "bg-indigo-100 text-indigo-500"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                aria-label="Switch to dark mode"
              >
                🌙
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        <div className="md:hidden flex items-center gap-">


          {/* <div className="hidden"></div> */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown --- */}
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
