

// const Navbar = () => {
//   return (
//     <nav className="bg-base-100 shadow">
//       <div className="max-w-6xl mx-auto px-4 py-2">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="text-lg font-bold">
//             My Portfolio
//           </Link>
//           <div className="space-x-4">
// <Link to="/" className="link link-hover">Home</Link>
// <Link to="/projects" className="link link-hover">Projects</Link>
// <Link to="/about" className="link link-hover">About</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import { Link } from "react-router-dom";


import { Link, NavLink } from "react-router-dom";
import ResumeButton from "./ResumeButton";
import { useTheme } from "../providder/ThemeContext";
// import ResumeButton from "./ResumeButton";

const Navbar = () => {

   const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex-1 px-4 md:px-8">
        <Link to="/" className="text-xl font-bold">Najmus Sakib</Link>
      </div>

      <div className="hidden md:block">
        <div className="flex  items-center space-x-1 md:space-x-2">
          <div className="flex items-center bg-gray-300 dark:bg-gray-700 rounded-full md:p-0.5 transition-colors">
            <button
              onClick={() => toggleTheme('light')}
              className={`md:p-1 rounded-full transition-colors ${theme === 'light'
                ? 'bg-base-100 text-yellow-600'
                : 'text-gray-600 dark:text-gray-300'
                }`}
              aria-label="Switch to light mode"
            >
              <span className="text-base md:text-xl">☀️</span>
            </button>

            <button
              onClick={() => toggleTheme('dark')}
              className={`md:p-1 rounded-full transition-colors ${theme === 'dark'
                ? 'bg-indigo-100 text-indigo-500'
                : 'text-gray-600 dark:text-gray-300'
                }`}
              aria-label="Switch to dark mode"
            >
              <span className="text-base md:text-xl">🌙</span>
            </button>
          </div>
        </div>
      </div>


      <div className="block md:hidden">
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm dark:shadow-md transition-all duration-300 ease-in-out"
        >
          {theme === "dark" ? (
            <span className="text-lg">☀️</span>
          ) : (
            <span className="text-lg">🌙</span>
          )}
        </button>
      </div>

      <div className="flex-none px-4">
        <div className="menu space-x-4 menu-horizontal hidden md:flex">
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/skills" className="link link-hover">Skills</Link>
          <Link to="/projects" className="link link-hover">Projects</Link>
          <Link to="/education" className="link link-hover">Education</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>

          {/* <li><a href="#about">About</a></li> */}
          {/* <li><a href="#skills">Skills</a></li> */}
          {/* <li><a href="#education">Education</a></li> */}
          {/* <li><a href="#projects">Projects</a></li> */}
          {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
        </div>
        {/* <div className="ml-3 hidden md:inline-block">
          <ResumeButton />
        </div> */}

        {/* mobile menu */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="link link-hover btn-circle">
            ☰
          </label>
          <div tabIndex={0} className="menu space-x-2.5 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to="/about" className="link link-hover">About</Link>
            <Link to="/skills" className="link link-hover">Skills</Link>
            <Link to="/projects" className="link link-hover">Projects</Link>
            <Link to="/education" className="link link-hover">Education</Link>
            <Link to="/contact" className="link link-hover">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
