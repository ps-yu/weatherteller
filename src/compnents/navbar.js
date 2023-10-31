import React from "react";
import Dropdown from "./DropDown";
import "./navbar.css";

function Navbar(props) {
  return (
      <div className="navbar-main">
        <div>My Location: {props.city}</div>
        <div id="logo">Weather Teller </div>
        <Dropdown />
      </div>
  );
}

export default Navbar;
