//react hooks
import { useRef } from 'react'

//libraries
import { v4 as uuidv4 } from 'uuid' //genereate random ID
import { MdAddAPhoto as AddImageIcon } from 'react-icons/md' //Icon library

//styled-components
import { StyledDropzone, StyledDropzoneContainer } from '../../../components/styles/buttons/Buttons'

//context api hook
import { useUpdate } from '../../../contexts/UpdateContext'

const UploadImageForm = () => {
  //context hook
  const { setImagesToBeUploaded } = useUpdate()

  //refs
  const fileInput = useRef(null)

  //functions
  const handleUploadImages = (e) => {
    //create array from the input files
    const stagedImagesArray = Array.from(e.target.files)
    //calls the function with the files array
    createStatefulArrayOfObjectsFromTheFilesArray(stagedImagesArray)
    //removes the URL from the JS object to prevent a memory leak
    revokeFileURLs(stagedImagesArray)
  }
  /* expects array of files, for each file create an image object with key value pairs */
  const createStatefulArrayOfObjectsFromTheFilesArray = (fileArray) => {
    const files = fileArray.map((file) => {
      return { preview_URL: URL.createObjectURL(file), id: uuidv4(), data: file, uploadStatus: 0 }
    })
    setImagesToBeUploaded((previousPreviewURLs) => [...previousPreviewURLs, ...files])
  }

  //prevents memory leak
  const revokeFileURLs = (fileArray) => {
    fileArray.map((file) => {
      URL.revokeObjectURL(file)
    })
  }

  /* note: the button onclick method takes the onChange event from the input, by using a ref to get the current elements event handler (or something like that i think, dont quote me on it) */

  return (
    <>
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
      <StyledDropzoneContainer>
        <StyledDropzone bgGreen onClick={() => fileInput.current.click()}>
          <AddImageIcon size="1.6rem" style={{ marginTop: '5px', color: 'green' }} />
        </StyledDropzone>
      </StyledDropzoneContainer>
    </>
  )
}

export default UploadImageForm
