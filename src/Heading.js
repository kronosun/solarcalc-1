import React from "react";

import logo from "../src/NRG.png";
import "./Heading.css";

function Heading() {
  return (
    <div className="Heading">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Heading;
