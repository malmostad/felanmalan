import UploadImageForm from './form/UploadImageForm'
import { useUpdate } from '../../contexts/UpdateContext'
import { useEffect, useState } from 'react'
import Grid from './Grid'
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
} from '../../components/styles/Typography/Typography'

const UploadImageView = () => {
  const { setCurrentViewHeading, imagesToBeUploaded, currentViewHeading } = useUpdate()
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    setCurrentViewHeading(
      <div>
        <StyledHeroHeadingThin>
          Lägg till <StyledSpanWord>bilder</StyledSpanWord> på{' '}
          <StyledSpanWord>problemet</StyledSpanWord> &<StyledSpanWord> platsen</StyledSpanWord>
        </StyledHeroHeadingThin>
      </div>
    )
  }, [])

  useEffect(() => {
    if (imagesToBeUploaded.length) {
      setUploading(true)
    }
  }, [imagesToBeUploaded])

  return (
    <>
      {uploading && <Grid images={imagesToBeUploaded} />}
      <UploadImageForm />
    </>
  )
}

export default UploadImageView
