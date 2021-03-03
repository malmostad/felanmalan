import MapBox from '../../components/mapBox/MapBox'
import useCurrentLocation from '../../components/CurrentLocation/useCurrentLocation'
import CurrentLocationButton from '../../components/CurrentLocation/CurrentLocationButton'
import { useEffect } from 'react'
import Loader from 'react-loader-spinner'

const MapView = () => {
  useCurrentLocation()

  return (
    <>
      <MapBox />
      <CurrentLocationButton />
    </>
  )
}

export default MapView
