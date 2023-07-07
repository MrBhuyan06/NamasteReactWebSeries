import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header border flex">
      <div className="logo">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/swiggymart">Swiggy Mart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
