import React from "react";
import api from "../api";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import Badge from "../components/Badge";
import MainButton from "../components/MainButton";

import LogoHero from "../assets/images/badge-header.svg";
import "./styles/badgesDetails.css";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
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

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.error) {
      return this.state.error;
    }

    return (
      <div className="container">
        <div className="hero-space">
          <img src={LogoHero} />
          <h1>
            {this.state.data.firstName}{" "}
            <span className="bold">{this.state.data.lastName}</span>
          </h1>
        </div>
        <Badge
          name={this.state.data.firstName}
          lastName={this.state.data.lastName}
          jobTitle={this.state.data.jobTitle}
          twitter={this.state.data.twitter}
          email={this.state.data.email}
          className="badge"
        />
        <div className="container-buttons">
          <Link
            to={`/badges/${this.state.data.id}/edit`}
            className="edit-button"
          >
            <MainButton content="Edit"></MainButton>
          </Link>
          <MainButton content="Delete" className="delete-button" />
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
