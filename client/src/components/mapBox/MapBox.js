import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker, GeolocateControl, NavigationControl } from 'react-map-gl'
import './MapBox.css'
import { FaMapPin as MarkerIcon } from 'react-icons/fa'
import { useMap } from '../../contexts/MapContext'
import SearchBar from '../searchbar/SearchBar'

const MapBox = () => {
  const { viewport, setViewport, showMarker, userLocation } = useMap()

  return (
    <>
      <ReactMapGl
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/iandwe/cjxcy8xsy0h5f1cmrapgba9q0"
        width="100vw"
        height="100vh">
        <SearchBar />

        {showMarker ? (
          <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
            <div className="blob"></div>
          </Marker>
        ) : null}
        <MarkerIcon
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
