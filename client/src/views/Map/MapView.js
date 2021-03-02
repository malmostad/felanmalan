import MapBox from '../../components/mapBox/MapBox'
import CurrentLocationButton from '../../components/buttons/CurrentLocationButton'
import React from 'react'

const MapView = () => {
  return (
    <>
      <MapBox />
      <CurrentLocationButton />
    </>
  )
}

export default MapView
