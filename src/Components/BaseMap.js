import React, { Component } from "react";
import { render } from "react-dom";

import {
  Map,
  GoogleApiWrapper,
  Circle,
  InfoWindow,
  Marker,
} from "google-maps-react";
// import CurrentLocatio n from "./CurrentLocation";

class BaseMap extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    doubleClickCords: {
      lat: [],
      lng: [],
    },
  };

  componentDidMount() {
    this.fetchCords();
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }

  mapClicked = (mapProps, map, e) => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    // this.updateLocation(lat, lng)
    console.log(lat, lng);
    this.setState({
      doubleClickCords: {
        lat: lat,
        lng: lng,
      },
    });
    // POST Fetch to backend of current meetup Coordinates
    // if meetup already exists, PATCH coordinates to new click
  };

  fetchCords = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, longitude);
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }.bind(this)
    );

    // setTimeout(this.fetchCords, 5000);
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  // mapClicked(mapProps, map, e) {
  //   console.log("latidude", e);
  //   console.log("longitude", e);
  // }

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const circleCoords = {
      lat: this.state.doubleClickCords.lat,
      lng: this.state.doubleClickCords.lng,
    };

    return (
      <Map
        centerAroundCurrentLocation
        google={this.props.google}
        zoom={15}
        onDblclick={this.mapClicked}
        // style={this.MapStyles}
      >
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: this.state.lat, lng: this.state.lng }}
          name={"current location"}
        />
        <Marker position={{ circleCoords }} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        <Circle center={circleCoords} radius={40} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD7OsSnh8APNxdPhYa7CSDAkUhNSiBRzus",
})(BaseMap);
const MapStyles = {
  width: "75%",
  height: "75%",
};
