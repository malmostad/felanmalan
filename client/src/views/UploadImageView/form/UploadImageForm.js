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

//styles (to be moved and changed)
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
  //global state
  const { setReport } = useReport()

  //local states
  const [filesToBeUploaded, setFilesToBeUploaded] = useState([])
  const [previewImages, setPreviewImages] = useState([])

  //refs
  const fileInput = useRef(null)
  const imageRef = useRef(null)

  //functions
  const handleUploadImages = (e) => {
    const stagedImagesArray = Array.from(e.target.files)
    handleSetPreviewImages(stagedImagesArray)
    handleSetFilesToBeUploaded(stagedImagesArray)
    handleSetImagesInReport(filesToBeUploaded)
    handleRevokeURL(stagedImagesArray)
  }

  const handleSetPreviewImages = (fileArray) => {
    fileArray.map((file) => {
      setPreviewImages((previousPreviewURLs) => [
        ...previousPreviewURLs,
        { preview: URL.createObjectURL(file), id: uuidv4(), raw: file },
      ])
    })
  }

  const handleSetFilesToBeUploaded = (fileArray) => {
    fileArray.map((file) => {
      setFilesToBeUploaded((previousImages) => [...previousImages, { raw: file, id: uuidv4() }])
    })
  }

  const handleSetImagesInReport = (fileArray) => {
    setReport((prevReport) => ({ ...prevReport, images: fileArray }))
  }

  const handleRevokeURL = (fileArray) => {
    fileArray.map((file) => {
      URL.revokeObjectURL(file)
    })
  }

  const handleRemoveImage = (image) => {
    setPreviewImages(previewImages.filter((item) => item.id !== image.id))
    setFilesToBeUploaded(filesToBeUploaded.filter((item) => item.raw !== image.raw))
    setReport((prevReport) => ({ ...prevReport, images: filesToBeUploaded }))
  }

  return (
    <StyledFlexContainer>
      <input
        type="file"
        id="upload-button"
        multiple
        onChange={handleUploadImages}
        ref={fileInput}
        style={{ display: 'none' }}
        accept="image/*"
      />
      <StyledFlexCenter>
        <StyledFlexCenter>
          {!previewImages.length ? (
            <h2>Lägg till bild </h2>
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
                    <StyledImageIcon onClick={() => handleRemoveImage(image)}>
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
    </StyledFlexContainer>
  )
}

export default UploadImageForm
