import { useState } from "react";
import LocationPopup from "./LocationPopup";

function BasicInputs() {
  const [structureType, setStructureType] = useState("Highway");
  const [showPopup, setShowPopup] = useState(false);
  const [location, setLocation] = useState("");

  const [span, setSpan] = useState("");
  const [width, setWidth] = useState("");
  const [skew, setSkew] = useState("");

  const [errors, setErrors] = useState({});

  const isDisabled = structureType === "Other";

  // ✅ Updated validation (no lag)
  const validate = (newSpan, newWidth, newSkew) => {
    let newErrors = {};

    if (!newSpan || newSpan <= 0) {
      newErrors.span = "Span must be greater than 0";
    }

    if (!newWidth || newWidth <= 0) {
      newErrors.width = "Width must be greater than 0";
    }

    if (newSkew < 0 || newSkew > 90) {
      newErrors.skew = "Skew must be between 0 and 90";
    }

    setErrors(newErrors);
  };

  return (
    <div style={{ marginTop: "15px" }}>
      {/* Type of Structure */}
      <div>
        <label>Type of Structure</label>
        <br />
        <select
          value={structureType}
          onChange={(e) => setStructureType(e.target.value)}
        >
          <option>Highway</option>
          <option>Other</option>
        </select>
      </div>

      <br />

      {/* Project Location */}
      <div>
        <button
          disabled={isDisabled}
          onClick={() => setShowPopup(true)}
        >
          {location ? location : "Project Location"}
        </button>
      </div>

      <br />

      {/* Popup */}
      {showPopup && (
        <LocationPopup
          onClose={() => setShowPopup(false)}
          onSelect={(city) => {
            setLocation(city);
            setShowPopup(false);
          }}
        />
      )}

      {/* Span */}
      <div>
        <label>Span (m)</label>
        <br />
        <input
          type="number"
          value={span}
          onChange={(e) => {
            const value = e.target.value;
            setSpan(value);
            validate(value, width, skew);
          }}
          disabled={isDisabled}
        />
        {errors.span && (
          <p style={{ color: "red" }}>{errors.span}</p>
        )}
      </div>

      <br />

      {/* Carriageway Width */}
      <div>
        <label>Carriageway Width (m)</label>
        <br />
        <input
          type="number"
          value={width}
          onChange={(e) => {
            const value = e.target.value;
            setWidth(value);
            validate(span, value, skew);
          }}
          disabled={isDisabled}
        />
        {errors.width && (
          <p style={{ color: "red" }}>{errors.width}</p>
        )}
      </div>

      <br />

      {/* Footpath */}
      <div>
        <label>Footpath</label>
        <br />
        <select disabled={isDisabled}>
          <option>None</option>
          <option>Single</option>
          <option>Both</option>
        </select>
      </div>

      <br />

      {/* Skew Angle */}
      <div>
        <label>Skew Angle (°)</label>
        <br />
        <input
          type="number"
          value={skew}
          onChange={(e) => {
            const value = e.target.value;
            setSkew(value);
            validate(span, width, value);
          }}
          disabled={isDisabled}
        />
        {errors.skew && (
          <p style={{ color: "red" }}>{errors.skew}</p>
        )}
      </div>
    </div>
  );
}

export default BasicInputs;