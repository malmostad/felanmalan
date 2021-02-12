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
      name: '',
      email: '',
      phone: '',
    },
    followUp: false,
  },
}

export const ReportProvider = ({ children }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [report, setReport] = useState(initialReportData)
  const [submit, setSubmit] = useState(false)

  useEffect(() => {}, [report], [phone], [email], [name])

  const reportvalues = {
    report,
    setReport,
    submit,
    setSubmit,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
  }

  return <ReportContext.Provider value={reportvalues}>{children}</ReportContext.Provider>
}
