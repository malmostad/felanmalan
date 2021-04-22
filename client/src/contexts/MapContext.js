import { createContext, useReducer } from 'react'

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
  showLocationButton: true,
  isLoading: false,
  transitionDuration: 0,
}

const mapReducer = (mapState, { type, payload }) => {
  let {
    viewport,
    zoom,
    maxBounds,
    userLocation,
    showPositionMarker,
    showLocationButton,
    isLoading,
    transitionDuration,
  } = mapState

  switch (type) {
    case 'handleViewportChange':
      return { ...mapState, viewport: payload }
    case 'handleUserLocation':
      return { ...mapState, userLocation: payload }
    case 'handleShowPositionMarker':
      showPositionMarker = true
      return { ...mapState, showPositionMarker: true }
    case 'handleDisableButton':
      showLocationButton = false
      return { ...mapState, showLocationButton: false }
    case 'handleStartLoader':
      isLoading = true
      return { ...mapState, isLoading: true }
    case 'handleStopLoader':
      isLoading = false
      return { ...mapState, isLoading: false }
    default:
      return { ...mapState }
  }
}

export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initialState)

  return <MapContext.Provider value={{ state, dispatch }}>{children}</MapContext.Provider>
}
