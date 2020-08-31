import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import User from "./Components/User.js";
import { render } from "react-dom";
import Login from "./Components/Login.js";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./Components/Home.js";
import BaseMap from "./Components/BaseMap.js";

const mapStyles = {
  width: "100%",
  height: "70%",
};

class App extends React.Component {
  handleSignup = (e, userInfo) => {
    e.preventDefault();
    console.log("signup");
  };

  handleLogin = (e, userInfo) => {
    e.preventDefault();
    console.log("login");
  };

  renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} />;

  renderSignUpPage = () => <Login handleLoginOrSignup={this.handleSignup} />;

  render() {
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/map" component={BaseMap} />
        <Route path="/login" render={this.renderLoginPage} />
        <Route path="/signup" render={this.renderSignUpPage} />
      </div>
    );
  }
}

export default App;
// <Map zoom={18} centerAroundCurrentLocation onDblclick={this.mapClicked}>
// </Map>
