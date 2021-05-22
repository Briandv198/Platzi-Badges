import React from "react";

class badgeForm extends React.Component {
  // heandelChange = (e) => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // });

  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  heandelClick = (e) => {
    console.log("Button was click");
  };
  heandelSubmit = (e) => {
    e.preventDefault();
    console.log("Button was submit");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.heandelSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={this.props.onChange}
              className=""
              type="text"
              name="firstName"
              value={this.props.formValue.firstName}
            ></input>
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={this.props.onChange}
              className=""
              type="text"
              name="lastName"
              value={this.props.formValue.lastName}
            ></input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className=""
              type="email"
              name="email"
              value={this.props.formValue.email}
            ></input>
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className=""
              type="text"
              name="jobTitle"
              value={this.props.formValue.jobTitle}
            ></input>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className=""
              type="text"
              name="twitter"
              value={this.props.formValue.twitter}
            ></input>
          </div>

          <button onClick={this.heandelClick} className="" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default badgeForm;
