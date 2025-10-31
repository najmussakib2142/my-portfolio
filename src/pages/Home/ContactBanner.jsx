import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import devAnimation from "../../assets/contact us.json";

const ContactBanner = () => {
    return (
        <section
        id="contact-banner"
            className=" relative bg-gray-100 dark:bg-gray-900 py-20 text-gray-900 dark:text-white "
        >
            <div className="px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text Section */}
                <div className="text-center md:text-left space-y-4 max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Have a project in mind? <br /> Let’s get to work.
                    </h2>

                    <Link
                        to="/contact"
                        className=" btn mt-4 border-none  bg-purple-600 hover:bg-purple-700  text-white  hover:scale-105 transition-transform
            "
                    >
                        Say Hello →
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
