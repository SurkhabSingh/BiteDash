import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const status = useOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo " src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status:{status ? "😂" : "😭"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
