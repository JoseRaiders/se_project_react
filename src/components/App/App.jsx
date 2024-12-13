import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { coordinates, APIKey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});

  const addButtonClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeather(coordinates, APIKey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
        // debugger;
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header addButtonClick={addButtonClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
        formName="add-garment-form"
      >
        <label htmlFor="name" className="modal__label modal__label-input">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label modal__label-input">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <div className="modal__radio-button">
            <input
              type="radio"
              className="modal__radio-input"
              id="hot"
              name="options"
            />
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              Hot
            </label>
          </div>
          <div className="modal__radio-button">
            <input
              type="radio"
              className="modal__radio-input"
              id="warm"
              name="options"
            />
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              Warm
            </label>
          </div>
          <div className="modal__radio-button">
            <input
              type="radio"
              className="modal__radio-input"
              id="cold"
              name="options"
            />
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
