import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-preview"
          id="clothes-button-close"
          aria-label="Close button"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__details">
          <h3 className="modal__caption">{card.name}</h3>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            onClick={onClose}
            type="button"
            className="modal__close modal__close-delete"
            id="clothes-delete-button"
            aria-label="Delete button"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
