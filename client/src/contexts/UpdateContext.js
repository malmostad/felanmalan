import { useContext, useState, useEffect,createContext } from "react"

const UpdateContext = createContext()


export const useUpdate = () => useContext(UpdateContext)


export const UpdateProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [currentView, setCurrentView] = useState('landing')
  const [previousView, setPreviousView] = useState(undefined)
  const [nextView, setNextView] = useState(undefined)


  useEffect(() => {
    console.log(currentView)
  }, [currentView])

  const updateValues = {
    loading,
    setLoading,
    currentView,
    setCurrentView,
    previousView,
    nextView,
    setNextView,
    setPreviousView,
  }

  return (
    <UpdateContext.Provider value={updateValues}>
      {!loading && children}
    </UpdateContext.Provider>
  )
}
