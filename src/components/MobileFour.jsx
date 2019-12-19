import React from "react";
import oven from "./../images/SVG/Asset 1.svg";
import { NavLink } from "react-router-dom";
import Header from "./shared/Header";
import "./styles/Instructions.css";

const MobileFour = () => {
  return (
      <div className="fourth-page">
         <div className="instruction_text">
        <h1>4.</h1>
        <p className="instructions">
        Get cooking!
        </p>
        </div>
        <div className="fourth-image">
          <img src={oven} alt="" />
        </div>
      </div>
    );
};

export default MobileFour;
