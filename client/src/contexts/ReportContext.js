import { useContext, useState, useEffect,createContext } from "react"

const ReportContext = createContext()


export const useReport = () => useContext(ReportContext)


export const ReportProvider = ({ children }) => {

  const [report, setReport] = useState({})


  const reportvalues = {
    loading,

  }

  return (
    <ReportContext.Provider value={updateValues}>
      {children}
    </ReportContext.Provider>
  )
}
