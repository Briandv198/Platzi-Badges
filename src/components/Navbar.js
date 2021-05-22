import React from "react";
import logo from "../assets/images/badge-header.svg";
import "./styles/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="/" className="navbar__logo">
          <img src={logo} alt="logo" className="logo--img"></img>
          <span className="logo--light">Conference</span>
          <span className="logo--bold">Badges</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
