import React, { useContext } from 'react'
import { MapContext } from '../../contexts/MapContext'
import {
  StyledZoomButtons,
  StyledZoomInButton,
  StyledZoomOutButton,
} from '../styles/buttons/Buttons'

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
      <StyledZoomInButton onClick={handleZoomIn}>+</StyledZoomInButton>
      <StyledZoomOutButton onClick={handleZoomOut}>-</StyledZoomOutButton>
    </StyledZoomButtons>
  )
}

export default ZoomButton
