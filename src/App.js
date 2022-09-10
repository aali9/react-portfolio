import React from "react";
import Navbar from "./components/Navbar";
import IntroductionSection from "./pageSections/IntroductionSection";
import AboutMeText from "./components/AboutMeText"
import ProjectsSection from "./pageSections/ProjectsSection";
import Contact from "./components/Contact";

function App() {
  return (
      <>
        <Navbar />

        <div className="container" id="content-container">
          <IntroductionSection />
          <hr className="my-5" id="about"/>
          <AboutMeText />
          <hr className="my-5" id="web-dev-projects"/>
          <ProjectsSection />
        </div>

        <Contact />

      </>

  );
}

export default App;