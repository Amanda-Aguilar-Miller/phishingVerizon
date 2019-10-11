import React, { Component } from "react";
import "./App.css";
import LinkWrapper from "./navigation/navLinks";
import MainSection from "./navigation/mainSection";
import BottomWrappers from "./navigation/bottomWrapper";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: [],
      number: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  testCapture = event => {
    event.preventDefault();
    console.log(event.target);
    this.setState({ phone: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          Choose free 2-day shipping or in-store pickup.
        </div>
        <LinkWrapper />
        <div className="hrBreak">
          <hr />
        </div>
        <MainSection />
        <BottomWrappers />

        {/* {console.log(this.state.phone)} */}
        <div className="finalLogo">
          <img src={require("./blacklogo.png")} />
        </div>
      </div>
    );
  }
}
