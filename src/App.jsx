 //  Task 1 : Setting up my App (app,gallery,tourcard,destinationselector)
 
 // Task 2 : App.jsx 

//  a. Importing  the react tools and components 
import React, { useState, useEffect } from "react";
import Gallery from "./Components/Gallery";
import DestinationSelector from "./Components/DestinationSelector";
import './Styles/style.css'; // adding the styling to it 

//  b.  Applying a proxy to avoid CORS issues 
const url = "https://thingproxy.freeboard.io/fetch/https://course-api.com/react-tours-project"; //  API url 
function App() {
  //  Creating state variables for Task 2
  const [tours, setTours] = useState([]); // tour data 
  const [loading, setLoading] = useState(true); // loading message
  const [error, setError] = useState(false);    // error message
  const [selectedDestination, setSelectedDestination] = useState(""); // dropdown filter

  // c. Fetching the data from the API
  const fetchTours = async () => {
    setLoading(true);      // loading screen starts
    setError(false);       // ressets the  error state

    try { 
      const response = await fetch(url);              // requesting the data from the API
      const data = await response.json();             // converting to JSON 
      setTours(data);                                 // save  data that was fetched
    } catch (error) {
      console.log("Fetch error:", error);             // if there is  an error
      setError(true);                                 // display  error message
    } finally {
      setLoading(false);                              //  the loading screen  will go  away
    }
  };

  // d. Fetching the data when the component mounts
  useEffect(() => {
    fetchTours(); // fetch the data once when page loads
  }, []);

  // * Filter the tours if a destination is selected (filtering state to children components)
  const filteredTours = selectedDestination
    ? tours.filter((t) => t.name === selectedDestination)
    : tours;

  //  Extracting the list of the uniue names * Note: will be used to create the dropdown filter
  const destinations = [...new Set(tours.map((t) => t.name))];

  // Render the app
  return (
    <main>
      <h1>Tour Destination Selector</h1>

      {/* dropdown filter */}
      <DestinationSelector
        destinations={destinations} // unique tour names
        selected={selectedDestination}
        onSelect={setSelectedDestination}
      />

      {/* passing the state to gallery */}
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        fetchTours={fetchTours}
        onRemove={(id) => setTours(tours.filter(t => t.id !== id))}
      />
    </main>
  );
}

export default App; // exporting the app component
