import { useContext, createContext, useReducer, useEffect, useState } from 'react'

export const ReportContext = createContext()
export const useReport = () => useContext(ReportContext)

const photosEndpoint = 'photos'
const reportEndpoint = 'reports'

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
  const formReducer = async (formState, { type, field, payload }) => {
    switch (type) {
      case 'setFormInfo':
        return {
          ...formState,
          [field]: payload,
        }
      case 'uploadedImage':
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
