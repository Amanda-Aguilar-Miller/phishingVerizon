import React, { Component } from "react";
import "./App.css";
import LinkWrapper from "./navigation/navLinks";
import MainSection from "./navigation/mainSection";
import BottomWrappers from "./navigation/bottomWrapper";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Gotcha from "./pages/gotcha";

export default class App extends Component {
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
        <Switch>
          <Route exact path="/gotcha" component={Gotcha} />
        </Switch>
        <BottomWrappers />

        <div className="finalLogo">
          <img src={require("./blacklogo.png")} />
        </div>
      </div>
    );
  }
}
