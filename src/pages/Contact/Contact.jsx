import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent locally — integrate EmailJS or Firebase later!");
    reset();
  };

  return (
    <motion.div
      className="pt-24 container mx-auto px-6 pb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        I’m open to internship and freelance opportunities. Reach me directly
        via email or send a quick message below.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Contact Information
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:najmus.sakib@example.com"
                className="hover:underline"
              >
                najmussakib2142@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <a href="tel:+8801736007474" className="hover:underline">
                +8801736007474
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/8801736007474"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/najmussakib2142"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-md"
            >
              <FaGithub size={20} className="text-gray-800 dark:text-gray-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/sm-najmus-sakib"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-md"
            >
              <FaLinkedin size={20} className="text-blue-600" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 space-y-5"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full input input-bordered bg-transparent dark:bg-gray-800"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full input input-bordered bg-transparent dark:bg-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="textarea textarea-bordered w-full bg-transparent dark:bg-gray-800"
              rows="4"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
