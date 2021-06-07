import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

import "./styles/badgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos nungun Badge</h3>
        </div>
      );
    }
    return (
      <ul className="badges__list">
        {this.props.badges
          .map((badge) => {
            return (
              <Link to={`/badges/${badge.id}/edit`}>
                <li key={badge.id}>
                  <Gravatar email={badge.email} alt="avatar" />
                  <div className="info">
                    <p className="list-name">
                      <span className="text-light">{badge.firstName} </span>
                      <span className="text-bold">{badge.lastName}</span>
                    </p>
                    <p className="list-social">
                      <span className="twitter"></span>@{badge.twitter}
                    </p>
                    <p className="job-title">{badge.jobTitle}</p>
                  </div>
                </li>
              </Link>
            );
          })
          .reverse()}
      </ul>
    );
  }
}

export default BadgesList;
