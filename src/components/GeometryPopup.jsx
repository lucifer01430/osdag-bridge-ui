import { useState, useEffect } from "react";

function GeometryPopup({ onClose, width }) {
  const [girders, setGirders] = useState(3);
  const [spacing, setSpacing] = useState(0);
  const [overhang, setOverhang] = useState(0.5);

  useEffect(() => {
    if (girders > 1 && width) {
      setSpacing((width / (girders - 1)).toFixed(2));
    }
  }, [girders, width]);

  const handleSpacingChange = (value) => {
    setSpacing(value);

    if (value > 0 && width) {
      const calculated = Math.round(width / value + 1);
      setGirders(calculated);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3 className="modal-title">Modify Geometry</h3>

        <div className="form-group">
          <label className="form-label">No. of Girders</label>
          <input
            type="number"
            value={girders}
            onChange={(e) => setGirders(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Girder Spacing</label>
          <input
            type="number"
            value={spacing}
            onChange={(e) => handleSpacingChange(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Deck Overhang</label>
          <input
            type="number"
            value={overhang}
            onChange={(e) => setOverhang(e.target.value)}
          />
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeometryPopup;
