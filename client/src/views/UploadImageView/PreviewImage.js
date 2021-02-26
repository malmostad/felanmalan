//hooks
import { useCallback, useEffect, useRef, useState } from 'react'
//api
import { postImages } from '../../api/api'
// global state
import { useReport } from '../../contexts/ReportContext'
import { useUpdate } from '../../contexts/UpdateContext'
// styles
import { StyledFlexCenterColumn } from '../../components/styles/containers/Containers'
import { StyledImageContainer, StyledImageOverlay, StyledImageIcon } from './styles/styles'
//icons lib
import { IoTrashOutline as RemoveImageIcon } from 'react-icons/io5'
import ProgressBar from './ProgressBar'

const PreviewImage = ({ image }) => {
  //refs (might not be needed)
  let uploadRef = useRef(image)
  //current file
  const currentFile = uploadRef.current

  //local states
  const [uploadedImages, setUploadedImages] = useState([])
  const [uploadProgress, setUploadProgress] = useState(uploadRef.current.uploadStatus)

  //context hook
  const { dispatch } = useReport()
  const { setImagesToBeUploaded, imagesToBeUploaded } = useUpdate()

  const Upload = async (file) => {
    const resp = await postImages(
      process.env.REACT_APP_API_POST_PHOTOS_ENDPOINT,
      file.data,
      //progress event callback
      (progressEvent) => {
        let progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        // looks at the current file and updates its progress
        setUploadProgress(progress)
        //sets the current progress state to the status of the ref
      }
    )
    // sets the response id
    setUploadedImages((prevState) => [...prevState, resp.data])
  }

  //callback hook for memoizing the upload task
  const memoizedUploadTask = useCallback(() => {
    Upload(image)
  }, [image])

  //runs the uploadTask callback on first render
  useEffect(() => {
    memoizedUploadTask(image)
  }, [])

  // sends a dispatch event to the context setting the uploaded image ids in the report image array
  useEffect(() => {
    dispatch({
      type: 'uploadedImage',
      field: 'images',
      payload: uploadedImages,
    })
  }, [uploadedImages])

  //removes the image preview but doe snot actually delete the image from being uploaded
  const handleRemoveImage = (image) => {
    setImagesToBeUploaded(imagesToBeUploaded.filter((item) => item.id !== image.id))
  }

  // check if the current file
  return (
    <StyledFlexCenterColumn>
      <StyledImageContainer>
        <img id={image.id} src={image.preview_URL} alt="alt" />
        <StyledImageOverlay>
          <StyledImageIcon onClick={() => handleRemoveImage(image)}>
            <RemoveImageIcon />
          </StyledImageIcon>
        </StyledImageOverlay>
      </StyledImageContainer>
      {currentFile.id && <ProgressBar max={100} progress={uploadProgress} />}
    </StyledFlexCenterColumn>
  )
}

export default PreviewImage
