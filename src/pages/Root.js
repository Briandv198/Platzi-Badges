import React from "react";
import { Link } from "react-router-dom";

import MainButton from "../components/MainButton.js";

import confLogo from "../assets/images/badge-header.svg";
import "./styles/root.css";

import ImageHero from "../assets/images/space.png";

class Root extends React.Component {
  render() {
    return (
      <div className="root">
        <img src={confLogo} alt="root__Logo" className="logo"></img>

        <h1 className="root__title">Print Your Badges</h1>

        <Link to="/badges">
          <MainButton content="Start Now"></MainButton>
        </Link>
        <p className="root__paragraph">
          The easiest way to manage your conference
        </p>
      </div>
    );
  }
}

export default Root;
