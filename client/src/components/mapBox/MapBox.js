import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import './MapBox.css'
import { FaMapPin as Marker } from 'react-icons/fa'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
const MapBox = () => {
  const maxBounds = [
    [12.855952171065837, 55.49066310369751],
    [13.17594041283428, 55.6585718499375],
  ]

  useEffect(() => {
    new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [13.003365, 55.6051458],
      maxBounds,
      zoom: 13,
    })
  }, [])

  return (
    <div id="mapContainer" className="map">
      <Marker
        alt="Marker"
        size="1.6rem"
        style={{
          color: '#05763C',
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      />
    </div>
  )
}
export default MapBox
