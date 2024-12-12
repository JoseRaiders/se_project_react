import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/Avatar.jpg";

function Header({ addButtonClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="wtwr (What to Wear) logo"
        />
        <p className="header__date-and-location">{currentDate}, New York</p>
        <button
          type="button"
          className="header__add-clothes-btn"
          onClick={addButtonClick}
        >
          + Add clothes
        </button>
        <div className="header__user-container">
          <p className="header__user">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="Avatar" />
        </div>
      </header>
    </>
  );
}

export default Header;
