import React from "react";
import confLogo from "../assets/images/badge-header.svg";
import "../styles/badge.css";

class Badge extends React.Component {
  const;
  render() {
    return (
      <div className="badge">
        <div className="badge__header">
          <img src={confLogo} alt="Logo conferencia"></img>
        </div>

        <div className="badge__section-name">
          <img
            src={this.props.avatarUrl}
            alt="avatar"
            className="section-name--avatar"
          ></img>
          <h1>
            {this.props.name} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="badge__section-info">
          <p>{this.props.jobTitle}</p>
          <p>@{this.props.twitter}</p>
        </div>

        <div className="badge__footer">
          <p>#conferencia</p>
        </div>
      </div>
    );
  }
}

export default Badge;
