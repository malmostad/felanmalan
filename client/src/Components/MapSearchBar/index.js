import React, { Component } from "react";

import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import "./mapbox-gl-geocoder.css";
import styles from "./MapSearchBar.module.css";

const {
  REACT_APP_DEFAULT_LONGITUDE = 13.003365,
  REACT_APP_DEFAULT_LATITUDE = 55.6051458
} = process.env;

const defaultCoordinates = {
  longitude: REACT_APP_DEFAULT_LONGITUDE,
  latitude: REACT_APP_DEFAULT_LATITUDE
};

const maxBounds = [
  12.855952171065837,
  55.49066310369751,
  13.17594041283428,
  55.6585718499375
];

class MapSearchBar extends Component {
  render() {
    return (
      <div
        className={styles.searchBar}
        ref={el => (this.geoCoderContainer = el)}
      />
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading && !this.props.loading) {
      this.showLoading();
    }
    if (!nextProps.loading && this.props.loading) {
      this.hideLoading();
    }
    if (nextProps.address && nextProps.address !== this.props.address) {
      this.geocoder.setInput(nextProps.address);
    }
  }
  showLoading = () => {
    // tradeoff for using mapbox searchbar
    this.geocoder._loadingEl.style.display = "block";
  };

  hideLoading = () => {
    // tradeoff for using mapbox searchbar
    this.geocoder._loadingEl.style.display = "none";
  };

  showClear = () => {
    // tradeoff for using mapbox searchbar
    this.geocoder._clearEl.style.display = "block";
  };

  hideClear = () => {
    // tradeoff for using mapbox searchbar
    this.geocoder._clearEl.style.display = "none";
  };

  onGo(map) {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: false,
      country: "SE",
      bbox: maxBounds,
      mapboxgl: mapboxgl,
      proximity: defaultCoordinates
    }).on("result", this.onGeoCodeResult);
    if (geocoder) {
      this.geoCoderContainer.appendChild(geocoder.onAdd(map));
    }
    this.geocoder = geocoder;
  }

  onGeoCodeResult = event => {
    const { onGeoCodeResult = false } = this.props;
    if (onGeoCodeResult) {
      onGeoCodeResult(event);
    }
  };
}
// connect and get loading state
export default MapSearchBar;
