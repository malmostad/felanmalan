import UploadImageForm from './form/UploadImageForm'
import { useUpdate } from '../../contexts/UpdateContext'
import { useEffect, useState } from 'react'
import Grid from './Grid'

const UploadImageView = () => {
  const { setCurrentViewHeading, imagesToBeUploaded, currentViewHeading } = useUpdate()
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    setCurrentViewHeading('Lägg till bild på problemet')
  }, [currentViewHeading])

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
