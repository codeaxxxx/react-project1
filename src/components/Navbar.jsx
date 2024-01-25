import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "./Styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="navbar__links">
        <NavLink exact to="/" className="link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/Contact" className="link" activeClassName="active-link">
          Contact
        </NavLink>
        <NavLink to="/ServicesPage" className="link" activeClassName="active-link">
          Services
        </NavLink>
      </div>
      <div className="navbar__button">
        <NavLink to="/Calendar" className="link-book" >
          <span className="line">Book Now</span>
          <i className="bi bi-bookmark-plus-fill book-icon"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
