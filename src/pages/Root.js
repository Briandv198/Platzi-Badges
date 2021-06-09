import React from "react";
import { Link } from "react-router-dom";

import MainButton from "../components/MainButton.js";

import confLogo from "../assets/images/badge-header.svg";
import "./styles/root.css";

class Root extends React.Component {
  render() {
    return (
      <div className="root">
        <img src={confLogo} alt="root__Logo" className="logo"></img>

        <div className="root__info">
          <h1 className="info--title">Print Your Badges</h1>

          <p className="info--paragraph">
            The easiest way to manage your conference
          </p>

          <Link to="/badges" className="button">
            <MainButton content="Start Now" color="green"></MainButton>
          </Link>
        </div>
      </div>
    );
  }
}

export default Root;
