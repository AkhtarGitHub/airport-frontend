import { useState } from 'react';
import '../styles/theme.css';

const PassengerCheckIn = () => {
  const [bookingRef, setBookingRef] = useState('');
  const [passenger, setPassenger] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckIn = (e) => {
    e.preventDefault();
    // In a real app, you would call your backend API
    // For demo, we'll use mock data
    if (bookingRef === 'ABC123') {
      setPassenger({
        name: 'John Doe',
        flight: 'AA123',
        departure: 'YYZ',
        arrival: 'JFK',
        departureTime: '2023-12-01T08:00:00',
        seat: '12A'
      });
      setError(null);
    } else {
      setError('Booking reference not found');
      setPassenger(null);
    }
  };

  return (
    <div className="passenger-checkin">
      <h2>Passenger Check-In</h2>
      <form onSubmit={handleCheckIn} className="checkin-form">
        <div className="form-group">
          <label htmlFor="bookingRef">Booking Reference:</label>
          <input
            type="text"
            id="bookingRef"
            value={bookingRef}
            onChange={(e) => setBookingRef(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Check In</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {passenger && (
        <div className="checkin-details">
          <h3>Check-In Successful</h3>
          <div className="passenger-info">
            <p><strong>Passenger:</strong> {passenger.name}</p>
            <p><strong>Flight:</strong> {passenger.flight}</p>
            <p><strong>From:</strong> {passenger.departure}</p>
            <p><strong>To:</strong> {passenger.arrival}</p>
            <p><strong>Departure:</strong> {new Date(passenger.departureTime).toLocaleString()}</p>
            <p><strong>Seat:</strong> {passenger.seat}</p>
          </div>
          <button className="print-btn">Print Boarding Pass</button>
        </div>
      )}
    </div>
  );
};

export default PassengerCheckIn;