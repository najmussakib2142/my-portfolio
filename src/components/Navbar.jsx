import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const location = useLocation();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    // { name: "Contact", href: "#contact-banner" },
  ];

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <Link
        key={item.name}
        smooth
        to={`/${item.href}`} // works across pages
        className={`text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-3 py-1 rounded ${isMobile ? "block w-full" : "inline-block"}`}
        onClick={() => isMobile && setMobileOpen(false)}
      >
        {item.name}
      </Link>
    ));

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/10 dark:bg-gray-950/50 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-0.5">
        {/* Logo */}
        <Link smooth to="/" className="text-3xl md:ml-2 font-extrabold">
          <span className="text-slate-900 dark:text-white">N</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {renderNavLinks()}
          <Link smooth to="/#contact-banner">
            <button className="bg-black dark:bg-white text-white dark:text-black px-3 py-1  transition hover:scale-105">
              Let's Chat
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          <div className="flex flex-col p-4 space-y-2">{renderNavLinks(true)}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
