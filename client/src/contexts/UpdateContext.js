import Error from '../components/errors/Error'
import { useContext, useState, createContext, useEffect } from 'react'

const UpdateContext = createContext()

export const useUpdate = () => useContext(UpdateContext)

export const UpdateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [currentView, setCurrentView] = useState(0)
  const [previousView, setPreviousView] = useState(-1)
  const [nextView, setNextView] = useState(1)
  const [acceptCookies, setAcceptCookies] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const [error, setError] = useState(false)
  const [errorStatusCode, setErrorStatusCode] = useState(null)
  const [errorMessenger, setErrorMessenger] = useState(null)

  const updateValues = {
    setLoading,
    loading,
    setCurrentView,
    currentView,
    setNextView,
    nextView,
    setPreviousView,
    previousView,
    setReadMore,
    readMore,
    setAcceptCookies,
    acceptCookies,
    error,
    setError,
    errorStatusCode,
    setErrorStatusCode,
    errorMessenger,
    setErrorMessenger,
  }

  //check if error Change or not
  useEffect(() => {
    if (error) {
      setErrorMessenger(<Error />)
    }
  }, [error])

  return (
    <UpdateContext.Provider value={updateValues}>{!loading && children}</UpdateContext.Provider>
  )
}
