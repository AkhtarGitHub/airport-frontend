import { useState } from 'react';
import FlightSchedule from '../components/FlightSchedule';
import BookingSystem from '../components/BookingSystem';
import PassengerCheckIn from '../components/PassengerCheckIn';
import '../styles/theme.css';

/*
   PassengerPage is the main interface for users who are passengers, providing a simple UI to navigate
   the website through the following features:

   = Flight scheduling: use this to view available flights and their details
   - Book a flight: access the booking system and reserve seats
   - Check-in: complete a check-in process before boarding a flight (not literally)

   The active tab is controlled using React state, and only one component is rendered at a given time
   based on which tab is selected!
*/
const PassengerPage = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="passenger-page">
      <div className="tab-buttons">
        <button
          className={activeTab === 'flights' ? 'active' : ''}
          onClick={() => setActiveTab('flights')}
        >
          Flight Schedules
        </button>
        <button
          className={activeTab === 'booking' ? 'active' : ''}
          onClick={() => setActiveTab('booking')}
        >
          Book a Flight
        </button>
        <button
          className={activeTab === 'checkin' ? 'active' : ''}
          onClick={() => setActiveTab('checkin')}
        >
          Check-In
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'flights' && <FlightSchedule />}
        {activeTab === 'booking' && <BookingSystem />}
        {activeTab === 'checkin' && <PassengerCheckIn />}
      </div>
    </div>
  );
};

export default PassengerPage;