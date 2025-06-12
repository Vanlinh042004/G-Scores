import { NavLink } from "react-router-dom";
import "./Menu.css"; // Assuming you have a CSS file for styling
const Menu = () => (
  <>
    {" "}
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">Search Scores</NavLink>
        </li>
        <li>
          <NavLink to="/reports">Reports</NavLink>
        </li>
        <li>
          <NavLink to="/setting">Settings</NavLink>
        </li>
      </ul>
    </div>
  </>
);

export default Menu;
