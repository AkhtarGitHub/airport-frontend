import { useState } from 'react';
import FlightSchedule from '../components/FlightSchedule';
import PassengerCheckIn from '../components/PassengerCheckIn';
import '../styles/theme.css';

const StaffPage = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="staff-page">
      <h1>Airline Staff Dashboard</h1>
      <div className="tab-buttons">
        <button
          className={activeTab === 'flights' ? 'active' : ''}
          onClick={() => setActiveTab('flights')}
        >
          Flight Management
        </button>
        <button
          className={activeTab === 'checkin' ? 'active' : ''}
          onClick={() => setActiveTab('checkin')}
        >
          Passenger Check-In
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'flights' && <FlightSchedule staffView={true} />}
        {activeTab === 'checkin' && <PassengerCheckIn staffView={true} />}
      </div>
    </div>
  );
};

export default StaffPage;