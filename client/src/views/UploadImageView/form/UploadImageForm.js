//react
import { useEffect, useState, useRef } from 'react'
//utils
//libs
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import { MdAddAPhoto as AddImageIcon } from 'react-icons/md'
import { IoTrashOutline as RemoveImageIcon } from 'react-icons/io5'

//contexts
import { useReport } from '../../../contexts/ReportContext'

//components
import { Button } from '../../../components/buttons/Buttons'
import {
  StyledFlexCenter,
  StyledFlexCenterColumn,
  StyledGrid,
} from '../../../components/styles/containers/Containers'

import { useUpdate } from '../../../contexts/UpdateContext'
import { postImages } from '../../../api/api'

//styles (to be moved and changed)
const StyledImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 220px;
  height: 220px;
  opacity: ${({ progress }) => progress};
  img {
    width: 220px;
    height: 220px;
  }
`
const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: inherit;
  width: inherit;
`
const StyledImageIcon = styled.div`
  color: red;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  right: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: pointer;
`
const StyledWrapper = styled(StyledFlexCenter)`
  min-height: 60vh;
`

const StyledProgressBar = styled.div`
  height: 5px;
  width: 50%;
  color: green;
`

const UploadImageForm = () => {
  //global state
  const { dispatch } = useReport()
  const {
    setUploadProgress,
    uploadProgress,
    imageURI,
    setImageURI,
    uploadStatus,
    setUploadStatus,
    uploading,
    setUploading,
  } = useUpdate()

  //local states
  const [uploadedImages, setUploadedImages] = useState([])
  const [previewImages, setPreviewImages] = useState([])

  //refs
  const fileInput = useRef(null)

  //effects
  useEffect(() => {
    dispatch({
      type: 'uploadImages',
      field: 'images',
      payload: uploadedImages,
    })
  }, [uploadedImages])

  //functions

  const setUploadImages = (payload) => {
    setUploading(true)
    payload.forEach(async (file) => {
      const resp = await postImages(
        process.env.REACT_APP_API_POST_PHOTOS_ENDPOINT,
        file,
        (progressEvent) => {
          const progress = parseInt(Math.round(progressEvent.loaded / progressEvent.total))
          setUploadProgress(progress)
        }
      )
      setUploadedImages((prevState) => [...prevState, resp.data])
    })
  }

  const handleUploadImages = (e) => {
    /* eslint-disable no-debugger */
    // debugger
    const stagedImagesArray = Array.from(e.target.files)
    handleSetPreviewImages(stagedImagesArray)
    setUploadImages(stagedImagesArray)
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

  const handleRevokeURL = (fileArray) => {
    fileArray.map((file) => {
      URL.revokeObjectURL(file)
    })
  }

  const handleRemoveImage = (image) => {
    setPreviewImages(previewImages.filter((item) => item.id !== image.id))
  }

  return (
    <StyledWrapper>
      <StyledFlexCenterColumn>
        <input
          name="images"
          type="file"
          id="upload-button"
          multiple
          onChange={handleUploadImages}
          ref={fileInput}
          style={{ display: 'none' }}
          accept="image/*"
        />
        {!previewImages.length && (
          <h2 style={{ paddingRight: '1rem', textAlign: 'center' }}>Lägg till bild </h2>
        )}
        <StyledGrid>
          {previewImages.map((image, index) => (
            <StyledImageContainer key={uuidv4()}>
              <img key={index} src={image.preview} alt="alt" id={image.id} />
              <StyledImageOverlay progress={uploadProgress}>
                <StyledImageIcon onClick={() => handleRemoveImage(image)}>
                  <RemoveImageIcon />
                </StyledImageIcon>
              </StyledImageOverlay>
              <StyledProgressBar progress={uploadProgress} />
            </StyledImageContainer>
          ))}
        </StyledGrid>
        <StyledFlexCenter>
          <Button.Outer>
            <Button.Inner>
              <Button bgGreen onClick={() => fileInput.current.click()}>
                <AddImageIcon size="1.6rem" style={{ marginTop: '5px', color: 'white' }} />
              </Button>
            </Button.Inner>
          </Button.Outer>
        </StyledFlexCenter>
      </StyledFlexCenterColumn>
    </StyledWrapper>
  )
}

export default UploadImageForm
