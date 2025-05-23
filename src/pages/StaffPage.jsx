import { useState } from 'react';
import FlightSchedule from '../components/FlightSchedule';
import PassengerCheckIn from '../components/PassengerCheckIn';
import AirportDisplay from '../components/AirportDisplay';
import CitiesDisplay from '../components/CitiesDisplay';

import '../styles/theme.css';

/*
   StaffPage is the interface for any airline staff member, this gives them access to various admin tools
   that are otherwise blocked from PassengerPage:

   - Flight management: view/manage the flight schedule
   - Airport management: display/modify any airport data
   - Cities management: manage city information linked to airports
   - Passenger check-in: assist with checking in passengers

   Tabs will control the displayed component with the local state, and the function `staffView={true}`
   is passed to enable staff-related privileges.
*/
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
          className={activeTab === 'airports' ? 'active' : ''}
          onClick={() => setActiveTab('airports')}
        >
          Airport Management
        </button>
        <button
          className={activeTab === 'cities' ? 'active' : ''}
          onClick={() => setActiveTab('cities')}
        >
          Cities Management
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
        {activeTab === 'airports' && <AirportDisplay staffView={true} />}
        {activeTab === 'cities' && <CitiesDisplay staffView={true} />}
      </div>
    </div>
  );
};

export default StaffPage;