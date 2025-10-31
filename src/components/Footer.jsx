import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative max-w-7xl mx-auto bg-purple-600 text-white pt-30 pb-10">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px]"
        >
          <path
            d="M321.39,56.44C200.51,34.81,92.41,0,0,0V120H1200V0c-91.85,0-183.7,34.81-304.58,56.44C774.79,77.52,673.49,89,572.21,89S369.63,77.52,321.39,56.44Z"
            className="fill-current text-[#f3f4f6] dark:text-gray-900"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center space-y-10">

        
        <div className="grid md:grid-cols-3 gap-10 text-sm">

          <div>
            <p className="opacity-80 mb-1">Sat–Thu, 9am to 5pm</p>
            <a href="tel:+8801736007474" className="text-lg font-semibold hover:underline">
              +880 1736 007474
            </a>
          </div>

          <div>
            <p className="opacity-80 mb-1">You can email me anytime</p>
            <a
              href="mailto:najmussakib2142@gmail.com"
              className="text-lg font-semibold hover:underline"
            >
              najmussakib2142@gmail.com
            </a>
          </div>

          <div>
            <p className="opacity-80 mb-1">My Location</p>
            <p className="text-lg font-semibold">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/najmussakib2142" target="_blank">
            <FaGithub className="hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/in/sm-najmus-sakib" target="_blank">
            <FaLinkedin className="hover:text-gray-300" />
          </a>
          <a href="https://wa.me/8801736007474" target="_blank">
            <FaWhatsapp className="hover:text-gray-300" />
          </a>
          <a href="mailto:najmussakib2142@gmail.com">
            <FaEnvelope className="hover:text-gray-300" />
          </a>
        </div>

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Najmus Sakib — All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
