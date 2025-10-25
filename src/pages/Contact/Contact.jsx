import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="pt-15 pb-20 px-6 md:px-12  transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Drop a message and let’s connect!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-left flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:najmussakib2142@gmail.com"
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
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Social Links */}
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 space-y-5"
        >
          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-200 font-medium">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full bg-transparent dark:bg-gray-800"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-200 font-medium">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full bg-transparent dark:bg-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 dark:text-gray-200 font-medium">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows="5"
              className="textarea textarea-bordered w-full bg-transparent dark:bg-gray-800"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            ✉️ Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
