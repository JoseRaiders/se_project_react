import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  formName,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_clothes">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-item"
          id="button-close"
          aria-label="Close button"
        />
        <form className="modal__form" name={formName} onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="modal__submit"
            id="form-button-close"
            aria-label="Submit button"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
