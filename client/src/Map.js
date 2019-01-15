import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGx1ZnQiLCJhIjoiY2pvdWgzOWZoMTgzdTN3bzlvd3dzdXZnZSJ9.SmEygWmfwXWgJN4ZzrU3mA";

class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [13.003365, 55.6051458],
      zoom: 13
    });

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      }).on("geolocate", function(location) {
        const { longitude, latitude } = location.coords;
        console.log(`${longitude},${latitude}`);
      })
    );
    this.map.addControl(
      // localize https://www.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder-limit-region/
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        country: "SE",
        proximity: { latitude: 13.003365, longitude: 55.6051458 }
      }).on("result", event => {
        const coords = event.result.geometry.coordinates;
        const longitude = coords[0];
        const latitude = coords[1];
        console.log(`${longitude},${latitude}`);
      })
    );
  }
  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      width: "100%",
      height: "500px"
    };

    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}

export default Map;
