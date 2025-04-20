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
