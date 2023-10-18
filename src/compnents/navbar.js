import React from "react";
import SearchBar from "./SearchBar";
import "./navbar.css";

function Navbar(props) {
  return (
      <div className="navbar-main">
        <div>My Location: {props.city}</div>
        <div id="logo">Weather Teller </div>
        <SearchBar />
      </div>
  );
}

export default Navbar;
