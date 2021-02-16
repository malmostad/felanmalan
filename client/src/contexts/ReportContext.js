import { useContext, createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

export const ReportContext = createContext()
export const useReport = () => useContext(ReportContext)

const url = `http://localhost:3000/photos`

const config = { headers: { 'Content-type': 'multipart/form-data' } }

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

const postImages = async (payload) => {
  const formData = new FormData()
  const newPayLoad = payload.map((image) => {
    formData.append({ file: image.raw, uuid: image.id })
  })
  const res = await axios.post(url, newPayLoad, config)
  console.log(res)
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
        postImages(action.payload)
        break
      default:
        return formState
    }
  }
  const [formState, dispatch] = useReducer(formReducer, initialReportData)

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
