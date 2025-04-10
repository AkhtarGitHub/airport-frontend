import { useState, useEffect } from 'react';
import '../styles/theme.css';

const AdminPage = () => {
  const [airports, setAirports] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would call your backend API
    // For demo, we'll use mock data
    setTimeout(() => {
      setAirports([
        { id: 1, code: 'YYZ', name: 'Toronto Pearson' },
        { id: 2, code: 'JFK', name: 'John F. Kennedy' },
        { id: 3, code: 'LAX', name: 'Los Angeles International' }
      ]);

      setAircrafts([
        { id: 1, type: 'Boeing 737', airlineName: 'Air Canada', numberOfPassengers: 150 },
        { id: 2, type: 'Airbus A320', airlineName: 'WestJet', numberOfPassengers: 180 }
      ]);

      setPassengers([
        { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNumber: '987-654-3210' }
      ]);

      setLoading(false);
    }, 1000);
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {airports.map(airport => (
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
              {aircrafts.map(aircraft => (
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
              {passengers.map(passenger => (
                <tr key={passenger.id}>
                  <td>{passenger.firstName} {passenger.lastName}</td>
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