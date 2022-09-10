import React from "react";
import "../index.css";
import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import resume from "../assets/Anfal-Ali CV 2022.pdf";


function Logos() {
    return (
              <div className="logos-list mr-5 mt-3">
                    <a href="https://github.com/aali9" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github logo"
                            className='logos'/></a>
                    <a href="https://www.linkedin.com/in/anfal-ali-75373483/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo}
                            alt="linkedin logo" className="logos"/></a>
                    <a href={resume} target="_blank" rel="noopener noreferrer"><button type="button"
                            className="btn btn-warning resume">resume</button></a>
                </div>
    );
}

export default Logos;






