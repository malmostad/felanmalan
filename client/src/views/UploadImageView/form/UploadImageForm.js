//react hooks
import { useRef, useEffect, useState, useContext, useCallback } from 'react'
import { NavigationContext } from '../../../contexts/NavigationContext'

//libraries
import { v4 as uuidv4 } from 'uuid' //genereate random ID
import { useDropzone } from 'react-dropzone'
import { IoArrowUpCircle } from 'react-icons/io5'

//styled-components
import { Dropzone } from '../styles/styles'
import { useReport } from '../../../contexts/ReportContext'
//context api hook
import { useUpdate } from '../../../contexts/UpdateContext'

const UploadImageForm = () => {
  const { dispatch: navigationDispatch } = useContext(NavigationContext)
  const { formState } = useReport()
  const [droppedImages, setDroppedImages] = useState([])

  //context hook
  const { setImagesToBeUploaded } = useUpdate()
  //refs
  const fileInput = useRef(null)
  //functions
  const handleUploadImages = (acceptedFiles) => {
    console.log('this is acceptedFiles inside handelUploadImages', acceptedFiles)

    //create array from the input files
    const stagedImagesArray = acceptedFiles
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

  useEffect(() => {
    if (formState.images.length === 0) {
      navigationDispatch({ type: 'disableNext' })
    }
    if (formState.images.length > 0) {
      navigationDispatch({ type: 'enableNext' })
    }
  }, [formState.images])

  const onDrop = useCallback((acceptedFiles) => {
    handleUploadImages(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({ onDrop })

  return (
    <>
      <Dropzone {...getRootProps()}>
        <input
          name="images"
          type="file"
          id="upload-button"
          multiple
          ref={fileInput}
          style={{ display: 'none' }}
          accept="image/*"
          {...getInputProps()}
        />
        <IoArrowUpCircle size="3rem" style={{ color: '#037540', marginBottom: '10px' }} />
        Klicka eller dra hit för att starta uppladdning
      </Dropzone>
    </>
  )
}

export default UploadImageForm
