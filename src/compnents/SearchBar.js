import React, { useState } from "react";
import rapidapiinfo from "../rapidapiinfo";

const SearchBar = () => {
  /*
  States to change the location in the weather app
  */

  const [location, setLocation] = useState("paris");
  const [geoLocation, setGeoLocation] = useState("48.8567,2.3508")

  const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${geoLocation}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidapiinfo.host,
      "X-RapidAPI-Host": rapidapiinfo.key,
    },
  }; 
  
  /*
  State to update the search parameter
  */
  // const [searchInput, setSearchInput] = useState("");
  

  /*
  function to handle the searchbox searchInput
  */
  async function clickHandler(e){
   e.preventDefault();
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result[0])
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
