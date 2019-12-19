import React from "react";
import oven from "../images/SVG/Asset 1.svg";
import { NavLink } from "react-router-dom";
import Header from "./shared/Header";
import "./styles/Instructions.css";

const MobileFour = () => {
  return (
    <div className="fourth-page">
      <h1>4.</h1>
      <h2>Get cooking!</h2>

      <div className="fourth-image">
        <img src={oven} alt="" />
      </div>
    </div>
  );
};

export default MobileFour;
