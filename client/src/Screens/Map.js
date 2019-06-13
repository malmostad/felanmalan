import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css";
import { connect } from "react-redux";

// start using module resolver?
import { reportAdd } from "../redux/actions";
import TrackingService from "../TrackingService";
const { track } = TrackingService;

mapboxgl.accessToken =
  "pk.eyJ1IjoibGx1ZnQiLCJhIjoiY2pvdWgzOWZoMTgzdTN3bzlvd3dzdXZnZSJ9.SmEygWmfwXWgJN4ZzrU3mA";

class Map extends Component {
  componentDidMount() {
    // is there a better way to do this?
    const props = this.props;
    let map = new mapboxgl.Map({
      container: this.mapContainer,
      marker: true,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [13.003365, 55.6051458],
      zoom: 13
    });

    const marker = new mapboxgl.Marker({
      draggable: true
    });

    marker.on("dragend", () => {
      const coords = marker.getLngLat();
      const longitude = coords.lng;
      const latitude = coords.lat;
      props.reportAdd({ longitude, latitude });
    });

    let isSingleClick = false;
    map.on("dblclick", event => {
      isSingleClick = false;
    });
    map.on("click", event => {
      isSingleClick = true;
      setTimeout(() => {
        if (isSingleClick) {
          marker.setLngLat([event.lngLat.lng, event.lngLat.lat]).addTo(map);
          isSingleClick = false;
        }
      }, 400);
    });

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );

    map.addControl(
      new mapboxgl.GeolocateControl({
        showUserLocation: true,
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }).on("geolocate", function(location) {
        track("Location from current position");
        const { longitude, latitude } = location.coords;
        marker.setLngLat([longitude, latitude]).addTo(map);
        props.reportAdd({ longitude, latitude });
      }),
      "bottom-right"
    );
    map.addControl(
      // localize https://www.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder-limit-region/
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        country: "SE",
        mapboxgl: mapboxgl,
        proximity: { latitude: 13.003365, longitude: 55.6051458 }
      }).on("result", event => {
        track("Location from Search");
        const coords = event.result.geometry.coordinates;
        const longitude = coords[0];
        const latitude = coords[1];
        marker.setLngLat(coords).addTo(map);
        props.reportAdd({ longitude, latitude });
      }),
      "top-left"
    );

    map.on("load", function() {
      //fix resizing properly
      // https://github.com/mapbox/mapbox-gl-js/issues/3265
      // hide element and make visible here
      map.resize();
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
      height: "400px", // for now fix later
      minHeight: "400px"
    };
    return (
      <Layout>
        <div style={style} ref={el => (this.mapContainer = el)} />
        <div>
          <Button type="primary">
            <Link to="/photo">Next</Link>
          </Button>
        </div>
      </Layout>
    );
  }
}

export default connect(
  undefined,
  { reportAdd }
)(Map);
