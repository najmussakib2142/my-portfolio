import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100 text-center px-6">
      {/* Floating Animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-primary text-9xl font-bold select-none"
      >
        404
      </motion.div>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-2xl md:text-3xl font-semibold"
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-3 text-gray-500 dark:text-gray-400 max-w-md"
      >
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Go Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="btn btn-primary text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Go Home
        </Link>
      </motion.div>

      {/* Decorative Shape */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-10 right-10 w-16 h-16 border-4 border-primary rounded-full opacity-20"
      ></motion.div>
    </div>
  );
};

export default ErrorPage;
