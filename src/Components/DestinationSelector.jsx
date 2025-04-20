// Task 5:  DestinationSelector.jsx
import React from "react"; //  Importing the react tools and components

function DestinationSelector ({ destinations,selected, onSelect}) {
    return (
        <div className="destination-selector">
            <label htmlFor="destination"> Chose Your Dream Destination:</label>
            <select 
            // a. controlled component pattered to store the selected destination in state 
                id="destination"
                value={selected}       // controlled input 
                onChange={(e) => onSelect(e.target.value)} //  c. passed the selcted destination  to the app.jsx file 
            >
                {/*Default option to show the tours  */}
                <option value=""> View all destinations </option>
                {/* looping through the tour names (drop down menu populated ) */}
                {destinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    )
}
 export default DestinationSelector; // exporting the destination selector component


// *Note to self* : The destinatioselctor is the dropdown menu, that shows all the names that are in tour 
// and when selected it should  show the tours for that destination only. 
// when a user choses one, it will go to the app.jsx then the app .jsx will filter the tours based on the name selected. 