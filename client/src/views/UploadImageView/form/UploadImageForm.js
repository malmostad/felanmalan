import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useReport } from '../../../contexts/ReportContext'
const UploadImageForm = () => {
  const [images, setImages] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const { report, setReport } = useReport()

  const handleChange = (e) => {
    setUploading(true)
    setLoading(!loading)
    const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
    filesArray.forEach((file) => setImages((prevImages) => [...prevImages, { preview: file }]))
    Array.from(e.target.files).map(
      (file) => URL.revokeObjectURL(file) // avoid memory leak
    )
    setUploading(false)
  }

  return (
    <div>
      {!images.length ? (
        <h1>Lägg till bild på problemet</h1>
      ) : (
        images.map((image, index) => (
          <div key={uuidv4()}>
            <img
              style={{ width: '100px', height: '100px' }}
              key={index}
              src={image.preview}
              alt="uploaded"
              id={image.id}
            />
          </div>
        ))
      )}
      <input type="file" id="upload-button" multiple onChange={handleChange} />
      <br />
    </div>
  )
}

export default UploadImageForm
