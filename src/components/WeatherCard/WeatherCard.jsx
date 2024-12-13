import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
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
    <>
      <section className="weather__card">
        <p className="weather__card-temp">
          {Math.round(weatherData.temp.F)}&deg;F
        </p>
        <img
          src={weatherOption?.url}
          alt={`Weather card shows ${weatherOption?.condition || "default"}`}
          className="weather__card-img"
        />
      </section>
    </>
  );
}

export default WeatherCard;
