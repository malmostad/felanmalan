import { useContext, createContext, useReducer } from 'react'

export const ReportContext = createContext()
export const useReport = () => useContext(ReportContext)

const initialReportData = {
  images: [],
  latitude: '',
  longitude: '',
  description: '',
  address: '',
  name: '',
  email: '',
  phone: '',
  enable_tracking: false,
}

export const ReportProvider = ({ children }) => {
  const formReducer = (formState, { type, field, payload }) => {
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
      case 'clearFormInfo':
        return {
          initialReportData,
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

  const reportvalues = {
    formState,
    handelSetFormInfo,
    dispatch,
  }

  return <ReportContext.Provider value={reportvalues}>{children}</ReportContext.Provider>
}
