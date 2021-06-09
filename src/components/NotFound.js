import React from "react";

import Error from "../assets/images/error.jpg";

import "./styles/notFound.css";

function NotFound(props) {
  return (
    <div className="not-found__container">
      <h1>Ups!!!</h1>
      <h2>notFound</h2>
      <img src={Error} />
    </div>
  );
}

export default NotFound;
