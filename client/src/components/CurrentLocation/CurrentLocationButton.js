import { useContext, useEffect } from 'react'
import { StyledFetchButton } from '../styles/buttons/Buttons'
import { FiNavigation as NavIcon } from 'react-icons/fi'
import { MapContext } from '../../contexts/MapContext'

const CurrentLocationButton = () => {
  const { dispatch, state } = useContext(MapContext)
  const { showLocationButton } = state

  const handleUserLocation = () => {
    dispatch({ type: 'handleStartLoader' })
    navigator.geolocation.getCurrentPosition((position) => {
      const payload = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 17,
      }
      dispatch({ type: 'handleUserLocation', payload })
      dispatch({ type: 'handleShowPositionMarker' })
      dispatch({ type: 'handleViewportChange', payload })
      dispatch({ type: 'handleStopLoader' })
    })
  }

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      if (permissionStatus.state === 'denied') {
        dispatch({ type: 'handleDisableButton' })
      }
      permissionStatus.onchange = () => {
        if (permissionStatus.state === 'denied') {
          dispatch({ type: 'handleDisableButton' })
          dispatch({ type: 'handleStopLoader' })
        }
      }
    })
  }, [showLocationButton])

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
