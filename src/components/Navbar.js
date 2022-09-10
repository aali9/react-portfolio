import React from "react";
import "../index.css";
import { Link } from 'react-scroll';


function Navbar() {

  function handleClick(event){
    const navTags = document.querySelectorAll("ul li a");
    navTags.forEach((tag) => tag.setAttribute("class", "not-active"));
    event.target.setAttribute("class", "active")
  }

  return (
    <div className="container-fluid">
      <div className="row nav-bar">
        <div className="col-sm-12">
          <ul className="m-0 p-3">
            <li className="d-inline pr-2">
            <Link to="about"  onClick={handleClick} className="active" smooth={true} duration={1000}>About</Link>
            </li>
            <li className="d-inline px-2 nav-tags">
            <Link to="web-dev-projects"  onClick={handleClick} className="not-active" smooth={true} duration={1000}>Projects</Link>
            </li>
            <li className="d-inline px-2 nav-tags">
            <Link to="contact" onClick={handleClick}  className="not-active" smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;