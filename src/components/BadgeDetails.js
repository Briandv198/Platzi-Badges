import React from "react";
import { Link } from "react-router-dom";

import Badge from "./Badge";
import MainButton from "./MainButton";

import LogoHero from "../assets/images/badge-header.svg";
import "./styles/badgesDetails.css";

function BadgeDetails(props) {
  const badge = props.data;
  return (
    <div className="container">
      <div className="hero-space">
        <img src={LogoHero} alt="Hero" />
        <h1>
          {badge.firstName} <span className="bold">{badge.lastName}</span>
        </h1>
      </div>
      <Badge
        name={badge.firstName}
        lastName={badge.lastName}
        jobTitle={badge.jobTitle}
        twitter={badge.twitter}
        email={badge.email}
        className="badge"
      />
      <div className="container-buttons">
        <Link to={`/badges/${badge.id}/edit`} className="edit-button">
          <MainButton content="Edit"></MainButton>
        </Link>
        <MainButton content="Delete" className="delete-button" />
      </div>
    </div>
  );
}

export default BadgeDetails;
