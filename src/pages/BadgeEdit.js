import React from "react";
import api from "../api";

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import Loading from "../components/Loading";

import "./styles/badgeEdit.css";
import logoHero from "../assets/images/badge-header.svg";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="badge-edit">
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
              title="Edit Attendant"
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

export default BadgeEdit;
