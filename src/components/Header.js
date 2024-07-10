import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar">
      <Link className="brand-name" to="/">
        MyPet Shop
      </Link>
      <div className="navbar-inner">
      <Link to="/" id="link-text">
          Register
        </Link>
        <Link to="/login" id="link-text">
          Login
        </Link>
        <Link to="/home" id="link-text">
          Home
        </Link>
        <Link to="/signup" id="link-text">
          SignUp
        </Link>
        <Link to="/view" id="link-text">
          View
        </Link>
        <Link to="/contactus" id="link-text">
          ContactUs
        </Link>
      </div>
    </div>
  );
}

export default Header;
