import { useContext, useRef, useState, useCallback } from 'react'
import ReactMapGl, { Marker, NavigationControl } from 'react-map-gl'
import { FaMapPin as MarkerIcon } from 'react-icons/fa'
import { MapContext } from '../../contexts/MapContext'
import CurrentLocationButton from '../CurrentLocation/CurrentLocationButton'
import { LoadingSpinner } from '../../components/loading/styles'
import { useReport } from '../../contexts/ReportContext'
import './MapBox.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { fetchAddressMapBoxAPI } from '../../api/api'
import Geocoder from 'react-map-gl-geocoder'

const MapBox = () => {
  const { handelSetFormInfo } = useReport()
  const mapRef = useRef()
  const [address, setAddress] = useState('')
  const { state, dispatch } = useContext(MapContext)
  const {
    viewport,
    userLocation,
    showPositionMarker,
    showLocationButton,
    isLoading,
    maxBounds,
  } = state

  const handleViewPortChange = (payload) => {
    dispatch({ type: 'handleViewportChange', payload })
    handelSetFormInfo('longitude', payload.longitude)
    handelSetFormInfo('latitude', payload.latitude)
    handelSetFormInfo('address', address)
  }

  const onMouseUp = async () => {
    const address = await fetchAddressMapBoxAPI(viewport)
    setAddress(address)
  }

  return (
    <>
      <ReactMapGl
        {...viewport}
        ref={mapRef}
        onViewportChange={(payload) => handleViewPortChange(payload)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/iandwe/cjxcy8xsy0h5f1cmrapgba9q0"
        width="100vw"
        height="100vh"
        onMouseUp={onMouseUp}>
        <Geocoder
          onViewportChange={(payload) => handleViewPortChange(payload)}
          mapRef={mapRef}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          bbox={maxBounds}
          inputValue={address}
        />

        <NavigationControl style={{ right: 30, bottom: 300 }} />

        {isLoading && <LoadingSpinner />}

        {showLocationButton && <CurrentLocationButton />}

        {showPositionMarker && (
          <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
            <div className="blob"></div>
          </Marker>
        )}
        <MarkerIcon
          alt="Marker"
          size="1.6rem"
          style={{
            color: '#05763C',
            position: 'absolute',
            top: '50vh',
            left: '50vw',
          }}
        />
      </ReactMapGl>
    </>
  )
}
export default MapBox
