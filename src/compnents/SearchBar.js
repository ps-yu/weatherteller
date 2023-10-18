import React, { useState } from "react";
import rapidapiinfo from "../rapidapiinfo";

const SearchBar = () => {
  /*
  States to change the location in the weather app
  */

  const [location, setLocation] = useState("");
  //Toronto is the default location of the App.
  const [endPoint, setEndPoint] = useState("toronto-ontario-canada")

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
  async function clickHandler(e){
   e.preventDefault();
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      for (let i in result){
        if (result[i].country === 'Canada'){
          setEndPoint(result[i].url);
        }else {
          setEndPoint("toronto-ontario-canada");
        }
      }
    }
    catch(error){
      console.log(error);
    }
  }

  return(
    <button onClick={clickHandler} > Search  </button>
  )
};

export default SearchBar;
