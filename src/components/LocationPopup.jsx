import { useState } from "react";
import cities from "../data/cities";

function LocationPopup({ onClose, onSelect }) {
  const [mode, setMode] = useState("dropdown");
  const [selectedCity, setSelectedCity] = useState("");
  const [manualCity, setManualCity] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3 className="modal-title">Select Project Location</h3>

        <div className="modal-toggle">
          <button
            className={`mode-btn ${mode === "dropdown" ? "active" : ""}`}
            onClick={() => setMode("dropdown")}
          >
            <i className="fa fa-list" aria-hidden="true" /> Choose from list
          </button>
          <button
            className={`mode-btn ${mode === "manual" ? "active" : ""}`}
            onClick={() => setMode("manual")}
          >
            <i className="fa fa-keyboard-o" aria-hidden="true" /> Enter manually
          </button>
        </div>

        {mode === "dropdown" && (
          <div className="form-group">
            <label className="form-label">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
        )}

        {mode === "manual" && (
          <div className="form-group">
            <label className="form-label">City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={manualCity}
              onChange={(e) => setManualCity(e.target.value)}
            />
          </div>
        )}

        <div className="modal-actions">
          {mode === "dropdown" && (
            <button
              className="btn btn-primary"
              disabled={!selectedCity}
              onClick={() => onSelect(selectedCity)}
            >
              Select
            </button>
          )}

          {mode === "manual" && (
            <button
              className="btn btn-primary"
              disabled={!manualCity}
              onClick={() => onSelect(manualCity)}
            >
              Select
            </button>
          )}

          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocationPopup;
