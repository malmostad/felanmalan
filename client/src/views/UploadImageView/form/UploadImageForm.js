import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useReport } from '../../../contexts/ReportContext'
const UploadImageForm = () => {
  const [images, setImages] = useState([{ preview: '', raw: '', id: '' }])
  const { report, setReport } = useReport()


  const handleChange = (e) => {
    if (e.target.files.length === 1) {
      setImages((prevImages) => {
        ;[
          ...prevImages,
          { preview: URL.createObjectURL(e.target.files[0]), raw: e.target.files[0], id: uuidv4() },
        ]
      })
    } else {
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      filesArray.forEach((file) => setImages((prevImages) => [...prevImages, { preview: file }]))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      )
    }
  }

  const handleUpload = () => {
    images.map((img) => {
      console.log(report)
    })
  }

  return (
    <div>
      {images.length >= 2 &&
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
        ))}
      <input type="file" id="upload-button" multiple onChange={handleChange} />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default UploadImageForm
