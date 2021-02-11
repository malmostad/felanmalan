import React, { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useReport } from '../../../contexts/ReportContext'
import { Button } from '../../../components/buttons/Buttons'
import {
  StyledFlexCenter,
  StyledFlexCenterColumn,
} from '../../../components/styles/containers/Containers'
import styled from 'styled-components/macro'
import { MdAddAPhoto } from 'react-icons/md'
import { IoTrashOutline } from 'react-icons/io5'

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 220px;
  margin: 10px;
  object-fit: 'contain';
`
const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
`
const StyledImageIcon = styled.div`
  color: red;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
`
const StyledFlexContainer = styled(StyledFlexCenterColumn)`
  max-width: 100vw !important;
  min-height: 60vh;
  flex-wrap: wrap;
`

const UploadImageForm = () => {
  const [files, setFiles] = useState([])
  const [previewImages, setPreviewImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const { report, setReport } = useReport()

  const fileInput = useRef(null)
  const imageRef = useRef(null)

  const handleChange = (e) => {
    setUploading(true)
    setLoading(!loading)
    const fileArray = Array.from(e.target.files)
    fileArray.map((file) => {
      setPreviewImages((previousPreviewURLs) => [
        ...previousPreviewURLs,
        { preview: URL.createObjectURL(file), id: uuidv4() },
      ])
      setFiles((previousImages) => [...previousImages, { raw: file, id: uuidv4() }])
      setReport((prevReport) => ({ ...prevReport, images: files }))
    })

    fileArray.map(
      (file) => URL.revokeObjectURL(file) // avoid memory leak
    )
    setUploading(false)
  }

  const handleRemoveImage = (e, image) => {
    setPreviewImages(previewImages.filter((item) => item.id !== image.id))
    setFiles(files.filter((item) => item.id !== image.id))
    setReport((prevReport) => ({ ...prevReport, images: files }))
  }

  return (
    <StyledFlexContainer>
      <input
        type="file"
        id="upload-button"
        multiple
        onChange={handleChange}
        ref={fileInput}
        style={{ display: 'none' }}
      />
      <StyledFlexCenter>
        <StyledFlexCenter>
          {!previewImages.length ? (
            <h1>Lägg till bild på problemet</h1>
          ) : (
            previewImages.map((image, index) => (
              <StyledFlexCenter key={uuidv4()}>
                <StyledImageContainer>
                  <img
                    style={{ maxWidth: '220px', maxHeight: '220px' }}
                    ref={imageRef}
                    key={index}
                    src={image.preview}
                    alt="alt"
                    id={image.id}
                  />
                  <StyledImageOverlay>
                    <StyledImageIcon onClick={(e) => handleRemoveImage(e, image)}>
                      <IoTrashOutline />
                    </StyledImageIcon>
                  </StyledImageOverlay>
                </StyledImageContainer>
              </StyledFlexCenter>
            ))
          )}
        </StyledFlexCenter>
        <Button.Outer>
          <Button.Inner>
            <Button bgGreen onClick={() => fileInput.current.click()}>
              <MdAddAPhoto size="1.6rem" style={{ marginTop: '5px', color: 'white' }} />
            </Button>
          </Button.Inner>
        </Button.Outer>
      </StyledFlexCenter>
      <br />
    </StyledFlexContainer>
  )
}

export default UploadImageForm
