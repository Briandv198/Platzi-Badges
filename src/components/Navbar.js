import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/badge-header.svg";
import "./styles/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" className="logo--img"></img>
          <div className="header-text">
            <span className="logo--light">Conference</span>
            <span className="logo--bold">Badges</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
