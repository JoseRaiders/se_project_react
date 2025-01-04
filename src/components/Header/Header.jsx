import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/Avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ addButtonClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="wtwr (What to Wear) logo"
        />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={addButtonClick}
      >
        + Add clothes
      </button>
      <Link to="/profile" className="header__user-link">
        <div className="header__user-container">
          <p className="header__user">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="Avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
