import { useContext, useState, useEffect, createContext } from 'react'

const UpdateContext = createContext()

export const useUpdate = () => useContext(UpdateContext)

export const UpdateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [currentView, setCurrentView] = useState(0)
  const [previousView, setPreviousView] = useState(undefined)
  const [nextView, setNextView] = useState(2)
  const [acceptCookies, setAcceptCookies] = useState(null)

  const [readMore, setReadMore] = useState(false)

  useEffect(() => {}, [currentView])

  const updateValues = {
    loading,
    setLoading,
    currentView,
    setCurrentView,
    previousView,
    nextView,
    setNextView,
    setPreviousView,
    readMore,
    setReadMore,
    acceptCookies,
    setAcceptCookies,
  }

  return (
    <UpdateContext.Provider value={updateValues}>
      {!loading && children}
    </UpdateContext.Provider>
  )
}
