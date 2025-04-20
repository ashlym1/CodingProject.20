// Tour 3 : Gallery.jsx
 import React from "react"; 
 import TourCard from "./TourCard"; // importing the TourCard component

// Gallery component to display the list of tours from the app.jsx file 
function Gallery ({ tours, loading, error, fetchTours, onRemove}) { 
     // b.  Loading message  
    if (loading) {
        return <h2>Loading...</h2>;
      }
      // Errorr message 
     if (eror) { 
        return<h2> Error: Something went wrong,please try again </h2>
     }
     // Refresh button when  all the tours are removed 
     if (tours.length === 0) {
        return (
          <div className="no-tours">
            <h2>No tours left. Refresh to reload.</h2>
            <button onClick={fetchTours}>Refresh</button>
          </div>
        );
      }

 // a. filtered tour cards based on destination selected
 return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          {...tour}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
}

export default Gallery;