import { useContext, useState, useEffect, createContext } from 'react'

export const ReportContext = createContext()

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
  }, [images, location, description, contact, followUp, followUp])

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
