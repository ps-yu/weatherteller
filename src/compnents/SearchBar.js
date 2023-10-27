import React, { useState } from "react";
import rapidapiinfo from "../rapidapiinfo";

const SearchBar = () => {
  /*
  States to change the location in the weather app
  */

  const [location, setLocation] = useState("");
  //Toronto is the default location of the App.
  const [endPoint, setEndPoint] = useState("toronto-ontario-canada");
  const [selectedOption, setSelectedOption] = useState('option1');

  const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${endPoint}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidapiinfo.host,
      "X-RapidAPI-Host": rapidapiinfo.key,
    },
  };

  /*

  

  /*
  function to handle the drop down menu
  */
  // async function clickHandler(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     for (let i in result) {
  //       if (result[i].country === "Canada") {
  //         setEndPoint(result[i].url);
  //       } else {
  //         setEndPoint("toronto-ontario-canada");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // return <button onClick={clickHandler}> Search </button>;
    // Handle the change event when a new option is selected
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <div>
      <h2>Dropdown Menu</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
      </select>
    </div>
  )
};

export default SearchBar;
