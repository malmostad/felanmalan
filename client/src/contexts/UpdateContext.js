import { useContext, useState, useEffect,createContext } from "react"

const UpdateContext = createContext()


export const useUpdate = () => useContext(UpdateContext)


export const UpdateProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [currentView, setCurrentView] = useState(undefined)
  const [renderNext, setRenderNext] = useState(false)
  const [renderPrevious, setRenderPrevious] = useState(false)

  useEffect(() => {
    console.log(currentView)
  }, [currentView])

  const updateValues = {
    loading,
    setLoading,
    renderNext,
    setRenderNext,
    renderPrevious,
    setRenderPrevious
  }

  return (
    <UpdateContext.Provider value={updateValues}>
      {!loading && children}
    </UpdateContext.Provider>
  )
}
