import React, { useContext } from 'react'
import { MapContext } from '../../contexts/MapContext'

const ZoomButton = () => {
  const { state, dispatch } = useContext(MapContext)

  const handleZoomIn = () => {
    dispatch({ type: 'handleZoomIn' })
  }

  const handleZoomOut = () => {
    dispatch({ type: 'handleZoomOut' })
  }

  return (
    <div>
      <button onClick={handleZoomIn}>+</button>
      <button onClick={handleZoomOut}>-</button>
    </div>
  )
}

export default ZoomButton
