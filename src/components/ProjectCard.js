import React from "react";
import "../index.css";

function ProjectCard(props) {
    return (
        <div className="col-md-5 col-sm-12 col-12 mx-3">
            <div className="d-flex justify-content-center">
                <p className="project-names">{props.name}</p>
            </div>
            <a href={props.deployedUrl} target="_blank" rel="noopener noreferrer" className="project-links"><img
                src={props.png} alt={props.name} className="projects"/> </a>
            <div className="d-flex justify-content-center">
                <div>
                    <p className="project-descriptions">{props.description}</p>
                    <p className="project-descriptions">Key words: {props.keywords}</p>
                    <div className="project-links"><a href={props.githubUrl} target="_blank" rel="noopener noreferrer">GitHub
                    repository</a></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;