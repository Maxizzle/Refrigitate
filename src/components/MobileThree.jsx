import React from "react";
import { NavLink } from "react-router-dom";
import mix from "../images/SVG/Asset 2.svg";
import "./styles/Instructions.css";

const MobileThree = () => {
  return (
    <div className="third-page">
      <h1>3.</h1>

      <h2>See available recipes based on your ingredients</h2>

      <div className="third-image">
        <img src={mix} alt="" />
      </div>
    </div>
  );
};
export default MobileThree;
