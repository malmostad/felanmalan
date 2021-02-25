import UploadImageForm from './form/UploadImageForm'
import { useUpdate } from '../../contexts/UpdateContext'
import { useEffect, useState } from 'react'
import Grid from './Grid'

const UploadImageView = () => {
  const { setCurrentViewHeading, imagesToBeUploaded } = useUpdate()
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    setCurrentViewHeading('Lägg till bild på problemet')
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
