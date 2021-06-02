import React from "react";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import "./styles/badgeNew.css";
import logoHero from "../assets/images/badge-header.svg";
import api from "../api";

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

  heandleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <div className="badge-new">
        <main className="main">
          <div className="hero-sapece">
            <img src={logoHero} alt="hero"></img>
          </div>
          <Badge
            name={this.state.form.firstName || "First-Name"}
            lastName={this.state.form.lastName || "Last-Name"}
            jobTitle={this.state.form.jobTitle || "Job-Title"}
            twitter={this.state.form.twitter || "Twitter"}
            email={this.state.form.email}
            avatarUrl="https://cutt.ly/jb8eoPb"
            className="badge"
          />
          <div className="badge-form">
            <BadgeForm
              onChange={this.heandleChange}
              onSubmit={this.heandleSubmit}
              formValue={this.state.form}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default BadgeNew;
