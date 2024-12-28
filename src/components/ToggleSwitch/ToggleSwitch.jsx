import Reach from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <div className="toggle">
      <label className="toggle__switch" htmlFor="toggle">
        <input
          className="toggle__switch-box"
          type="checkbox"
          name="toggle"
          id="toggle"
        />
      </label>
    </div>
  );
}

export default ToggleSwitch;
