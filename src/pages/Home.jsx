// import { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import Education from "./Home/Education";
import Hero from "./Home/Hero";
import Skills from "./Home/Skills";
import Projects from "./Projects/Projects";
import ToolsSliderSection from "./ToolsSliderSection/ToolsSliderSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";
import About from "./Home/About";
import ServicesSection from "./Home/ServicesSection";
import ScrollProgressButton from "./Shared/ScrollProgressButton";


const Home = () => {

  // const [showTopBtn, setShowTopBtn] = useState(false);

  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 300) setShowTopBtn(true);
  //     else setShowTopBtn(false);
  //   });
  // }, []);

  // const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


  return (
    <div className="max-w-7xl mx-auto text-center">
      <Hero></Hero>
      <About></About>
      <ToolsSliderSection></ToolsSliderSection>
      <ServicesSection></ServicesSection>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>

      <ScrollProgressButton></ScrollProgressButton>
      {/* {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-focus transition"
        >
          <FaArrowUp />
        </button>
      )} */}

    </div>
  );
};

export default Home;
