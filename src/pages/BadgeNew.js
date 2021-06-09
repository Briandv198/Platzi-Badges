import React from "react";
import api from "../api";

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import { Loader } from "../components/Loader";

import "./styles/badgeNew.css";
import logoHero from "../assets/images/badge-header.svg";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
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

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
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
            className="badge"
          />
          <div className="badge-form">
            <BadgeForm
              title="New Attendant"
              onChange={this.heandleChange}
              onSubmit={this.heandleSubmit}
              formValue={this.state.form}
              error={this.state.error}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default BadgeNew;
