import { useContext, useState, useEffect, createContext } from 'react'

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
      email: '',
      phone: '',
    },
    followUp: false,
  },
}

export const ReportProvider = ({ children }) => {
  const [report, setReport] = useState(initialReportData)
  const [submit, setSubmit] = useState(false)

  useEffect(() => {}, [report])

  const reportvalues = {
    report,
    setReport,
    submit,
    setSubmit,
  }

  return (
    <ReportContext.Provider value={reportvalues}>
      {children}
    </ReportContext.Provider>
  )
}
