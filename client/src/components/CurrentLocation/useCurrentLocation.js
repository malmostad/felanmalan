import { useEffect, useState } from 'react'

const positionOptions = {
  timeout: 10000, // 10 secs
  enableHighAccuracy: true,
  maximumAge: 2 * 60 * 60 * 1000, // 2hours
}

const useCurrentLocation = () => {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('getting position...')
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords
      setLocation({
        latitude,
        longitude,
      })
      console.log(position)
    }

    const handleError = (error) => {
      console.error(error)
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, positionOptions)
  }, [])
  return location
}

export default useCurrentLocation
