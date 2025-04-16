import { useState, useEffect } from 'react';

import '../styles/theme.css';

const CitiesList = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
	const fetchCities = async () => {
	  let backendCities =[];
	  let getData;
	  let fetchURL = 'http://localhost:8080/api/cities'
	  
	  
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
			backendCities.push(
			  {
				id: value.id,
				cityName: value.name,
				cityState: value.state,
				cityPopulation: value.population,
				cityAirports: value.airport ? value.airport.code : 'No airport',
			  }
			);




			console.log("HEY! LOOK HERE!",backendCities)
		  }else{
			console.log("somethings not right!")
		  }
		  
		}
		
	   
		setCities(backendCities);
		setLoading(false);
	  } catch (err) {
		setError(err.message);
		setLoading(false);
	  }
	};

	fetchCities();
  }, []);

  if (loading) return <div>Loading cities...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
	<div className="flight-schedule">
	  <h2>Flight Schedule</h2>
	  <div className="flight-table-container">
		<table className="flight-table">
		  <thead>
			<tr>
			  <th>City Name</th>
			  <th>City State</th>
			  <th>City Population</th>
			  <th>Airports</th>
			</tr>
		  </thead>
		  <tbody>
			{cities.map(cities => (
			  <tr key={cities.id}>
				<td>{cities.cityName}</td>
				<td>{cities.cityState}</td>
				<td>{cities.cityPopulation}</td>
				<td>{cities.cityAirports}</td>

			  </tr>
			))}
		  </tbody>
		</table>
	  </div>
	</div>
  );
};

export default CitiesList;