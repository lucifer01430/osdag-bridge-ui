import { useState } from "react";
import cities from "../data/cities";

function LocationPopup({ onClose }) {
  const [mode, setMode] = useState("dropdown");
  const [selectedCity, setSelectedCity] = useState("");
  const [manualCity, setManualCity] = useState("");

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <h3>Select Project Location</h3>

        {/* Mode Toggle */}
        <div>
          <button onClick={() => setMode("dropdown")}>
            Dropdown
          </button>
          <button onClick={() => setMode("manual")}>
            Manual
          </button>
        </div>

        <br />

        {/* Dropdown Mode */}
        {mode === "dropdown" && (
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index}>{city}</option>
            ))}
          </select>
        )}

        {/* Manual Mode */}
        {mode === "manual" && (
          <input
            type="text"
            placeholder="Enter city"
            value={manualCity}
            onChange={(e) => setManualCity(e.target.value)}
          />
        )}

        <br /><br />

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const popupStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px"
};

export default LocationPopup;