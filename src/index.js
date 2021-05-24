// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

// const jsx = <h1>Hello, Platzi Badges!</h1>;

// const element = React.createElement("h1", {}, "Hi, Im childrend");

// const element = React.createElement(
//   "a",
//   { href: "google.com" },
//   "Go to Google"
// );

// const name = "Brian";
// const element = React.createElement("h1", {}, `Hi Im ${name}`);

// const jsx = <h1>Hi Im {name}</h1>;

// const jsx = (
//   <div>
//     <h1>Im Title</h1>
//     <p>Im paragraph</p>
//   </div>
// );

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Im title 2"),
//   React.createElement("p", {}, "Im paragraph 2")
// );

//Importamos nuestro componente/

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge />, container);
import ReactDOM from "react-dom";
import React from "react";
import Badges from "./pages/BadgeNew.js";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
