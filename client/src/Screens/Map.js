import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Button } from "antd";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./Map.css";
import MapOverlay from "Components/MapOverlay";
// import ReportSteps from "Components/ReportSteps";
// import NextButton from "Components/NextButton";
import MapSearchBar from "Components/MapSearchBar";

// start using module resolver?
import { reportAdd, getAddress, onMapScreenClicked } from "../redux/actions";
import TrackingService from "../TrackingService";
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
        {this.state.hasGeoLocation ? (
          <Button
            type="primary"
            shape="circle"
            size="large"
            style={styles.currentLocationButton}
            onClick={this.getUserLocation}
          />
        ) : null}
        <div style={styles.map} ref={el => (this.mapContainer = el)} />
        <img alt="marker" src="./pin.svg" style={styles.markerStyle} />
        <MapSearchBar
          address={address}
          ref={el => (this.geoCoderContainer = el)}
        />
      </Layout>
    );
  }
}
const styles = {
  searchBar: {
    position: "absolute",
    top: "15px",
    display: "flex",
    justifyContent: "center",
    width: "calc(100% - 30px)",
    margin: "0 15px"
  },
  bottomBar: {
    justifyContent: "center",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    height: "70px",
    padding: "5px 10px",
    width: "100%",
    backgroundColor: "white",
    zIndex: "100"
  },
  currentLocationButton: {
    backgroundImage: "url('./current-location.svg')",
    backgroundSize: "45%",
    backgroundColor: "white",
    borderColor: "white",
    margin: "20px 15px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 98,
    bottom: "0",
    right: "10px",
    position: "absolute"
  },
  map: {
    width: "100%",
    position: "fixed",
    top: 0,
    bottom: 0
  },
  boxStyle: {
    zIndex: 3,
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  header: {
    backgroundColor: "white",
    zIndex: 100
  },
  markerStyle: {
    position: "fixed",
    zIndex: "98",
    top: "calc(50% - 15px)",
    left: "calc(50% - 15px)",
    width: "30px",
    height: "30px"
  }
};

function mapStateToProps(state = {}) {
  const { ui = {} } = state;
  const { address = false, mapScreenClicked = false } = ui;
  return { address, mapScreenClicked };
}

export default connect(
  mapStateToProps,
  { reportAdd, getAddress, onMapScreenClicked }
)(withRouter(Map));
