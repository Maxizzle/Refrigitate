import React from "react";
import { NavLink } from "react-router-dom";
import cooking from "../images/SVG/Asset 4.svg";
import "./styles/Instructions.css";

const MobileIntro = () => {
  return (
    <div className="intro-page">
      <div className="instruction_text">
      <h1>1.</h1>
      <p className="instructions">Search for an ingredient</p>
      </div>
      <div className="intro-image">
        <img src={cooking} alt="" />
      </div>
    </div>
  );
};

export default MobileIntro;
