import ReactMapGl from 'react-map-gl'
import './MapBox.css'
import { FaMapPin as Marker } from 'react-icons/fa'
import SearchBar from '../searchbar/SearchBar'
import { MapContext } from '../../contexts/MapContext'
import { useContext } from 'react'

const MapBox = () => {
  const { state, dispatch } = useContext(MapContext)
  const { viewport } = state

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
        <Marker
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
