import { useReport } from '../../contexts/ReportContext'
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
  const { setReport, setLocation } = useReport()

  const coordinates = {
    lat: '55.59705552372533',
    lng: '12.977538048269887',
  }

  const handleLongLat = () => {
    setLocation(coordinates)
  }

  return (
    <MapContainer>
      <button onClick={handleLongLat}>Min position</button>
    </MapContainer>
  )
}

export default MapView
