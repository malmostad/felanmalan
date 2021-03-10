import { useContext } from 'react'
import { StyledFetchButton } from '../styles/buttons/Buttons'
import { FiNavigation as NavIcon } from 'react-icons/fi'
import { MapContext } from '../../contexts/MapContext'

const CurrentLocationButton = () => {
  const { dispatch } = useContext(MapContext)

  const handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const payload = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 17,
      }
      dispatch({ type: 'handelUserLocation', payload })
      dispatch({ type: 'handelShowPositionMarker' })
      dispatch({ type: 'handelViewportChange', payload })
    })

    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      if (permissionStatus.state === 'denied') {
        dispatch({ type: 'handelDisableButton' })
      }
      permissionStatus.onchange = () => {
        if (permissionStatus.state === 'denied') {
          dispatch({ type: 'handelDisableButton' })
        }
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
