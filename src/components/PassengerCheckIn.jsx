import { useState } from 'react';
import '../styles/theme.css';

const PassengerCheckIn = () => {
  const [bookingRef, setBookingRef] = useState('');
  const [passenger, setPassenger] = useState(null);
  const [error, setError] = useState(null);

    const handleCheckIn = async(e) => {
      e.preventDefault();
    //about to start adding this feature with backend hookup
    
    let fetchURL = 'http://44.204.87.39:8080/api/passengers'
    try {
        const response = await fetch(fetchURL);
        const rawData = await response.json();
        let getData = JSON.stringify(rawData, null, 4);
        console.log("RECEIVED:", getData);
        for(var id in rawData){
          if(rawData.hasOwnProperty(id)){
            var value = rawData[id];
            if(value.firstName === bookingRef)

              setPassenger({
                name: value.lastName + ", " + value.firstName,
                flight: 'AA123',
                departure: 'YYZ',
                arrival: 'JFK',
                departureTime: '2023-12-01T08:00:00',
                seat: '12A'
              });
          }else{
            console.log("somethings not right!")
          }
          
        }
    } catch (err) {
      setError(err.message);
    };
  };

    return (
      <div className="passenger-checkin">
        <h2>Passenger Check-In</h2>
        <form onSubmit={handleCheckIn} className="checkin-form">
          <div className="form-group">
            <label htmlFor="bookingRef">Booking Reference (Your First Name):</label>
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
            </div>
            <button className="print-btn">Print Boarding Pass</button>
          </div>
        )}
      </div>
    );
};
export default PassengerCheckIn;