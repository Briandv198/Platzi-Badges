import React from "react";
import confLogo from "../assets/images/badge-header.svg";
import "../styles/badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge__header">
          <img src={confLogo} alt="Logo conferencia"></img>
        </div>

        <div className="badge__section-name">
          <img src="" alt="avatar" className="section-name--avatar"></img>
          <h1>
            Brian <br /> Dominguez
          </h1>
        </div>

        <div className="badge__section-info">
          <p>Web Developer</p>
          <p>@briandv98</p>
        </div>

        <div className="badge__footer">
          <p>#conferencia</p>
        </div>
      </div>
    );
  }
}

export default Badge;
