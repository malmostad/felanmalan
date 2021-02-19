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
  const [disabledNext, setDisabledNext] = useState(false)
  const [currentViewHeading, setCurrentViewHeading] = useState('')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [imageURI, setImageURI] = useState(null)
  const [uploadStatus, setUploadStatus] = useState(false)
  const [uploading, setUploading] = useState(false)

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
    disabledNext,
    setDisabledNext,
    setCurrentViewHeading,
    currentViewHeading,
    setUploadProgress,
    uploadProgress,
    imageURI,
    setImageURI,
    uploadStatus,
    setUploadStatus,
    uploading,
    setUploading,
  }

  useEffect(() => {
    switch (true) {
      case errorStatusCode < 499:
        setErrorMessenger(`${errorStatusCode} a client error, please try agin`)
        break
      case errorStatusCode < 599:
        setErrorMessenger(`${errorStatusCode} something went wrong on our side, sorry but try agin`)
        break
      default:
        setErrorMessenger('unexpected error')
        break
    }
  }, [errorStatusCode])

  return (
    <UpdateContext.Provider value={updateValues}>{!loading && children}</UpdateContext.Provider>
  )
}
