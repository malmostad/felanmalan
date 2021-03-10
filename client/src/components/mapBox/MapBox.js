import ReactMapGl, { Marker } from 'react-map-gl'
import './MapBox.css'
import { FaMapPin as MarkerIcon } from 'react-icons/fa'
import SearchBar from '../searchbar/SearchBar'
import { MapContext } from '../../contexts/MapContext'
import { useContext } from 'react'
import CurrentLocationButton from '../CurrentLocation/CurrentLocationButton'
import LoadingSpinner from '../../components/loading/index'

const MapBox = () => {
  const { state, dispatch } = useContext(MapContext)
  const { viewport, userLocation, showPositionMarker, showLocationButton, loader } = state

  const handelViewPortChange = (payload) => {
    dispatch({ type: 'handelViewportChange', payload })
  }

  return (
    <>
      <ReactMapGl
        {...viewport}
        onViewportChange={(payload) => handelViewPortChange(payload)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/iandwe/cjxcy8xsy0h5f1cmrapgba9q0"
        width="100vw"
        height="100vh">
        <SearchBar />

        {loader && <LoadingSpinner />}

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
