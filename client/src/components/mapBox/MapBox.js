import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl'
import Geocoder from 'react-mapbox-gl-geocoder'
import './MapBox.css'
import { FaMapPin as Marker } from 'react-icons/fa'

const placeholder = (props) => <input {...props} placeholder="Search" />
const maxBounds = [12.855952171065837, 55.49066310369751, 13.17594041283428, 55.6585718499375]

const MapBox = () => {
  const [viewport, setViewport] = useState({
    latitude: 55.6051458,
    longitude: 13.003365,
    zoom: 13,
  })
  return (
    <>
      <ReactMapGl
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/iandwe/cjxcy8xsy0h5f1cmrapgba9q0"
        width="100vw"
        height="100vh">
        <Geocoder
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onSelected={(viewport) => setViewport(viewport)}
          viewport={viewport}
          hideOnSelect={true}
          proximity={viewport}
          queryParams={{ bbox: maxBounds, proximity: viewport }}
          inputComponent={placeholder}
        />
        <Marker
          alt="Marker"
          size="1.6rem"
          style={{
            color: '#05763C',
            position: 'absolute',
            top: '50vh',
            left: '50vw',
          }}
        />
      </ReactMapGl>
    </>
  )
}
export default MapBox
