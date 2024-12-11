import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherDta] = useState({ type: "hot" });

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main weatherData={weatherData} />
          <Footer />
        </div>
        <ModalWithForm />
      </div>
    </>
  );
}

export default App;
