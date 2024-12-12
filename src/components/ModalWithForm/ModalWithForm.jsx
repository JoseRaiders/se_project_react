import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title }) {
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__close"
            type="button"
            id="clothes-button-close"
            aria-label="Close button"
          ></button>
          <form className="modal__form" name="add-clothes-form">
            {children}
            <button
              type="submit"
              class="modal__submit"
              id="form-button-close"
              aria-label="Add garment button"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;
