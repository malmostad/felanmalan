import { useContext, useState, createContext } from 'react'

const UpdateContext = createContext()

export const useUpdate = () => useContext(UpdateContext)

export const UpdateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [currentView, setCurrentView] = useState(0)
  const [previousView, setPreviousView] = useState(-1)
  const [nextView, setNextView] = useState(1)
  const [acceptCookies, setAcceptCookies] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const [currentViewHeading, setCurrentViewHeading] = useState('')

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
    setCurrentViewHeading,
    currentViewHeading,
  }

  return (
    <UpdateContext.Provider value={updateValues}>{!loading && children}</UpdateContext.Provider>
  )
}
