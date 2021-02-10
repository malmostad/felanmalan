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
`

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
      <StyledFlexCenter>
        <StyledFlexCenter>
          {!images.length ? (
            <h1>Lägg till bild på problemet</h1>
          ) : (
            images.map((image, index) => (
              <StyledFlexCenterColumn key={uuidv4()}>
                <StyledImageContainer>
                  <img
                    style={{ maxWidth: '220px', maxHeight: '220px' }}
                    key={index}
                    src={image.preview}
                    alt="alt"
                    id={image.id}
                  />
                  <StyledImageOverlay>
                    <StyledImageIcon>
                      <IoTrashOutline />
                    </StyledImageIcon>
                  </StyledImageOverlay>
                </StyledImageContainer>
              </StyledFlexCenterColumn>
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
    </StyledFlexCenterColumn>
  )
}

export default UploadImageForm
