import { useReducer } from 'react'
import { createContext } from 'react'

export const MapContext = createContext()

const initialState = {
  viewport: {
    latitude: 55.6051458,
    longitude: 13.003365,
    zoom: 13,
  },
  maxBounds: [12.855952171065837, 55.49066310369751, 13.17594041283428, 55.6585718499375],
  userLocation: {
    latitude: '',
    longitude: '',
  },
  showPositionMarker: false,
}

const mapReducer = (mapState, { type, payload }) => {
  let { viewport, zoom, maxBounds, userLocation, showPositionMarker } = mapState

  switch (type) {
    case 'handelViewportChange':
      return { ...mapState, viewport: payload }
    case 'handelUserLocation':
      return { ...mapState, userLocation: payload }
    case 'handelShowPositionMarker':
      showPositionMarker = true
      return { ...mapState, showPositionMarker: showPositionMarker }
    default:
      return { ...mapState }
  }
}

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initialState)

  return <MapContext.Provider value={{ state, dispatch }}>{children}</MapContext.Provider>
}
