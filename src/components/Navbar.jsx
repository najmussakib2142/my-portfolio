import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");
  const location = useLocation();
  const navigate = useNavigate(); // new

  const navItems = useMemo(() => [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
  ], []);

  // Updated handleClick
  const handleClick = (id) => {
    if (location.pathname === "/") {
      // Home page → scroll normally
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    } else {
      // Detail page → navigate to home with hash
      navigate(`/#${id}`);
      setMobileOpen(false);
    }
  };

  // IntersectionObserver to detect active section
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = navItems.map((item) => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topEntry = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActive(topEntry.target.id);
        }
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, [navItems, location.pathname]);

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => handleClick(item.id)}
        className={`px-3 py-1 rounded transition-colors cursor-pointer ${active === item.id
          ? "text-primary font-semibold"
          : "text-gray-700 dark:text-gray-200 hover:text-primary"
          } ${isMobile ? "block w-full text-left" : "inline-block"}`}
      >
        {item.name}
      </button>
    ));

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/10 dark:bg-gray-950/50 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl px-3 md:pl-12 md:pr-16 mx-auto flex justify-between items-center py-1">
        {/* Logo */}
        <Link to={"/"} className="text-3xl font-extrabold">
          <span className="text-slate-900 dark:text-white">N</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
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
