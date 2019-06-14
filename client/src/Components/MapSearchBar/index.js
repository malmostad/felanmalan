import React, { Component } from "react";

import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import "./mapbox-gl-geocoder.css";

const defaultCoordinates = {
  longitude: 13.003365,
  latitude: 55.6051458
};
const styles = {
  searchBar: {
    position: "absolute",
    top: "15px",
    display: "flex",
    justifyContent: "center",
    width: "calc(100% - 30px)",
    margin: "0 15px",
    zIndex: 98
  }
};

class MapSearchBar extends Component {
  render() {
    return (
      <div style={styles.searchBar} ref={el => (this.geoCoderContainer = el)} />
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.address && nextProps.address !== this.props.address) {
      this.geocoder.setInput(nextProps.address);
    }
  }
  onGo(map) {
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
  }

  onGeoCodeResult = event => {
    const { onGeoCodeResult = false } = this.props;
    if (onGeoCodeResult) {
      onGeoCodeResult(event);
    }
  };
}
// add loading of state here
export default MapSearchBar;
