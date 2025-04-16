import { useState } from "react";
import { useLocation } from "react-router-dom";
import FlightSchedule from "../components/FlightSchedule";
import BookingSystem from "../components/BookingSystem";
import PassengerCheckIn from "../components/PassengerCheckIn";
import "../styles/theme.css";

const PassengerPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || "flights");

  return (
    <div className="passenger-page">
      <div className="tab-buttons">
        <button
          className={activeTab === "flights" ? "active" : ""}
          onClick={() => setActiveTab("flights")}
        >
          Flight Schedules
        </button>
        <button
          className={activeTab === "booking" ? "active" : ""}
          onClick={() => setActiveTab("booking")}
        >
          Book a Flight
        </button>
        <button
          className={activeTab === "checkin" ? "active" : ""}
          onClick={() => setActiveTab("checkin")}
        >
          Check-In
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "flights" && <FlightSchedule />}
        {activeTab === "booking" && <BookingSystem />}
        {activeTab === "checkin" && <PassengerCheckIn />}
      </div>
    </div>
  );
};

export default PassengerPage;
