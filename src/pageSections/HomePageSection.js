import React from "react";
import "../index.css";
import HomePage from "../components/HomePage";
import Logos from "../components/Logos";
import Picture from "../components/Picture"

function HomePageSection() {
  return (
    <div className="row about-me d-flex justify-content-center">
      <div className="description col-md-6 col-sm-10">
        <HomePage />
        <Logos />
      </div>
      <Picture />
    </div>
  );
}

export default HomePageSection;
