import React, { useState } from "react";
import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onClick }) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmationOpen(true); // open confirmation modal
  };

  const handleConfirmDelete = () => {
    onClick(card._id); // trigger the delete callback
    setIsConfirmationOpen(false); // close confirmation modal
    onClose(); // close the item modal
  };

  const handleCancelDelete = () => {
    setIsConfirmationOpen(false); // close confirmation modal on cancel btn click
  };

  return (
    <>
      {!isConfirmationOpen && (
        <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
          <div className="modal__container modal__container_type_image">
            <button
              onClick={onClose}
              type="button"
              className="modal__close modal__close-preview"
              aria-label="Close button"
            ></button>
            <img src={card.imageUrl} alt={card.name} className="modal__image" />
            <div className="modal__details">
              <h3 className="modal__caption">{card.name}</h3>
              <p className="modal__weather">Weather: {card.weather}</p>
              <button
                onClick={handleDeleteClick}
                type="button"
                className="modal__delete-btn"
                aria-label="Delete button"
              >
                Delete item
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmationOpen && (
        <div className="modal modal_opened">
          <div className="modal__container modal__container_confirmation">
            <button
              onClick={handleCancelDelete}
              type="button"
              className="modal__close modal__close-confirmation"
              aria-label="Close button"
            ></button>
            <p className="modal__confirm-heading">
              Are you sure you want to delete this item? This action is
              irreversible.
            </p>
            <button
              type="text"
              onClick={handleConfirmDelete}
              className="modal__confirm-btn"
              aria-label="Delete button"
            >
              Yes, delete item
            </button>
            <button
              type="text"
              onClick={handleCancelDelete}
              className="modal__cancel-btn"
              aria-label="Cancel button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemModal;
