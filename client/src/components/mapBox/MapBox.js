import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import './MapBox.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const MapBox = () => {
  useEffect(() => {
    new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [13.001, 55.601],
      zoom: 12.95,
    })
  }, [])

  return <div id="mapContainer" className="map"></div>
}
export default MapBox
