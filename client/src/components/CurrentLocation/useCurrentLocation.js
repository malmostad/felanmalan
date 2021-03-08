import { useEffect, useState } from 'react'

const positionOptions = {
  timeout: 10000, // 10 secs
  maximumAge: 2 * 60 * 60 * 1000, // 2hours
}

const useCurrentLocation = () => {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [requestedLocation, setRequestedLocation] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!requestedLocation) {
      console.log('getting position...')
      setRequestedLocation(true)
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
    }
  }, [setRequestedLocation])

  return { error, location, loading }
}

export default useCurrentLocation
