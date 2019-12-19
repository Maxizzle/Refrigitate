import React from "react";
import { NavLink } from "react-router-dom";
import cooking from "../images/SVG/Asset 4.svg";
import "./styles/Instructions.css";

const MobileIntro = () => {
  return (
    <div className="intro-page">
      <h1>1.</h1>

      <h2>Search for an ingredient</h2>
      <div className="intro-image">
        <img src={cooking} alt="" />
      </div>
    </div>
  );
};

export default MobileIntro;
