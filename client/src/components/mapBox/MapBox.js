import { useContext, useRef, useState, useEffect } from 'react'
import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl'
import { MapContext } from '../../contexts/MapContext'
import CurrentLocationButton from '../CurrentLocation/CurrentLocationButton'
import SearchBar from '../searchBar/SearchBar'
import { useReport } from '../../contexts/ReportContext'
import ZoomButton from './ZoomButton'
import './MapBox.css'
import { fetchAddressMapBoxAPI } from '../../api/api'
import { ReactComponent as MarkerIcon } from './pin.svg'

const MapBox = () => {
  const { handelSetFormInfo } = useReport()
  const mapRef = useRef()
  const [address, setAddress] = useState('')
  const [updateUserLocation, setUpdateUserLocation] = useState(false)
  const { state, dispatch } = useContext(MapContext)
  const {
    viewport,
    userLocation,
    showPositionMarker,
    showLocationButton,
    maxBounds,
    transitionDuration,
  } = state

  const handleViewPortChange = (payload) => {
    dispatch({ type: 'handleViewportChange', payload })
    handelSetFormInfo('longitude', payload.longitude)
    handelSetFormInfo('latitude', payload.latitude)
    handelSetFormInfo('address', address)
  }

  const onMouseDown = () => {
    dispatch({ type: 'removeFlyOver' })
  }
  const onMouseUp = async () => {
    const address = await fetchAddressMapBoxAPI(viewport)
    setAddress(address)
  }
  const updateSearchbarUserLocation = async () => {
    const usersAddress = await fetchAddressMapBoxAPI(userLocation)
    setAddress(usersAddress)
  }
  useEffect(() => {
    if (updateUserLocation) {
      updateSearchbarUserLocation()
    }
    setUpdateUserLocation(true)
  }, [userLocation])

  return (
    <>
      <div className="map-style">
        <ReactMapGl
          {...viewport}
          ref={mapRef}
          transitionDuration={transitionDuration}
          transitionInterpolator={new FlyToInterpolator()}
          onViewportChange={(payload) => handleViewPortChange(payload)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/iandwe/cjxcy8xsy0h5f1cmrapgba9q0"
          width="100vw"
          height="100%"
          maxBounds={maxBounds}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}>
          <ZoomButton />

          <SearchBar />

          {showLocationButton && <CurrentLocationButton />}

          {showPositionMarker && (
            <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
              <div className="blob"></div>
            </Marker>
          )}
          <MarkerIcon
            className="pin-marker"
            style={{
              color: '#05763C',
            }}
          />
        </ReactMapGl>
      </div>
    </>
  )
}
export default MapBox
