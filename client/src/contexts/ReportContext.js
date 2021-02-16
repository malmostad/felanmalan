import { useContext, createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

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
      case 'setFormInfo':
        return {
          ...formState,
          [action.field]: action.payload,
        }
      case 'uploadImages':
        return {
          ...formState,
          [action.field]: action.payload,
        }
      default:
        return formState
    }
  }
  const [formState, dispatch] = useReducer(formReducer, initialReportData)

  const url = `http://localhost:3000/photos`
  const payload = ['test', 'test1', 'test2']
  const config = { 'Content-Type': 'application/json' }

  const postImages = async () => {
    const res = await axios.post(url, payload, config)
    const resJSON = await res.json()
    console.log(resJSON)
  }

  const handelSetFormInfo = (ref, payload) => {
    dispatch({
      type: 'setFormInfo',
      field: ref.current.name,
      payload,
    })
  }
  useEffect(() => {
    console.log(formState)
  }, [formState])

  const reportvalues = {
    formState,
    handelSetFormInfo,
    dispatch,
  }

  return <ReportContext.Provider value={reportvalues}>{children}</ReportContext.Provider>
}
