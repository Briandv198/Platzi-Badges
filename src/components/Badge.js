import React from "react";
import confLogo from "../assets/images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo conferencia"></img>
        </div>

        <div>
          <img src="" alt="avatar"></img>
          <h1>
            Brian <br /> Dominguez
          </h1>
        </div>

        <div>
          <p>Web Developer</p>
          <p>@briandv98</p>
        </div>
        <div>
          <p>#conferencia</p>
        </div>
      </div>
    );
  }
}

export default Badge;
