import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // useEffect(() => {
  //   setMobileOpen(false);
  // }, [location.pathname]);

  // useEffect(() => {
  //   const onEsc = (e) => e.key === "Escape" && setMobileOpen(false);
  //   document.addEventListener("keydown", onEsc);
  //   return () => document.removeEventListener("keydown", onEsc);
  // }, []);


  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => handleClick(item.id)}
        className={`px-3 py-1 rounded transition-colors cursor-pointer ${active === item.id
          ? "text-primary font-semibold"
          : "text-gray-700 dark:text-gray-200 hover:text-primary"
          }
            ${isMobile
            ? "w-full text-left py-2 border-b border-gray-300/30 dark:border-gray-700/40 last:border-b-0"
            : "inline-block"
          }        
          `}
      >
        {item.name}
      </button>
    ));

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/60 dark:bg-gray-950/50 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl px-3 md:pl-12 md:pr-16 mx-auto flex justify-between items-center py-1">
        {/* Logo */}
        <Link to={"/"} className="text-3xl font-extrabold">
          <span className="text-slate-900 dark:text-white">N</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {renderNavLinks()}
          {/* <button
            onClick={() => handleClick("contact-banner")}
            className="bg-black cursor-pointer dark:bg-white text-white dark:text-black px-3 py-1 transition hover:scale-105"
          >
            Let's Chat
          </button> */}
          <button
            onClick={() => handleClick("contact-banner")}
            className="relative p-[2px] overflow-hidden  transition hover:scale-105">
            {/* The Animated Border Container */}
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#3b82f6_360deg)]"
              />
            </div>

            {/* The Actual Button Content */}
            <span className="relative bg-black cursor-pointer dark:bg-white text-white dark:text-black px-3 py-1 transition hover:scale-105 z-10 block  ">
              Let's Chat
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            ref={buttonRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition  duration-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/60 dark:bg-gray-950/50 backdrop-blur-md shadow-md rounded-b-lg"
          >
            <div className="flex flex-col p-4">
              {renderNavLinks(true)}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                // transition={{ delay: index * 0.05 }}
                onClick={() => handleClick("contact-banner")}
                className="relative mt-3 p-[2px] overflow-hidden"
              >
                <div className="absolute inset-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#3b82f6_360deg)]"
                  />
                </div>

                <span className="relative block bg-black dark:bg-white text-white dark:text-black px-3 py-2 z-10">
                  Let's Chat
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
