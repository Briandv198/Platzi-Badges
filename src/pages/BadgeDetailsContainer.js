import React from "react";
import api from "../api";

import BadgeDetails from "../components/BadgeDetails";

import Loading from "../components/Loading";

class BadgeDetailsContainer extends React.Component {
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

    return <BadgeDetails data={this.state.data} />;
  }
}

export default BadgeDetailsContainer;
