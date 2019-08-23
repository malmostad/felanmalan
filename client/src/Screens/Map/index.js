import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import { track } from "TrackingService";

import MapSearchBar from "Components/MapSearchBar";
import FullScreenTitle from "Components/FullScreenTitle";
import TitleHolder from "Components/TitleHolder";

import styles from "./Map.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./pin.svg";

import {
  uiLoadingStart,
  uiLoadingStop,
  reportAdd,
  getAddress,
  pageVisit
} from "redux/actions";

const IS_WIDE = window.innerWidth > 800;
const {
  REACT_APP_MAPBOX_ACCESS_TOKEN,
  REACT_APP_MAPBOX_STYLE = "mapbox://styles/iandwe/cjxcy8xsy0h5f1cmrapgba9q0"
} = process.env;
// TODO: move to config
const maxBounds = [
  [12.855952171065837, 55.49066310369751],
  [13.17594041283428, 55.6585718499375]
];

mapboxgl.accessToken = REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);
    const { visits = 0 } = props;
    this.state = {
      hasGeoLocation: true,
      userCoordinates: {},
      headerHidden: false,
      showHeaderAtStart: visits < 3
    };
  }
  componentDidMount() {
    const { longitude = false, latitude = false, pageVisit } = this.props;
    pageVisit("MAP");
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: REACT_APP_MAPBOX_STYLE,
      center: [longitude, latitude],
      maxBounds,
      zoom: 13
    });

    this.askForLocation(true);
    const outer = document.createElement("div");
    const el = document.createElement("div");
    el.className = "pulsating-circle";
    outer.appendChild(el);
    this.currentLocation = new mapboxgl.Marker(outer);

    map.on("dragstart", this.onHideHeader);

    map.on("dragend", this.onMapDragEnd);
    map.on("zoomend", this.onMapDragEnd);
    if (IS_WIDE) {
      map.addControl(
        new mapboxgl.NavigationControl({ showCompass: false }),
        "bottom-right"
      );
    }

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
    const coords = event.result.geometry.coordinates;
    this.map.flyTo({ center: [coords[0], coords[1]] });
  };
  onMapDragEnd = () => {
    const center = this.map.getCenter();
    const coordinates = {
      longitude: center.lng,
      latitude: center.lat
    };
    this.props.reportAdd(coordinates);
    this.props.getAddress(coordinates);
  };
  onHideHeader = () => {
    this.setState({
      headerHidden: true
    });
  };

  getUserLocation = (onLoad = false) => {
    if (!navigator.geolocation) {
      return;
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };
    this.props.uiLoadingStart("Hämtar position");
    navigator.geolocation.getCurrentPosition(
      pos => {
        track("USER_LOCATION_SUCCESS");
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

    this.props.uiLoadingStop();
    this.currentLocation.setLngLat(center).addTo(this.map);
    this.props.getAddress(coordinates);
    this.setState({ hasGeoLocation: true });
    this.map.flyTo(flyOptions);
  };

  onErrorCurrentPosition = data => {
    track("USER_LOCATION_ERROR");
    this.props.uiLoadingStop();
    this.setState({ hasGeoLocation: false });
  };

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    const { address, loadingAddress = false, texts = {} } = this.props;
    const { headerHidden = false, showHeaderAtStart } = this.state;

    return (
      <div>
        {this.state.hasGeoLocation ? (
          <button
            style={{ bottom: IS_WIDE ? 180 : 70 }}
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
          loading={loadingAddress}
          ref={el => (this.geoCoderContainer = el)}
        />
        {showHeaderAtStart && (
          <div
            onTouchStart={this.onHideHeader}
            onClick={this.onHideHeader}
            style={{ transform: `translateY(${headerHidden ? -230 : 0}px)` }}
            className={styles.titleHolder}
          >
            <TitleHolder>
              <FullScreenTitle title={texts.locationPageWhereIsTheError} />
            </TitleHolder>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {}, report = {}, texts = {}, visits = {} } = state;
  const { map = 0 } = visits;
  const { address = false, loadingAddress = false } = ui;
  const { longitude = false, latitude = false } = report;
  return { address, longitude, latitude, loadingAddress, texts, visits: map };
}

export default connect(
  mapStateToProps,
  { reportAdd, getAddress, uiLoadingStop, uiLoadingStart, pageVisit }
)(withRouter(Map));
