import "./App.css";
import React from "react";
import Navbar from "./compnents/navbar";
import "./App.css";
import Astronomy from "./compnents/astronomy";

function App() {
  return (
    <div className="master-app">
      <Navbar city="toronto" />
      <Astronomy />
    </div>
  );
}

export default App;
