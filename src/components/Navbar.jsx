import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
  ];

  // Scroll to section on click
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  // IntersectionObserver to detect active section
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => handleClick(item.id)}
        className={`px-3 py-1 rounded transition-colors ${
          active === item.id
            ? "text-primary font-semibold"
            : "text-gray-700 dark:text-gray-200 hover:text-primary"
        } ${isMobile ? "block w-full text-left" : "inline-block"}`}
      >
        {item.name}
      </button>
    ));

  return (
    <nav className="sticky  top-0 left-0 w-full z-50 bg-white/10 dark:bg-gray-950/50 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl px-3 md:pl-12 md:pr-16   mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <Link to={'/'} className="text-3xl font-extrabold">
          <span className="text-slate-900 dark:text-white">N</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden  md:flex items-center space-x-6">
          {renderNavLinks()}
          <button
            onClick={() => handleClick("contact-banner")}
            className="bg-black cursor-pointer dark:bg-white text-white dark:text-black px-3 py-1 transition hover:scale-105"
          >
            Let's Chat
          </button>
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
