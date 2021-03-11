import ReactMapGl, { Marker } from 'react-map-gl'
import './MapBox.css'
import { FaMapPin as MarkerIcon } from 'react-icons/fa'
import SearchBar from '../searchbar/SearchBar'
import { MapContext } from '../../contexts/MapContext'
import { useContext } from 'react'
import CurrentLocationButton from '../CurrentLocation/CurrentLocationButton'
import { LoadingSpinner } from '../../components/loading/styles'
import { useReport } from '../../contexts/ReportContext'

const MapBox = () => {
  const { handelSetFormInfo } = useReport()
  const { state, dispatch } = useContext(MapContext)
  const { viewport, userLocation, showPositionMarker, showLocationButton, isLoading } = state

  const handleViewPortChange = (payload) => {
    handelSetFormInfo('longitude', payload.longitude)
    handelSetFormInfo('latitude', payload.latitude)
    dispatch({ type: 'handleViewportChange', payload })
  }

  return (
    <>
      <ReactMapGl
        {...viewport}
        onViewportChange={(payload) => handleViewPortChange(payload)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/iandwe/cjxcy8xsy0h5f1cmrapgba9q0"
        width="100vw"
        height="100vh">
        <SearchBar />

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
