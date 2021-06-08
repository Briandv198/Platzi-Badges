import React from "react";
import { Link } from "react-router-dom";

import Badge from "./Badge";
import MainButton from "./MainButton";
import DeleteBadgeModal from "./DeleteBadgeModal";

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
          <MainButton content="Edit" color="green" />
        </Link>
        <div>
          <MainButton
            onClick={props.onOpenModal}
            content="Delete"
            className="delete-button"
            color="red"
          />
          <DeleteBadgeModal
            isOpen={props.modalIsOpen}
            onClose={props.onCloseModal}
            onDeleteBadge={props.onDeleteBadge}
          />
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
