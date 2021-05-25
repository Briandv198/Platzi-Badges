import React from "react";

import BadgesList from "../components/BadgesList.js";
import MainButton from "../components/MainButton.js";

import confLogo from "../assets/images/badge-header.svg";
import "./styles/badges.css";

import { Link } from "react-router-dom";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Freda",
        lastName: "Grady",
        email: "Leann_Berge@gmail.com",
        jobTitle: "Legacy Brand Director",
        twitter: "FredaGrady22221-7573",
        avatarUrl:
          "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Major",
        lastName: "Rodriguez",
        email: "Ilene66@hotmail.com",
        jobTitle: "Human Research Architect",
        twitter: "ajorRodriguez61545",
        avatarUrl:
          "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Daphney",
        lastName: "Torphy",
        email: "Ron61@hotmail.com",
        jobTitle: "National Markets Officer",
        twitter: "DaphneyTorphy96105",
        avatarUrl:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
      },
    ],
  };
  render() {
    return (
      <div className="badges">
        <div className="badges__hero">
          <img src={confLogo} alt="Logo"></img>
        </div>

        <Link to="/badges/new" className="main__button">
          <MainButton content="New Badge"></MainButton>
        </Link>

        <BadgesList badges={this.state.data} />
      </div>
    );
  }
}

export default Badges;
