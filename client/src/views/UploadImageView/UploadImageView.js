import { useEffect, useState, useContext } from 'react'
import UploadImageForm from './form/UploadImageForm'
import { v4 as uuidv4 } from 'uuid'
import { useUpdate } from '../../contexts/UpdateContext'
import Grid from './Grid'
import { NavigationContext } from '../../contexts/NavigationContext'
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
} from '../../components/styles/Typography/Typography'
import { StyledHeroContainer } from '../../components/styles/containers/Containers'

const UploadImageView = () => {
  const { setCurrentViewHeading, imagesToBeUploaded } = useUpdate()
  const [uploading, setUploading] = useState(false)
  const { setImagesToBeUploaded } = useUpdate()
  const { dispatch: navigationDispatch } = useContext(NavigationContext)

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          Lägg till <StyledSpanWord>bilder</StyledSpanWord> på{' '}
          <StyledSpanWord>problemet</StyledSpanWord> &<StyledSpanWord> platsen</StyledSpanWord>
        </StyledHeroHeadingThin>
      </StyledHeroContainer>
    )
  }, [])

  useEffect(() => {
    if (imagesToBeUploaded.length) {
      navigationDispatch({ type: 'disableSkip' })
      setUploading(true)
    } else {
      setUploading(false)
      navigationDispatch({ type: 'enableNext' })
      navigationDispatch({ type: 'disableNext' })
    }
  }, [imagesToBeUploaded])

  const handleImagesDropZone = (acceptedFiles) => {
    createStatefulArrayOfObjectsFromTheFilesArray(acceptedFiles)
    revokeFileURLs(acceptedFiles)
  }

  const handleImages = (e) => {
    const stagedImagesArray = Array.from(e.target.files)
    return handleImagesDropZone(stagedImagesArray)
  }

  const createStatefulArrayOfObjectsFromTheFilesArray = (fileArray) => {
    const files = fileArray.map((file) => {
      return { preview_URL: URL.createObjectURL(file), id: uuidv4(), data: file, uploadStatus: 0 }
    })
    setImagesToBeUploaded((previousPreviewURLs) => [...previousPreviewURLs, ...files])
  }

  const revokeFileURLs = (fileArray) => {
    fileArray.map((file) => {
      URL.revokeObjectURL(file)
    })
  }

  return (
    <>
      {uploading && <Grid handleImages={handleImages} images={imagesToBeUploaded} />}
      <UploadImageForm handleImagesDropZone={handleImagesDropZone} />
    </>
  )
}

export default UploadImageView
