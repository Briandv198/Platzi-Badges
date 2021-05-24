import React from "react";
import "./styles/badgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="badges__list">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <img src={badge.avatarUrl} alt="avatar"></img>
              <div className="info">
                <p className="list-name">
                  <span className="text-light">{badge.firstName} </span>
                  <span className="text-bold">{badge.lastName}</span>
                </p>
                <p className="list-social">
                  <span className="twitter"></span>@{badge.twitter}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
