import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ addButtonClick, handleCardClick }) {
  return (
    <div className="clothes">
      <div className="clothes__section">
        <p className="clothes__section-header">Your items</p>
        <button
          type="button"
          className="clothes__section-btn"
          onClick={addButtonClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__section-list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
