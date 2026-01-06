import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import devAnimation from "../../assets/contact us.json";
import ocean from "../../../public/ocan.jpg";
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";


const ContactBanner = () => {
    return (
        <section
            id="contact-banner"

            className=" relative bg-gray-100 dark:bg-gray-900 py-12 md:py-16 lg:py-20 text-gray-900 dark:text-white "
        >
            <div className="px-6 max-w-7xl mx-auto md:px-16 flex flex-col md:flex-row items-center justify-between gap-20">

                {/* Text Section */}
                <div className="text-center md:text-left space-y-4 max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Have a project in mind? <br /> Let’s get to work.
                    </h2>

                    <Link
                        to="/contact"
                        className="group px-4 py-2.5 inline-flex items-center gap-2 mt-4 border-none  bg-[#2B65EC] dark:bg-[#2B65EC]  text-white  hover:scale-103 transition-transform duration-300 "
                    >
                        Say Hello
                        {/* <ArrowRight className="text-black/60 transition-all duration-300 group-hover:text-black group-hover:translate-x-1" /> */}

                        <FaArrowRight className="text-white/80  transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Animation */}
                <div className="w-64 md:w-120">
                    <Lottie animationData={devAnimation} loop />
                </div>
            </div>

        </section>
    );
};

export default ContactBanner;
