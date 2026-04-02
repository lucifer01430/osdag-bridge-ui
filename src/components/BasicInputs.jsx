import { useState } from "react";
import LocationPopup from "./LocationPopup";

function BasicInputs() {
  const [structureType, setStructureType] = useState("Highway");
  const [showPopup, setShowPopup] = useState(false);
  const isDisabled = structureType === "Other";
  const [location, setLocation] = useState("");

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
        <button disabled={isDisabled} onClick={() => setShowPopup(true)}>
          {location ? location : "Project Location"}
        </button>
      </div>

      <br />

      {/* Popup  */}
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
        <input type="number" disabled={isDisabled} />
      </div>

      <br />

      {/* Carriageway */}
      <div>
        <label>Carriageway Width (m)</label>
        <br />
        <input type="number" disabled={isDisabled} />
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

      {/* Skew */}
      <div>
        <label>Skew Angle (°)</label>
        <br />
        <input type="number" disabled={isDisabled} />
      </div>
    </div>
  );
}

export default BasicInputs;
