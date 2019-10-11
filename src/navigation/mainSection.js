import React, { Component } from "react";
import App from "../App";

class MainSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // phone: [],
      number: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  testCapture = event => {
    event.preventDefault();
    this.setState({ number: event.target.value });
    console.log(this.state.number);
  };
  render() {
    return (
      <div className="signIn-register-wrapper">
        <div className="SignIn-Wrapper">
          <h1 className="SignIn"> Sign In</h1>
          <form onSubmit={this.testCapture}>
            <label className="IDToken">Mobile Number of User ID</label>
            <input
              type="text"
              className="form-control"
              name="number"
              value={this.state.number}
              onChange={e => this.handleChange(e)}
              autoComplete="off"
              placeholder="Mobile Number or User ID"
            />
            <label className="PasswordToken">Password</label>
            <br />
            <input
              type="text"
              className="password-control"
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
            <br />
            <input type="checkbox" id="rememberUser" />
            <span className="Remember">Remember me</span>
            <a href className="ForgotInfo">
              Forgot Your Info?
            </a>

            <br />
            <input type="submit" value="Sign In" className="signInBtn" />
          </form>
        </div>

        <div>
          <h1 className="Register">Register</h1>
          <p className="text-wrapper">
            With Verizon, you get the convenience of managing your <br />{" "}
            account online including these great benefits:
          </p>
          <div className="list-wrapper">
            <li>View your usage</li>
            <li>Make payments</li>
            <li>Change or reset your Voice Mail password</li>
            <li>Access My Verizon on your mobile phone</li>

            <br />
            <a href className="learnMore">
              Learn More
            </a>
          </div>
          <button className="RegisterBtn">Register</button>
        </div>
      </div>
    );
  }
}

export default MainSection;
