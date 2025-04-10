import { useState } from 'react';
import '../styles/theme.css';

const BookingSystem = () => {
  const [formData, setFormData] = useState({
    flightId: '',
    passengerName: '',
    passportNumber: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully!');
    setFormData({
      flightId: '',
      passengerName: '',
      passportNumber: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="booking-system">
      <h2>Book a Flight</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="flightId">Flight Number:</label>
          <input
            type="text"
            id="flightId"
            name="flightId"
            value={formData.flightId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passengerName">Passenger Name:</label>
          <input
            type="text"
            id="passengerName"
            name="passengerName"
            value={formData.passengerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passportNumber">Passport Number:</label>
          <input
            type="text"
            id="passportNumber"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Book Flight</button>
      </form>
    </div>
  );
};

export default BookingSystem;