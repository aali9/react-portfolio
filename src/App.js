import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./pageSections/AboutMe";
import HomePage from "./components/HomePage"
import ProjectSection from "./pageSections/ProjectsSection";
import Contact from "./components/Contact";

function App() {
  return (
      <>
        <Navbar />

        <div className="container" id="content-container">
          <AboutMe />
          <hr className="my-5" id="about"/>
          <HomePage />
          <hr className="my-5" id="web-dev-projects"/>
          <ProjectSection />
        </div>

        <Contact />

      </>

  );
}

export default App;

