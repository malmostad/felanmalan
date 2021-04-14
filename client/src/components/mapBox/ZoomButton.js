import React, { useContext } from 'react'
import { MapContext } from '../../contexts/MapContext'
import {
  StyledZoomButtons,
  StyledZoomButton,
  StyledZoomInIcon,
  StyledZoomOutIcon,
} from '../styles/buttons/Buttons'

const ZoomButton = () => {
  const { state, dispatch } = useContext(MapContext)
  const { transitionDuration } = state

  const handleZoomIn = () => {
    dispatch({ type: 'handleFlyOver' })
    dispatch({ type: 'handleZoomIn' })
    setTimeout(() => {
      dispatch({ type: 'removeFlyOver' })
    }, transitionDuration)
  }

  const handleZoomOut = () => {
    dispatch({ type: 'handleFlyOver' })
    dispatch({ type: 'handleZoomOut' })
    setTimeout(() => {
      dispatch({ type: 'removeFlyOver' })
    }, transitionDuration)
  }

  return (
    <StyledZoomButtons>
      <StyledZoomButton onClick={handleZoomIn}>
        <StyledZoomInIcon></StyledZoomInIcon>
      </StyledZoomButton>
      <StyledZoomButton onClick={handleZoomOut}>
        <StyledZoomOutIcon></StyledZoomOutIcon>
      </StyledZoomButton>
    </StyledZoomButtons>
  )
}

export default ZoomButton
