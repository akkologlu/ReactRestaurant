import React from "react";
import logo from "../assets/Daco_4496164.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <div className="mainLink">
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
        </div>
        <img src={logo} alt="" />
        <div className="mainLink">
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
