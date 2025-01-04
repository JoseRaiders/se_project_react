import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ addButtonClick }) {
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
      <ul className="cards__list">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
