import { useContext, useState, useEffect, createContext, useReducer } from 'react'

const initialState = {
  images: [],
  location: {
    lat: '',
    lng: '',
  },
  info: {
    description: '',
    contact: {
      name: '',
      email: '',
      phone: '',
    },
    followUp: false,
  },
}

export const useStore = () => createContext(initialState)

const { Provider } = useStore

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const currentState = { ...state }
    switch (action.type) {
      case 'SET_NAME':
        currentState.name = action.payload
        return currentState
      default:
        throw new Error()
    }
  }, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

const ReportContext = createContext()

export const useReport = () => useContext(ReportContext)

const initialReportData = {
  images: [],
  location: {
    lat: '',
    lng: '',
  },
  info: {
    description: '',
    contact: {
      name: '',
      email: '',
      phone: '',
    },
    followUp: false,
  },
}

export const ReportProvider = ({ children }) => {
  const [report, setReport] = useState(initialReportData)
  const [submit, setSubmit] = useState(false)
  const [description, setDescription] = useState('')
  const [contact, setContact] = useState({})
  const [location, setLocation] = useState({})
  const [images, setImages] = useState([])
  const [followUp, setFollowUp] = useState(false)

  useEffect(() => {
    const reportData = {
      images: images,
      location: location,
      info: {
        description: description,
        contact: contact,
      },
      followUp: followUp,
    }
    setReport(reportData)
    console.log(reportData)
  }, [images, location, description, contact, followUp])

  const reportvalues = {
    report,
    setReport,
    submit,
    setSubmit,
    description,
    setDescription,
    contact,
    setContact,
    location,
    setLocation,
    images,
    setImages,
    followUp,
    setFollowUp,
  }

  return <ReportContext.Provider value={reportvalues}>{children}</ReportContext.Provider>
}
