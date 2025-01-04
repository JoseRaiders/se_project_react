import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Footer from "../Footer/Footer";

import { coordinates, APIKey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
// import { addItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  // const [clothingItems, setClothingItems] = useState([]);

  const addButtonClick = () => {
    setActiveModal("add-garment");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const onAddItem = (values) => {
    console.log(values);
    // return addItem(item) // calls the API method to add the item
    //   .then((newItem) => {
    //     // updates state with the new item
    //     setClothingItems((clothingItems) => [newItem.data, ...clothingItems]);
    //     closeModal();
    //   })
    //   .catch(console.error);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header addButtonClick={addButtonClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  addButtonClick={addButtonClick}
                  handleCardClick={handleCardClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeModal}
          onAddItem={onAddItem}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectCard}
          onClose={closeModal}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
