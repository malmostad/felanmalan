import { useContext, createContext, useReducer, useEffect } from 'react'

export const ReportContext = createContext()
export const useReport = () => useContext(ReportContext)

const url = `http://localhost:3000/photos`

const config = { headers: { 'Content-type': 'multipart/form-data' } }

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
  const formReducer = (formState, { field, payload, type }) => {
    switch (type) {
      case 'setFormInfo':
        return {
          ...formState,
          [field]: payload,
        }
      case 'uploadImages':
        return {
          ...formState,
          [field]: payload,
        }
      default:
        return formState
    }
  }
  const [formState, dispatch] = useReducer(formReducer, initialReportData)

  const handelSetFormInfo = (name, payload) => {
    dispatch({
      type: 'setFormInfo',
      field: name,
      payload,
    })
  }
  useEffect(() => {}, [formState])

  const reportvalues = {
    formState,
    handelSetFormInfo,
    dispatch,
  }

  return <ReportContext.Provider value={reportvalues}>{children}</ReportContext.Provider>
}
