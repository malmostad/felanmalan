import MapBox from '../../components/mapBox/MapBox'
import { MapProvider } from '../../contexts/MapContext'
import { useUpdate } from '../.././contexts/UpdateContext'
import React, { useEffect } from 'react'

const MapView = () => {
  const { setCurrentViewHeading, currentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading('')
  }, [currentViewHeading])

  return (
    <>
      <MapProvider>
        <MapBox />
      </MapProvider>
    </>
  )
}

export default MapView
