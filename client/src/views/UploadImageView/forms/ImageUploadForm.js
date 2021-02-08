import { useState } from 'react'
import { useReport } from '../../../contexts/ReportContext'

const ImageUploadForm = () => {
  const { report, setReport } = useReport()
  const [image, setImage] = useState({})

  return (
    <form>
      <input type="file" name="imageUploadForm" id="1" />
    </form>
  )
}

export default ImageUploadForm
