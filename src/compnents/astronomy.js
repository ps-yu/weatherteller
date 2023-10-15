import React from "react";
import "./astronomy.css";
// import rapidapiinfo from "../rapidapiinfo";

/* Astronomy end point allows the user to get the upto date information about sunrise, sunset, moonrise, moonset, moonphase and illumination */
function Astronomy() {
  /* 
information related to rapid api backend
*/
  // const url = "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=London";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": rapidapiinfo.host,
  //     "X-RapidAPI-Host": rapidapiinfo.key,
  //   },
  // };

  /* 
useEffect hook to get the astronomical data when the component renders for the first time
*/
  // useEffect (()=>{
  //   clickHandler();
  // })
  /* 
Async function to make the network call to get the astronomical data
*/
  // async function clickHandler(){
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result.astronomy.astro);
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  return (
    <>
    <div className="astroCard">
      <div id="title"> Astronomy </div>
      <div> Sunrise Image </div>
      <div> Sunset</div>
      <div> Moonrise</div>
      <div> Moonset</div>
      <div> Moonphase</div>
    </div>    
    </>

  );
}

export default Astronomy;
