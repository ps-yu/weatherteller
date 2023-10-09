import React from "react";
import "./navbar.css";

function Navbar(props) {
  return (
      <div className="navbar-main">
        <div>My Location: {props.city}</div>
        <div id="logo">Weather Teller </div>
        <div> searchbox </div>
      </div>
  );
}

export default Navbar;
