import { useContext, useEffect } from 'react'
import { StyledFetchButton } from '../styles/buttons/Buttons'
import { FiNavigation as NavIcon } from 'react-icons/fi'
import { MapContext } from '../../contexts/MapContext'
import { LoadingSpinner } from '../../components/loading/styles'

const CurrentLocationButton = () => {
  const { state, dispatch } = useContext(MapContext)
  const { isLoading } = state

  useEffect(() => {
    if (window.navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (permission) {
        permission.state === 'denied' && dispatch({ type: 'handleDisableButton' })
      })
    }
  }, [])

  //check if user denied the location
  const handleUserLocation = () => {
    dispatch({ type: 'handleStartLoader' })

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const payload = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 17,
        }
        dispatch({ type: 'handleFlyOver' })
        dispatch({ type: 'handleUserLocation', payload })
        dispatch({ type: 'handleShowPositionMarker' })
        dispatch({ type: 'handleViewportChange', payload })
        dispatch({ type: 'handleStopLoader' })
        dispatch({ type: 'removeFlyOver' })
      },
      (error) => {
        dispatch({ type: 'handleDisableButton' })
        dispatch({ type: 'handleStopLoader' })
      }
    )
  }

  return (
    <>
      <StyledFetchButton onClick={handleUserLocation}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <NavIcon
            size="1.4rem"
            style={{ color: 'white', marginTop: '5px', transform: 'rotate(-20deg)' }}
          />
        )}
      </StyledFetchButton>
    </>
  )
}

export default CurrentLocationButton
