import React from "react";
import touch from "../images/SVG/Asset 3.svg";
import { NavLink } from "react-router-dom";
import "./styles/Instructions.css";

export default function MobileTwo() {
  return (
    <div className="second-page">
      <h1>2.</h1>
      <h2>Add as many as you have to your list</h2>
      <div className="second-image">
        <img src={touch} alt="" />
      </div>

    </div>
  );
}
