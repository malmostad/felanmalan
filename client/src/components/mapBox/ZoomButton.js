import React, { useContext } from 'react'
import { MapContext } from '../../contexts/MapContext'
import { StyledZoomButtons, StyledZoomButton } from '../styles/buttons/Buttons'

const ZoomButton = () => {
  const { state, dispatch } = useContext(MapContext)

  const handleZoomIn = () => {
    dispatch({ type: 'handleZoomIn' })
  }

  const handleZoomOut = () => {
    dispatch({ type: 'handleZoomOut' })
  }

  return (
    <StyledZoomButtons>
      <StyledZoomButton onClick={handleZoomIn}>+</StyledZoomButton>
      <StyledZoomButton onClick={handleZoomOut}>-</StyledZoomButton>
    </StyledZoomButtons>
  )
}

export default ZoomButton
