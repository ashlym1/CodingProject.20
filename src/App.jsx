//  Importing 
import React, { useState,useEffect } from "react";
import Gallery from "./Components/Gallery";
import DestinationSelector from "./Components/DestinationSelector";
import './Styles/style.css';

 
useEffect(() => {
  fetchTours(); // using affects to fetch the tours
  //  Fetching  the API; Applying a proxy to avoid CORS issues 
const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';
}, []);
 // Creating a state variable to store the tours 
const [tours, setTours] = useState([]);
const fetchTours = async () => {
  try { 
    const response = await fetch(url);   // requesting the data from the API
    const data = await response.json(); // convert to json 
     // save the data that was fetched into the state variable
    setTours(data);
  } catch (err) {
    // If there is an error it will display a error message.
    console.log("Fetch error:", err);
  }
};