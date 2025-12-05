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
import ContactBanner from "./Home/ContactBanner";
import AnimatedTimeline from "./Home/AnimatedTimeline";
import Banner from "./Home/Banner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FastCheapGood from "./Home/FastCheapGood";
import ToggleLogic from "./Home/ToggleLogic";


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
 const location = useLocation();

 useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        // smooth scroll after a tiny delay to ensure section exists
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    
    <div className=" text-center">
      {/* <Banner></Banner> */}
      <Hero></Hero>
      <About></About>
      <ToolsSliderSection></ToolsSliderSection>
      {/* <FastCheapGood></FastCheapGood> */}
      {/* <ToggleLogic></ToggleLogic> */}
      <ServicesSection></ServicesSection>
      <Skills></Skills>
      {/* <Education></Education> */}
      <AnimatedTimeline></AnimatedTimeline>
      <Projects></Projects>
      <ContactBanner></ContactBanner>
      {/* <Contact></Contact> */}

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
