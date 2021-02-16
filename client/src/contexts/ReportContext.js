import { useContext, createContext, useReducer, useEffect } from 'react'

export const ReportContext = createContext()
export const useReport = () => useContext(ReportContext)

const initialReportData = {
  images: [],
  location: {
    lat: '',
    lng: '',
  },
  description: '',
  name: '',
  email: '',
  phone: '',
  followUp: false,
}

export const ReportProvider = ({ children }) => {
  const formReducer = (formState, action) => {
    switch (action.type) {
      case 'setFormInfo':
        return {
          ...formState,
          [action.field]: action.payload,
        }
      default:
        return formState
    }
  }
  const [formState, dispatch] = useReducer(formReducer, initialReportData)

  const handelSetFormInfo = (ref, payload) => {
    dispatch({
      type: 'setFormInfo',
      field: ref.current.name,
      payload,
    })
  }

  useEffect(() => {
    console.log(formState)
  }, [formState])

  const reportvalues = {
    formState,
    handelSetFormInfo,
  }

  return <ReportContext.Provider value={reportvalues}>{children}</ReportContext.Provider>
}
