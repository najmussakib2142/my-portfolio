import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-gray-300 dark:border-gray-700 py-8">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6 text-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:najmus.sakib@example.com"
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
