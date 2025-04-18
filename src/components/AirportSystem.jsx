import { useState } from "react";
import "../styles/theme.css";

const AddAirport = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
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

    const airportData = {
      name: formData.name,
      code: formData.code,
    };

    try {
      const response = await fetch("http://52.90.70.129:8080/api/airport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(airportData),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      console.log("Airport added:", data);
      alert("Airport added successfully!");
    } catch (error) {
      console.error("Error adding airport:", error);
      alert("Failed to add airport.");
    }
  };

  return (
    <div className="booking-system">
      <h2>Add Airport</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="code">Code:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Airport
        </button>
      </form>
    </div>
  );
};

export default AddAirport;
