import { useContext, useState, useEffect,createContext } from "react"

const ReportContext = createContext()


export const useReport = () => useContext(ReportContext)

const initialReportData = {
  acceptedCookies: false,
  images: [],
  location: {
    lat: "",
    lng: ""
  },
  info: {
    description: "",
    followUp: false,
  },
  contact: {
    email: "",
    phone: ""
  }
}

export const ReportProvider = ({ children }) => {

  const [report, setReport] = useState(initialReportData)
  const [submit, setSubmit] = useState(false)


  useEffect(() => {
    console.log("report data is", report)
  }, [report])



  const reportvalues = {
    report,
    setReport,
    submit,
    setSubmit

  }

  return (
    <ReportContext.Provider value={reportvalues}>
      {children}
    </ReportContext.Provider>
  )
}
