import "./WeatherCard.css";
import sunny_day from "../../assets/sunny_d.jpg";
import sunny_night from "../../assets/sunny_n.jpg";
import cloudy_day from "../../assets/cloudy_d.jpg";
import cloudy_night from "../../assets/cloudy_n.jpg";
import storm_day from "../../assets/storm_d.jpg";
import storm_night from "../../assets/storm_n.jpg";
import rain_day from "../../assets/rain_d.jpg";
import rain_night from "../../assets/rain_n.jpg";
import fog_day from "../../assets/fog_d.jpg";
import fog_night from "../../assets/fog_n.jpg";

function WeatherCard() {
  return (
    <>
      <section className="weather__card">
        <p className="weather__card-temp">75&deg;F</p>
        <img src={cloudy_day} alt="Cloudy Day" className="weather__card-img" />
      </section>
    </>
  );
}

export default WeatherCard;
