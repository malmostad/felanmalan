import { useReport } from '../../contexts/ReportContext'
import { useRef } from 'react'
import BgMapView from './map-view.png'
import styled from 'styled-components/macro'
const MapContainer = styled.div`
  background-image: url(${BgMapView});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
`
const MapView = () => {
  const mapRef = useRef('')
  const { handelSetFormInfo } = useReport()

  const coordinates = {
    latitude: '55.59705552372533',
    longitude: '12.977538048269887',
  }

  return (
    <MapContainer>
      <button
        ref={mapRef}
        name="location"
        onClick={() => handelSetFormInfo('latitude', coordinates.latitude)}>
        Lat
      </button>
      <button
        ref={mapRef}
        name="location"
        onClick={() => handelSetFormInfo('longitude', coordinates.longitude)}>
        Long
      </button>
    </MapContainer>
  )
}

export default MapView
