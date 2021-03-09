import { StyledFetchButton } from '../styles/buttons/Buttons'
import { FiNavigation as NavIcon } from 'react-icons/fi'
import { useMap } from '../../contexts/MapContext'

const CurrentLocationButton = () => {
  const { setViewport, setShowMarker, setUserLocation } = useMap()

  const handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        zoom: 17,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
      setShowMarker(true),
        {
          timeout: 10000, // 10 secs
          enableHighAccuracy: true,
          maximumAge: 0,
        }
    })
  }

  return (
    <>
      <StyledFetchButton onClick={handleUserLocation}>
        <NavIcon
          size="1.4rem"
          style={{ color: 'white', marginTop: '5px', transform: 'rotate(-20deg)' }}
        />
      </StyledFetchButton>
    </>
  )
}

export default CurrentLocationButton
