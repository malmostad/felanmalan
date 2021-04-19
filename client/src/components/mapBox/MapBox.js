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
  }

  const onMouseDown = () => {
    dispatch({ type: 'removeFlyOver' })
  }
  const onMouseUp = async () => {
    const findAddress = await fetchAddressMapBoxAPI(viewport)

    if (findAddress.number === undefined) {
      setAddress(findAddress.address)
    } else {
      setAddress(`${findAddress.address} ${findAddress.number}`)
    }
    handelSetFormInfo('address', `${findAddress.address} ${findAddress.number}`)
  }
  const updateSearchbarUserLocation = async () => {
    const usersAddress = await fetchAddressMapBoxAPI(userLocation)
    if (usersAddress.number === undefined) {
      setAddress(usersAddress.address)
    } else {
      setAddress(`${usersAddress.address} ${usersAddress.number}`)
    }
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
          mapStyle="mapbox://styles/iandwe/ck0i4nprb08w91cmkp1939q6z"
          width="100vw"
          height="100%"
          maxBounds={maxBounds}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}>
          <ZoomButton />

          <SearchBar address={address} />

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
