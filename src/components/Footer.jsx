import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-gray-300 dark:border-gray-700 py-8">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6 text-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <NavLink to="/about" className="hover:text-primary transition-colors">
            About
          </NavLink>
          <NavLink  Link to="/projects" className="hover:text-primary transition-colors">
            Projects
          </NavLink>
          <NavLink to="/contact" className="hover:text-primary transition-colors">
            Contact
          </NavLink>
        </nav>

        {/* Social Links */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/najmussakib2142"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sm-najmus-sakib"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <div className="flex items-center ">
            <FaWhatsapp className="" />
            <a
              href="https://wa.me/8801736007474"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
             
            </a>
          </div>
          <a
            href="mailto:najmussakib2142@gmail.com"
            className="hover:text-primary transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gray-400/50"></div>

        {/* Copyright */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} <span className="font-semibold">Najmus Sakib</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// { Icon: FaGithub, link: "https://github.com/najmussakib2142" },
// { Icon: FaLinkedin, link: "https://www.linkedin.com/in/sm-najmus-sakib" },
// { Icon: FaWhatsapp, link: "https://wa.me/8801736007474" },].map(({ Icon, link }, idx) => (
// { Icon: FaEnvelope, link: "mailto:najmussakib2142@gmail.com" },

