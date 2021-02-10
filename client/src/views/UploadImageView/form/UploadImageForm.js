import React, { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useReport } from '../../../contexts/ReportContext'
import { Button } from '../../../components/buttons/Buttons'
import {
  StyledFlexCenter,
  StyledFlexCenterColumn,
} from '../../../components/styles/containers/Containers'

const UploadImageForm = () => {
  const [images, setImages] = useState([])
  const [previewImage, setPreviewImage] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const { report, setReport } = useReport()

  const fileInput = useRef(null)

  const handleChange = (e) => {
    setUploading(true)
    setLoading(!loading)
    const fileArray = Array.from(e.target.files)
    fileArray.map((file) => {
      setImages((prevImages) => [...prevImages, { preview: URL.createObjectURL(file), raw: file }])
    })
    fileArray.map(
      (file) => URL.revokeObjectURL(file) // avoid memory leak
    )
    setUploading(false)
  }

  return (
    <StyledFlexCenterColumn>
      <input
        type="file"
        id="upload-button"
        multiple
        onChange={handleChange}
        ref={fileInput}
        style={{ display: 'none' }}
      />
      <StyledFlexCenterColumn>
        <StyledFlexCenterColumn>
          {!images.length ? (
            <h1>Lägg till bild på problemet</h1>
          ) : (
            images.map((image, index) => (
              <StyledFlexCenterColumn key={uuidv4()}>
                <button>X</button>
                <div key={uuidv4()} style={{ padding: '3px', objectFit: 'contain' }}>
                  <img
                    style={{ maxWidth: '400px', maxHeight: '400px' }}
                    key={index}
                    src={image.preview}
                    alt="alt"
                    id={image.id}
                  />
                </div>
              </StyledFlexCenterColumn>
            ))
          )}
        </StyledFlexCenterColumn>
        <Button.Outer>
          <Button bgGreen onClick={() => fileInput.current.click()}>
            Choose File
          </Button>
        </Button.Outer>
      </StyledFlexCenterColumn>
      <br />
    </StyledFlexCenterColumn>
  )
}

export default UploadImageForm
