import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Button } from "antd";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import { CSSTransition } from "react-transition-group";
import TrackingService from "TrackingService";

import MapOverlay from "Components/MapOverlay";
import MapSearchBar from "Components/MapSearchBar";

import styles from "./Map.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./pin.svg";

import { reportAdd, getAddress, onMapScreenClicked } from "redux/actions";

const { track } = TrackingService;

const defaultCoordinates = {
  longitude: 13.003365,
  latitude: 55.6051458
};

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  state = {
    hasGeoLocation: true,
    userCoordinates: {}
  };
  componentDidMount() {
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [defaultCoordinates.longitude, defaultCoordinates.latitude],
      zoom: 13
    });

    const outer = document.createElement("div");
    const el = document.createElement("div");
    el.className = "pulsating-circle";
    outer.append(el);
    this.currentLocation = new mapboxgl.Marker(outer);

    map.on("dragend", this.onMapDragEnd);
    map.on("zoomend", this.onMapDragEnd);
    this.geoCoderContainer.onGo(map);

    this.map = map;
  }

  askForLocation = (onLoad = false) => {
    if (window.navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(PermissionStatus => {
          if (PermissionStatus.state === "denied") {
            this.setState({ hasGeoLocation: false });
          } else {
            this.getUserLocation(onLoad);
          }
        });
    } else {
      // safari doesnt have the Permission API
      this.getUserLocation(onLoad);
    }
  };
  onGeoCodeResult = event => {
    track("Location from Search");
    const coords = event.result.geometry.coordinates;
    this.map.flyTo({ center: [coords[0], coords[1]] });
  };
  onMapDragEnd = () => {
    const center = this.map.getCenter();
    const coordinates = {
      longitude: center.lng,
      latitude: center.lat
    };
    this.props.getAddress(coordinates);
  };

  getUserLocation = (onLoad = false) => {
    if (!navigator.geolocation) {
      return;
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.onSuccessCurrentPosition(pos, onLoad);
      },
      this.onErrorCurrentPosition,
      options
    );
  };
  onSuccessCurrentPosition = (pos, onLoad) => {
    const coordinates = pos.coords;
    const center = [coordinates.longitude, coordinates.latitude];
    let flyOptions = { center };
    if (onLoad) {
      // if got user position on page load zoom in abit.
      flyOptions.zoom = 16;
    }

    this.currentLocation.setLngLat(center).addTo(this.map);
    this.props.getAddress(coordinates);
    this.setState({ hasGeoLocation: true });
    this.map.flyTo(flyOptions);
  };

  onErrorCurrentPosition = data => {
    this.setState({ hasGeoLocation: false });
  };

  onNextClick = () => {
    const center = this.map.getCenter();
    const coordinates = {
      longitude: center.lng,
      latitude: center.lat
    };
    this.props.reportAdd(coordinates);
    const { history } = this.props;
    history.push({
      pathname: "/photo"
    });
  };

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }
  onMapScreenClicked = () => {
    const { onMapScreenClicked } = this.props;
    this.askForLocation(true);
    onMapScreenClicked();
  };

  render() {
    const { mapScreenClicked, address } = this.props;
    return (
      <Layout>
        <CSSTransition
          unmountOnExit
          className="overlay"
          classNames="overlay"
          timeout={500}
          in={!mapScreenClicked}
        >
          <MapOverlay onClick={this.onMapScreenClicked} />
        </CSSTransition>
        { true ? (
          <Button
            type="primary"
            shape="circle"
            size="large"
            className={styles.currentLocationButton}
            onClick={this.getUserLocation}
          />
        ) : null}
        <div
          style={{ position: "fixed" }}
          className={styles.map}
          ref={el => (this.mapContainer = el)}
        />
        <img alt="marker" src={Pin} className={styles.markerStyle} />
        <MapSearchBar
          address={address}
          ref={el => (this.geoCoderContainer = el)}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {} } = state;
  const { address = false, mapScreenClicked = false } = ui;
  return { address, mapScreenClicked };
}

export default connect(
  mapStateToProps,
  { reportAdd, getAddress, onMapScreenClicked }
)(withRouter(Map));
