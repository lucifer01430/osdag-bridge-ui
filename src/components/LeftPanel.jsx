import BasicInputs from "./BasicInputs";

function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="title">Group Design</div>

      <div>
        <button>Basic Inputs</button>
        <button>Additional Inputs</button>
      </div>

      <BasicInputs />
    </div>
  );
}

export default LeftPanel;