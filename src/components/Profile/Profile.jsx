import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ addButtonClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection addButtonClick={addButtonClick} />
    </div>
  );
}

export default Profile;
