import { useContext, useState, useEffect, createContext, useReducer } from 'react'

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
      case 'setDescription':
        return {
          ...formState,
          [action.field]: action.payload,
        }
      default:
        return formState
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialReportData)

  useEffect(() => {
    console.log('this is formdata', formState)
    // setReport(reportData)
  }, [formState])

  const reportvalues = {
    dispatch,
    formState,
  }

  return <ReportContext.Provider value={reportvalues}>{children}</ReportContext.Provider>
}
