import { useEffect, useState } from 'react'

const useCurrentLocation = () => {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const positionOptions = {
      timeout: 10000, // 10 secs
      maximumAge: 2 * 60 * 60 * 1000, // 2hours
    }
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords
      console.log(position)

      setLocation({
        latitude,
        longitude,
      })
      setLoading(false)
    }
    const handleError = (error) => {
      console.error(error)
      setError(error.message)
      setLoading(false)
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return { error, location, loading }
}

export default useCurrentLocation
