import "./App.css";
import React, { useState } from "react";
import Navbar from "./compnents/navbar";
import "./App.css";
import Astronomy from "./compnents/astronomy";

function App() {

  /**
   * Function to change the location in the app
   * Triggers when the handleOptionChange has been instiated in the DropDown
   */
  const [location, setLocation] = useState("Toronto");
  function changeLocation(city) {
    setLocation(city);
    console.log("Location Changed")
  }

  return (
    <div className="master-app">
      <Navbar city={location} changeLocation={changeLocation} />
      <Astronomy />
    </div>
  );
}

export default App;
