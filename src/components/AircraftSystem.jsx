import { useState } from "react";
import "../styles/theme.css";

const AddAircraft = () => {
  const [formData, setFormData] = useState({
    type: "",
    airlineName: "",
    numberOfPassengers: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aircraftData = {
      type: formData.type,
      airlineName: formData.airlineName,
      numberOfPassengers: parseInt(formData.numberOfPassengers),
    };

    try {
      const response = await fetch("http://localhost:8080/api/aircraft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aircraftData),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      console.log("Aircraft added:", data);
      alert("Aircraft added successfully!");
    } catch (error) {
      console.error("Error adding aircraft:", error);
      alert("Failed to add aircraft.");
    }
  };

  return (
    <div className="booking-system">
      <h2>Add Aircraft</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="type">Aircraft Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="airlineName">Airline Name:</label>
          <input
            type="text"
            id="airlineName"
            name="airlineName"
            value={formData.airlineName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfPassengers">Capacity:</label>
          <input
            type="number"
            id="numberOfPassengers"
            name="numberOfPassengers"
            value={formData.numberOfPassengers}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Aircraft
        </button>
      </form>
    </div>
  );
};

export default AddAircraft;
