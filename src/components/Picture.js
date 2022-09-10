import React from "react";
import "../index.css";
import ProfilePic from "../assets/profile-pic.jpg";



function Picture() {
  return (
    <div className="col-md-4 profile-container d-flex justify-content-center">
                <img  src={ProfilePic} alt="profilePic" id="profile-picture"/>
                
            </div>
  );
}

export default Picture;