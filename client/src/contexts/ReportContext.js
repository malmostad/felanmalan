import { useContext, createContext, useReducer, useEffect } from 'react'

export const ReportContext = createContext()
export const useReport = () => useContext(ReportContext)

const initialReportData = {
  images: [],
  latitude: 55.6051458,
  longitude: 13.003365,
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
          images: [...formState.images, payload],
        }
      case 'removeImages':
        return {
          ...formState,
          images: payload,
        }
      case 'clearFormInfo':
        return {
          images: [],
          latitude: 55.6051458,
          longitude: 13.003365,
          description: '',
          address: '',
          name: '',
          email: '',
          phone: '',
          enable_tracking: false,
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
