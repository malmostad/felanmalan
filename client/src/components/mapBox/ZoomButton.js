import React, { useContext, useEffect } from 'react'
import { MapContext } from '../../contexts/MapContext'
import { StyledZoomButtons, StyledZoomButton } from '../styles/buttons/Buttons'

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
      <StyledZoomButton onClick={handleZoomIn}>+</StyledZoomButton>
      <StyledZoomButton onClick={handleZoomOut}>-</StyledZoomButton>
    </StyledZoomButtons>
  )
}

export default ZoomButton
