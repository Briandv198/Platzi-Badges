import React from "react";
import Badge from "../components/Badge.js";
import Navbar from "../components/Navbar.js";
import BadgeForm from "../components/BadgeForm.js";
import "./styles/badgeNew.css";
import logoHero from "../assets/images/badge-header.svg";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  heandleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="hero-sapece">
          <img src={logoHero} alt="hero"></img>
        </div>
        <Badge
          name={this.state.form.firstName}
          lastName={this.state.form.lastName}
          jobTitle={this.state.form.jobTitle}
          twitter={this.state.form.twitter}
          email={this.state.form.email}
          avatarUrl="https://cutt.ly/jb8eoPb"
          className="badge"
        />
        <div>
          <BadgeForm
            onChange={this.heandleChange}
            formValue={this.state.form}
          />
        </div>
      </div>
    );
  }
}

export default BadgeNew;
