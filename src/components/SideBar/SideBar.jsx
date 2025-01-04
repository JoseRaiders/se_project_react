import "./SideBar.css";
import avatar from "../../assets/Avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="Avatar" />
        <p className="sidebar__user">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
