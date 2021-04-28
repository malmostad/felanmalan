import { useRef, useEffect, useState, useContext, useCallback } from 'react'
import { NavigationContext } from '../../../contexts/NavigationContext'
import { useDropzone } from 'react-dropzone'
import { IoArrowUpCircle } from 'react-icons/io5'
import { StyledUploadContainer } from '../../../components/styles/containers/Containers'
import { Dropzone } from '../styles/styles'
import { useReport } from '../../../contexts/ReportContext'

const UploadImageForm = ({ handleUploadImages }) => {
  const { dispatch: navigationDispatch } = useContext(NavigationContext)
  const { formState } = useReport()
  const fileInput = useRef(null)

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
      {!formState.images.length && (
        <StyledUploadContainer>
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
        </StyledUploadContainer>
      )}
    </>
  )
}

export default UploadImageForm
