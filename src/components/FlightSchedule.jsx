import { useState, useEffect } from 'react';
import { getFlights } from '../services/api';
import '../styles/theme.css';

const FlightSchedule = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchFlights = async () => {
      let backendFlights =[];
      let getData;
      let fetchURL = 'http://localhost:8080/api/aircrafts'
      
      
      try {
      //  i'm now in the process of changing out 
      // the mock data for backend data
        const response = await fetch(fetchURL);
		    const rawData = await response.json();
		    getData = JSON.stringify(rawData, null, 4);
		    console.log("RECEIVED:", getData);
        // networkConnection = true;
        for(var id in rawData){
          if(rawData.hasOwnProperty(id)){
            var value = rawData[id];
            backendFlights.push(
              {
                id: value.id,
                flightNumber: value.id,
                airlineName: value.airlineName,
                departure: 'YYZ',
                arrival: 'JFK',
                aircraftType: value.type
              }
            );




            console.log("HEY! LOOK HERE!",backendFlights)
          }else{
            console.log("somethings not right!")
          }
          
        }
        
        
        
        
        
        
       
        setFlights(backendFlights);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) return <div>Loading flight schedules...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flight-schedule">
      <h2>Flight Schedule</h2>
      <div className="flight-table-container">
        <table className="flight-table">
          <thead>
            <tr>
              <th>Flight #</th>
              <th>Airline Name</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Aircraft</th>
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight.id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.airlineName}</td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>{flight.aircraftType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightSchedule;