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
 const location = useLocation();

 useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    
    <div className=" text-center">
      <Hero></Hero>
      <About></About>
      <ToolsSliderSection></ToolsSliderSection>
      {/* <FastCheapGood></FastCheapGood> */}
      {/* <ToggleLogic></ToggleLogic> */}
      <ServicesSection></ServicesSection>
      <Skills></Skills>
      <AnimatedTimeline></AnimatedTimeline>
      <Projects></Projects>
      <ContactBanner></ContactBanner>
      <ScrollProgressButton></ScrollProgressButton>
    </div>
  );
};

export default Home;
