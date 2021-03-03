import MapBox from '../../components/mapBox/MapBox'
import useCurrentLocation from '../../components/CurrentLocation/useCurrentLocation'
import CurrentLocationButton from '../../components/CurrentLocation/CurrentLocationButton'
import React from 'react'
import SearchBar from '../../components/searchbar/SearchBar'

const MapView = () => {
  useCurrentLocation()

  return (
    <>
      <SearchBar />
      <MapBox />
      <CurrentLocationButton />
    </>
  )
}

export default MapView
