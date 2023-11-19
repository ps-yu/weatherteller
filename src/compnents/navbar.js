import React, { useState } from "react";
import "./navbar.css";
import rapidapiinfo from "./rapidapiinfo";

function Navbar(props) {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [endPoint, setEndPoint] = useState("toronto-ontario-canada");
  
  
  // Handle the change event when a new option is selected
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    props.changeLocation(selectedOption);
  };

  //   const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${endPoint}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": rapidapiinfo.host,
//       "X-RapidAPI-Host": rapidapiinfo.key,
//     },
//   };

//   /*
//   function to handle the drop down menu
//   */
//   // async function clickHandler(e) {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await fetch(url, options);
//   //     const result = await response.json();
//   //     for (let i in result) {
//   //       if (result[i].country === "Canada") {
//   //         setEndPoint(result[i].url);
//   //       } else {
//   //         setEndPoint("toronto-ontario-canada");
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
  return (
    <div className="navbar-main">
      <div>My Location: {props.city}</div>
      <div id="logo">Weather Teller </div>
      <div className="dropDown">
        <p>Change Location  </p>
        <select onChange={handleOptionChange} className="dropdown-content">
          <option value="Option 1">Toronto</option>
          <option value="Option 2">Vancouver</option>
          <option value="Option 3">Montreal</option>
          <option value="Option 4">Ottawa</option>
          <option value="Option 5">Edmonton</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
