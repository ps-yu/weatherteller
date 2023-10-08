import React, { useEffect } from "react";
import rapidapiinfo from "../rapidapiinfo"

function Test() {

//useEffect hook to run the test for the first time
  useEffect(()=>{
    data();
  })

//URL for the rapid api 
  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidapiinfo.host,
      "X-RapidAPI-Host": rapidapiinfo.key,
    },
  };

//async function to make the http request to fetch the data
  async function data() {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  }

  return (
    <div>
      <p>This is the data i'm looking for</p>
    </div>
  );
}
export default Test;
