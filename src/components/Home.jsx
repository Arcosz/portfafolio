import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
        <Banner />
        <About />
        <Skills/>
        {/* <Services /> */}
        <Contact />
    </div>
  );
};

export default Home;
