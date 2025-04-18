import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/theme.css";

/*
   AdminPage is the administrative dashboard component, used for when any administrators log onto the website.
   They can see, access, and manage core entities in the system, these can include:

   - Displaying a list of airports with options to add, edit, or delete
   - Display a list of aircrafts, including their type, airline name, capacity, and management options
   - Display a list of passengers, their first and last name, phone numbers, and the ability to manage entries

   This page utilizes mock data (shown below) and simulates asynchronous data loading to provide a demonstration
   of its functionality!
*/
const AdminPage = () => {
  const [airports, setAirports] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPassengers = async () => {
      let backendPassengers = [];
      let getData;
      let fetchURL = "http://44.204.87.39:8080/api/passengers";
      try {
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
          } else {
            console.log("somethings not right!");
          }
        }

        setPassengers(backendPassengers);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchPassengers();

    const fetchAirports = async () => {
      let backendAirports = [];
      let getData;
      let fetchURL = "http://44.204.87.39:8080/api/airports";
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
          } else {
            console.log("somethings not right!");
          }
        }

        setAirports(backendAirports);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchAirports();

    const fetchAircrafts = async () => {
      let backendAircrafts = [];
      let getData;
      let fetchURL = "http://44.204.87.39:8080/api/aircrafts";
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
          } else {
            console.log("somethings not right!");
          }
        }

        setAircrafts(backendAircrafts);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchAircrafts();
  }, []);

  if (loading) return <div>Loading admin dashboard...</div>;

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
              </tr>
            </thead>
            <tbody>
              {airports.map((airport) => (
                <tr key={airport.id}>
                  <td>{airport.code}</td>
                  <td>{airport.name}</td>

                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/airport" class="admin-link">
            Add Airport
          </Link>
        </section>

        <section className="admin-section">
          <h2>Aircrafts</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Airline</th>
                <th>Capacity</th>

              </tr>
            </thead>
            <tbody>
              {aircrafts.map((aircraft) => (
                <tr key={aircraft.id}>
                  <td>{aircraft.type}</td>
                  <td>{aircraft.airlineName}</td>
                  <td>{aircraft.numberOfPassengers}</td>

                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/aircraft" class="admin-link">
            Add Aircraft
          </Link>
        </section>

        <section className="admin-section">
          <h2>Passengers</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>

              </tr>
            </thead>
            <tbody>
              {passengers.map((passenger) => (
                <tr key={passenger.id}>
                  <td>
                    {passenger.firstName} {passenger.lastName}
                  </td>
                  <td>{passenger.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/passenger" class="admin-link">
            Add Passenger
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
