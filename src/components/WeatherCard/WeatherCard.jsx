import React, { useContext } from "react";
import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const currentTemperature = useContext(CurrentTemperatureUnitContext);

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather__card">
      <p className="weather__card-temp">
        {currentTemperature.currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg;{currentTemperature.currentTemperatureUnit === "F" ? "F" : "C"}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Weather card shows ${weatherOption?.condition || "default"}`}
        className="weather__card-img"
      />
    </section>
  );
}

export default WeatherCard;
