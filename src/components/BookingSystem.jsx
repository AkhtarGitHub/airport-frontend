import { useState } from 'react';
import '../styles/theme.css';

const BookingSystem = () => {

  // this is the basic format the json will take
  const [formData, setFormData] = useState({
    aircraft: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // here i parse the id from the form data for aircraft, as the database expects aircraft to be an object with an id
    const readyData = {
      aircraft: [{
        id: parseInt(formData.aircraft),
      }],
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber
    };

// send post request to add passenger to the database
    try {
      const response = await fetch('http://localhost:8080/api/passenger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(readyData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Booking submitted:', data);
      alert('Booking submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting booking:', error);
      console.log('Heres what you sent:', readyData)
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="booking-system">
      <h2>Book a Flight</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="aircraft">Flight Number:</label>
          <input
            type="text"
            id="aircraft"
            name="aircraft"
            value={formData.aircraft}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
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