import React, { Component } from "react";
import { render } from "react-dom";

class Home extends React.Component {
  // fetchCords = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   }
  //   setTimeout(this.fetchCords, 1000);
  // };

  render() {
    return (
      <div>
        <h4>Home Page </h4>
      </div>
    );
  }
}

export default Home;
