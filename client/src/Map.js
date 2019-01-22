import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import { connect } from "react-redux";
import { reportAdd } from "./redux/actions";
mapboxgl.accessToken =
  "pk.eyJ1IjoibGx1ZnQiLCJhIjoiY2pvdWgzOWZoMTgzdTN3bzlvd3dzdXZnZSJ9.SmEygWmfwXWgJN4ZzrU3mA";

class Map extends Component {
  componentDidMount() {
    // is there a better way to do this?
    const props = this.props;
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [13.003365, 55.6051458],
      zoom: 13
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      }).on("geolocate", function(location) {
        const { longitude, latitude } = location.coords;
        props.reportAdd({ coordinates: { longitude, latitude } });
      })
    );
    map.addControl(
      // localize https://www.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder-limit-region/
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        country: "SE",
        proximity: { latitude: 13.003365, longitude: 55.6051458 }
      }).on("result", event => {
        const coords = event.result.geometry.coordinates;
        const longitude = coords[0];
        const latitude = coords[1];
        this.map.getSource("single-point").setData(event.result.geometry);
        props.reportAdd({ coordinates: { longitude, latitude } });
      })
    );
    map.on("load", function() {
      map.addSource("single-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });

      map.addLayer({
        id: "point",
        source: "single-point",
        type: "circle",
        paint: {
          "circle-radius": 10,
          "circle-color": "#007cbf"
        }
      });
    });
    this.map = map;
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

export default connect(
  undefined,
  { reportAdd }
)(Map);
