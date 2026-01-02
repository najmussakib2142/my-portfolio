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

  const navItems = useMemo(
    () => [
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Education", id: "education" },
      { name: "Projects", id: "projects" },
    ],
    []
  );

  // ===== Navigation handler =====
  const handleClick = (id) => {
    setMobileOpen(false);

    if (location.pathname === "/") {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  // ===== Active section observer =====
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [navItems, location.pathname]);

  // ===== Click outside (mobile safe) =====
  useEffect(() => {
    const handleOutside = (e) => {
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

    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Close only if user scrolls down meaningfully
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setMobileOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  // useEffect(() => {
  //   document.body.style.overflow = mobileOpen ? "hidden" : "";
  //   return () => (document.body.style.overflow = "");
  // }, [mobileOpen]);


  // ===== Nav links =====
  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => handleClick(item.id)}
        className={`px-3 py-1 transition-colors cursor-pointer
          ${active === item.id
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
    <nav className="sticky top-0 left-0 w-full z-50 relative bg-white dark:bg-gray-950 backdrop-blur-md shadow-md">
      <div className="max-w-7xl px-3 md:pl-12 md:pr-16 mx-auto flex justify-between items-center py-1">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold">
          <span className="text-slate-900 dark:text-white">N</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {renderNavLinks()}
          <button
            onClick={() => handleClick("contact-banner")}
            className="relative p-[2px] overflow-hidden transition hover:scale-105"
          >
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#3b82f6_360deg)]"
              />
            </div>
            <span className="relative bg-black dark:bg-white text-white dark:text-black px-3 py-1 z-10 block">
              Let's Chat
            </span>
          </button>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={() => setMobileOpen((p) => !p)}
            className="text-2xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown (floating, no layout shift) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 backdrop-blur-md shadow-md rounded-b-lg"
          >
            <div className="flex flex-col p-4">
              {renderNavLinks(true)}

              <button
                onClick={() => handleClick("contact-banner")}
                className="relative mt-3 p-[2px] overflow-hidden"
              >
                <div className="absolute inset-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#3b82f6_360deg)]"
                  />
                </div>
                <span className="relative bg-black dark:bg-white text-white dark:text-black px-3 py-2 z-10 block">
                  Let's Chat
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
