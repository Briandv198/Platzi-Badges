import React from "react";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList.js";
import MainButton from "../components/MainButton.js";
import { Loader, LoaderMini } from "../components/Loader.js";
import Error from "../components/Error.js";

import confLogo from "../assets/images/badge-header.svg";
import "./styles/badges.css";

import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1: constructor");

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }
  componentDidMount() {
    console.log("3: componentDidMount");
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5: componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }
  //componte que se manda a llamar justo antes de que se vaya el componente
  componentWillUnmount() {
    console.log("6: compontentWillUnmount");

    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }

  render() {
    console.log("2/4: render");
    if (this.state.loading === true && this.state.data === undefined) {
      return <Loader />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    return (
      <div className="badges">
        <div className="badges__hero">
          <img src={confLogo} alt="Logo"></img>
        </div>

        <Link to="/badges/new" className="main__button">
          <MainButton content="New Badge" color="green"></MainButton>
        </Link>
        <div className="badges-container">
          <BadgesList badges={this.state.data} />

          {this.state.loading && (
            <div className="loader-mini">
              <LoaderMini />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Badges;
