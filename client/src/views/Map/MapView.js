import MapBox from '../../components/mapBox/MapBox'
import CurrentLocationButton from '../../components/CurrentLocation/CurrentLocationButton'
import React from 'react'
import { MapProvider } from '../../contexts/MapContext'

const MapView = () => {
  return (
    <>
      <MapProvider>
        <MapBox />
        <CurrentLocationButton />
      </MapProvider>
    </>
  )
}

export default MapView
