import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";

import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import { connect } from "react-redux";
import ErrorReportHeader from "../Components/Header";

// start using module resolver?
import { reportAdd, getAddress } from "../redux/actions";
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
    // fetch user locaion on start
    this.askForLocation(true);
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
    // localize https://www.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder-limit-region/
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: false,
      country: "SE",
      mapboxgl: mapboxgl,
      proximity: {
        latitude: defaultCoordinates.latitude,
        longitude: defaultCoordinates.longitude
      }
    }).on("result", this.onGeoCodeResult);
    if (geocoder) {
      this.geoCoderContainer.appendChild(geocoder.onAdd(map));
    }
    this.geocoder = geocoder;

    this.map = map;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.address && nextProps.address !== this.props.address) {
      this.geocoder.setInput(nextProps.address);
    }
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
    let flyOptions = {
      center: [coordinates.longitude, coordinates.latitude]
    };
    if (onLoad) {
      flyOptions.zoom = 16;
    }

    this.currentLocation
      .setLngLat([coordinates.longitude, coordinates.latitude])
      .addTo(this.map);
    this.props.getAddress(coordinates);
    this.map.flyTo(flyOptions);
  };
  onErrorCurrentPosition = data => {
    console.log("error", data);
  };
  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <Layout>
        <ErrorReportHeader
          style={styles.header}
          title="Plats"
          description="Markera ut den plats där du vill rapportera ett fel"
        >
          <div>{this.state.address}</div>
          <div ref={el => (this.geoCoderContainer = el)} />
        </ErrorReportHeader>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {this.state.hasGeoLocation ? (
            <Button
              type="primary"
              shape="circle"
              size="large"
              style={styles.currentLocationButton}
              onClick={this.getUserLocation}
            />
          ) : null}
        </div>
        <img alt="marker" src="./pin.svg" style={styles.markerStyle} />
        <div style={styles.map} ref={el => (this.mapContainer = el)} />
        <div style={{position: 'absolute', bottom: '10px', zIndex: 100, right: '10px'}}>
          <Button type="primary">
            <Link to="/photo">Next</Link>
          </Button>
        </div>
      </Layout>
    );
  }
}
const styles = {
  currentLocationButton: {
    backgroundImage: "url('./current-location.svg')",
    backgroundSize: "45%",
    backgroundColor: "white",
    borderColor: "white",
    margin: "20px 15px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 100
  },
  map: {
    width: "100%",
    position: "absolute",
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
    position: "absolute",
    zIndex: "100",
    top: "calc(50% - 15px)",
    left: "calc(50% - 15px)",
    width: "30px",
    height: "30px"
  }
};

function mapStateToProps(state = {}) {
  const { ui = {} } = state;
  const { address = false } = ui;
  return { address };
}

export default connect(
  mapStateToProps,
  { reportAdd, getAddress }
)(Map);
