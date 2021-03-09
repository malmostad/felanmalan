import { useContext, useState, createContext, useEffect, useReducer } from 'react'

const MapContext = createContext()

if (!MapContext) {
  throw new Error('AppContext must be used with AppProvider!')
}

export const useMap = () => useContext(MapContext)

export const MapProvider = ({ children }) => {
  const [viewport, setViewport] = useState({
    latitude: 55.6051458,
    longitude: 13.003365,
    zoom: 13,
  })
  const maxBounds = [12.855952171065837, 55.49066310369751, 13.17594041283428, 55.6585718499375]

  const mapValues = {
    viewport,
    setViewport,
    maxBounds,
  }

  return <MapContext.Provider value={mapValues}>{children}</MapContext.Provider>
}
