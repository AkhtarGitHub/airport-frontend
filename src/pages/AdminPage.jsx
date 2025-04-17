import { useState, useEffect } from "react";
import "../styles/theme.css";

const AdminPage = () => {
  const [airports, setAirports] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPassengers = async () => {
      let backendPassengers = [];
      let getData;
      let fetchURL = "http://localhost:8080/api/passengers";
      try {
        //  i'm now in the process of changing out
        // the mock data for backend data
        const response = await fetch(fetchURL);
        const rawData = await response.json();
        getData = JSON.stringify(rawData, null, 4);
        console.log("RECEIVED:", getData);
        for (var id in rawData) {
          if (rawData.hasOwnProperty(id)) {
            var value = rawData[id];
            backendPassengers.push({
              id: value.id,
              firstName: value.firstName,
              lastName: value.lastName,
              phoneNumber: value.phoneNumber,
            });
            console.log("HEY! LOOK HERE!", backendFlights);
          } else {
            console.log("somethings not right!");
          }
        }

        setPassengers(backendPassengers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPassengers();

    const fetchAirports = async () => {
      let backendAirports = [];
      let getData;
      let fetchURL = "http://localhost:8080/api/airports";
      try {
        //  i'm now in the process of changing out
        // the mock data for backend data
        const response = await fetch(fetchURL);
        const rawData = await response.json();
        getData = JSON.stringify(rawData, null, 4);
        console.log("RECEIVED:", getData);
        for (var id in rawData) {
          if (rawData.hasOwnProperty(id)) {
            var value = rawData[id];
            backendAirports.push({
              id: value.id,
              code: value.code,
              name: value.name,
            });
            console.log("HEY! LOOK HERE!", backendFlights);
          } else {
            console.log("somethings not right!");
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

    const fetchAircrafts = async () => {
      let backendAircrafts = [];
      let getData;
      let fetchURL = "http://localhost:8080/api/aircrafts";
      try {
        //  i'm now in the process of changing out
        // the mock data for backend data
        const response = await fetch(fetchURL);
        const rawData = await response.json();
        getData = JSON.stringify(rawData, null, 4);
        console.log("RECEIVED:", getData);
        for (var id in rawData) {
          if (rawData.hasOwnProperty(id)) {
            var value = rawData[id];
            backendAircrafts.push({
              id: value.id,
              type: value.type,
              airlineName: value.airlineName,
              numberOfPassengers: value.numberOfPassengers,
            });
            console.log("HEY! LOOK HERE!", backendFlights);
          } else {
            console.log("somethings not right!");
          }
        }

        setAircrafts(backendAircrafts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAircrafts();
  }, []);

  if (loading) return <div>Loading admin dashboard...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <div className="admin-sections">
        <section className="admin-section">
          <h2>Airports</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {airports.map((airport) => (
                <tr key={airport.id}>
                  <td>{airport.code}</td>
                  <td>{airport.name}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="add-btn">Add Airport</button>
        </section>

        <section className="admin-section">
          <h2>Aircrafts</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Airline</th>
                <th>Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {aircrafts.map((aircraft) => (
                <tr key={aircraft.id}>
                  <td>{aircraft.type}</td>
                  <td>{aircraft.airlineName}</td>
                  <td>{aircraft.numberOfPassengers}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="add-btn">Add Aircraft</button>
        </section>

        <section className="admin-section">
          <h2>Passengers</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map((passenger) => (
                <tr key={passenger.id}>
                  <td>
                    {passenger.firstName} {passenger.lastName}
                  </td>
                  <td>{passenger.phoneNumber}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="add-btn">Add Passenger</button>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
