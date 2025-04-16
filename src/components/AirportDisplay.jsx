import { useState, useEffect } from 'react';

import '../styles/theme.css';

const AirportList = () => {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
	const fetchAirports = async () => {
	  let backendAirports =[];
	  let getData;
	  let fetchURL = 'http://localhost:8080/api/airports'
	  
	  
	  try {
	  //  i'm now in the process of changing out 
	  // the mock data for backend data
		const response = await fetch(fetchURL);
			const rawData = await response.json();
			getData = JSON.stringify(rawData, null, 4);
			console.log("RECEIVED:", getData);
		for(var id in rawData){
		  if(rawData.hasOwnProperty(id)){
			var value = rawData[id];
			backendAirports.push(
			  {
				id: value.id,
				airportCode: value.code,
				airportName: value.name,
				// departure: 'YYZ',
				// arrival: 'JFK',
				// aircraftType: value.type
			  }
			);




			console.log("HEY! LOOK HERE!",backendAirports)
		  }else{
			console.log("somethings not right!")
		  }
		  
		}
		
	   
		setAirports(backendAirports);
		setLoading(false);
	  } catch (err) {
		setError(err.message);
		setLoading(false);
	  }
	};

	fetchAirports();
  }, []);

  if (loading) return <div>Loading airports...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
	<div className="flight-schedule">
	  <h2>Flight Schedule</h2>
	  <div className="flight-table-container">
		<table className="flight-table">
		  <thead>
			<tr>
			  <th>Airport Code</th>
			  <th>Airport Name</th>
			  {/* <th>City</th>
			  <th>Aircrafts</th> */}
			</tr>
		  </thead>
		  <tbody>
			{airports.map(airport => (
			  <tr key={airport.id}>
				<td>{airport.airportCode}</td>
				<td>{airport.airportName}</td>
				{/* <td>{airport.city}</td>
				<td>{airport.aircrafts}</td> */}

			  </tr>
			))}
		  </tbody>
		</table>
	  </div>
	</div>
  );
};

export default AirportList;