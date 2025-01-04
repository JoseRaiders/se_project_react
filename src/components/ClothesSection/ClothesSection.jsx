import "./ClothesSection.css";

function ClothesSection({ addButtonClick }) {
  return (
    <div className="clothes">
      <div className="clothes__section">
        <h1 className="clothes__section-header">Your items</h1>
        <button
          type="button"
          className="clothes__section-btn"
          onClick={addButtonClick}
        >
          + Add new
        </button>
      </div>
    </div>
  );
}

export default ClothesSection;
