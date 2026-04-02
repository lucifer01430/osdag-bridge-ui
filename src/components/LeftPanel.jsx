import { useState } from "react";
import BasicInputs from "./BasicInputs";
import AdditionalInputs from "./AdditionalInputs";

function LeftPanel() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="left-panel">
      <div className="title">Group Design</div>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "basic" ? "active" : ""}`}
          onClick={() => setActiveTab("basic")}
        >
          Basic Inputs
        </button>

        <button
          className={`tab-btn ${activeTab === "additional" ? "active" : ""}`}
          onClick={() => setActiveTab("additional")}
        >
          Additional Inputs
        </button>
      </div>

      {activeTab === "basic" && <BasicInputs />}
      {activeTab === "additional" && <AdditionalInputs />}
    </div>
  );
}

export default LeftPanel;
