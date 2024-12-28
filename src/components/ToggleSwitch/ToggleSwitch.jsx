import React, { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const handleChange = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };
  // console.log(currentTempUnit);
  return (
    <div className="toggle">
      <label className="toggle__switch" htmlFor="toggle">
        <input
          className="toggle__switch-box"
          type="checkbox"
          name="toggle"
          id="toggle"
          aria-label="Toggle temperature unit"
          onChange={handleChange}
        />
        <span
          className={
            currentTempUnit === "F"
              ? "toggle__switch-slider toggle__switch-slider-F"
              : "toggle__switch-slider toggle__switch-slider-C"
          }
        ></span>
        <p
          className={`toggle__temp-F ${
            currentTempUnit === "F" ? "toggle__switch-active-F" : ""
          }`}
        >
          F
        </p>
        <p
          className={`toggle__temp-C ${
            currentTempUnit === "C" ? "toggle__switch-active-C" : ""
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
}

export default ToggleSwitch;
