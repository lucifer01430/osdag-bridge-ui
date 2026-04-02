import { useState } from "react";
import LocationPopup from "./LocationPopup";
import GeometryPopup from "./GeometryPopup";

function BasicInputs() {
  const [structureType, setStructureType] = useState("Highway");
  const [showPopup, setShowPopup] = useState(false);
  const [location, setLocation] = useState("");

  const [span, setSpan] = useState("");
  const [width, setWidth] = useState("");
  const [skew, setSkew] = useState("");

  const [errors, setErrors] = useState({});

  const isDisabled = structureType === "Other";

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

  const [showGeometry, setShowGeometry] = useState(false);

  return (
    <div className="input-section">
      <div className="form-group">
        <label className="form-label">Type of Structure</label>
        <select
          value={structureType}
          onChange={(e) => setStructureType(e.target.value)}
        >
          <option>Highway</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group">
        <button
          className="btn btn-primary"
          disabled={isDisabled}
          onClick={() => setShowPopup(true)}
        >
          <i className="fa fa-map-marker" aria-hidden="true" /> Project Location
          {location ? `: ${location}` : ""}
        </button>
      </div>

      {showPopup && (
        <LocationPopup
          onClose={() => setShowPopup(false)}
          onSelect={(city) => {
            setLocation(city);
            setShowPopup(false);
          }}
        />
      )}

      {showGeometry && (
        <GeometryPopup width={width} onClose={() => setShowGeometry(false)} />
      )}

      <div className="form-group">
        <label className="form-label">Span (m)</label>
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
        {errors.span && <p className="error-message">{errors.span}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Carriageway Width (m)</label>
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
        {errors.width && <p className="error-message">{errors.width}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Footpath</label>
        <select disabled={isDisabled}>
          <option>None</option>
          <option>Single</option>
          <option>Both</option>
        </select>
      </div>

      <div className="form-group">
        <button
          className="btn btn-primary"
          disabled={isDisabled}
          onClick={() => setShowGeometry(true)}
        >
          <i className="fa fa-cogs" aria-hidden="true" /> Modify Additional Geometry
        </button>
      </div>

      <div className="form-group">
        <label className="form-label">Skew Angle (deg)</label>
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
        {errors.skew && <p className="error-message">{errors.skew}</p>}
      </div>
    </div>
  );
}

export default BasicInputs;
