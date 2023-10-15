import "./App.css";
import React from "react";
import Navbar from "./compnents/navbar";
import "./App.css";
import Astronomy from "./compnents/astronomy";

function App() {
  return (
    <div className="master-app">
      <Navbar city="toronto" />
      <Astronomy className="astronomy.css"/>
    </div>
  );
}

export default App;
