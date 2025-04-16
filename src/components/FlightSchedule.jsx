import { useState, useEffect } from 'react';
import { getFlights } from '../services/api';
import '../styles/theme.css';

const FlightSchedule = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
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
            console.log("HEY! LOOK HERE!",value.type)
          }else{
            console.log("somethings not right!")
          }
          
        }
        
        
        
        
        
        
        const mockFlights = [
          {
            id: 1,
            flightNumber: 'AA123',
            departure: 'YYZ',
            arrival: 'JFK',
            departureTime: '2023-12-01T08:00:00',
            arrivalTime: '2023-12-01T10:30:00',
            status: 'On Time',
            aircraftType: value.type
          },
          {
            id: 2,
            flightNumber: 'DL456',
            departure: 'JFK',
            arrival: 'LAX',
            departureTime: '2023-12-01T12:00:00',
            arrivalTime: '2023-12-01T15:30:00',
            status: 'Delayed',
            aircraftType: 'Airbus A320'
          }
        ];
        setFlights(mockFlights);
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
              <th>Departure</th>
              <th>Arrival</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Status</th>
              <th>Aircraft</th>
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight.id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>{new Date(flight.departureTime).toLocaleString()}</td>
                <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
                <td className={`status-${flight.status.toLowerCase().replace(' ', '-')}`}>
                  {flight.status}
                </td>
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