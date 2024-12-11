import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <h2 className="modal__title">New garment</h2>
          <button
            className="modal__close"
            type="button"
            id="clothes-button-close"
            aria-label="Close button"
          ></button>
          <form className="modal__form" name="add-clothes-form">
            <label htmlFor="name" className="modal__label">
              Name{" "}
              <input
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
              />
            </label>
            <label htmlFor="imageUrl" className="modal__label">
              Image{" "}
              <input
                type="url"
                className="modal__input"
                id="imageUrl"
                placeholder="Image URL"
              />
            </label>
            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label
                htmlFor="hot"
                className="modal__label modal__label_type_radio"
              >
                <input
                  type="radio"
                  className="modal__radio-input"
                  id="hot"
                  name="hot"
                />
                Hot
              </label>
              <label
                htmlFor="warm"
                className="modal__label modal__label_type_radio"
              >
                <input
                  type="radio"
                  className="modal__radio-input"
                  id="warm"
                  name="warm"
                />
                Warm
              </label>
              <label
                htmlFor="cold"
                className="modal__label modal__label_type_radio"
              >
                <input
                  type="radio"
                  className="modal__radio-input"
                  id="cold"
                  name="cold"
                />
                Cold
              </label>
            </fieldset>
            <button
              type="submit"
              class="modal__submit"
              id="form-button-close"
              aria-label="Add garment button"
            >
              Add garment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;
