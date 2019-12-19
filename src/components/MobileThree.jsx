import React from "react";
import { NavLink } from "react-router-dom";
import mix from "../images/SVG/Asset 2.svg";
import "./styles/Instructions.css";

const MobileThree = () => {
  return (
    <div className="third-page">
       <div className="instruction_text">
      <h1>3.</h1>

      <p className="instructions">
        See available recipes based on your ingredients
      </p>
      </div>
      <div className="third-image">
        <img src={mix} alt="" />
      </div>
    </div>
  );
};
export default MobileThree;
