import React from "react";
import "./styles/mainButton.css";

class MainButton extends React.Component {
  render() {
    return (
      <button
        className="main-button"
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.content}
      </button>
    );
  }
}

export default MainButton;
