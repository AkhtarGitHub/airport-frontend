import { useState, useEffect } from "react";
import { getFlights } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";

const AdminDashboard = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://44.204.87.39:8080/api/aircrafts");
        const rawData = await response.json();
        const backendFlights = rawData.map((value) => ({
          id: value.id,
          flightNumber: value.id,
          airlineName: value.airlineName,
          departure: "YYZ",
          arrival: "JFK",
          aircraftType: value.type,
        }));
        setFlights(backendFlights);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        const response = await fetch("http://44.204.87.39:8080/api/passengers");
        const passengers = await response.json();
        console.log("Passengers:", passengers);
      } catch (err) {
        console.error("Failed to fetch passengers:", err);
      }
    };

    fetchPassengers();
  }, []);

  if (loading) return <div>Loading admin dashboard...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <button
        className="add-btn"
        onClick={() => navigate("/passenger", { state: { tab: "booking" } })}
      >
        Add Passenger
      </button>
      <button className="add-btn" onClick={() => navigate("/aircraft")}>
        Add Aircraft
      </button>

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
            {flights.map((flight) => (
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

export default AdminDashboard;
