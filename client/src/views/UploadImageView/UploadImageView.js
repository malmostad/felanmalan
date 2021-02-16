import UploadImageForm from './form/UploadImageForm'
import { useUpdate } from '../../contexts/UpdateContext'
import { useEffect } from 'react'

const UploadImageView = () => {
  const { setCurrentViewHeading } = useUpdate()

  useEffect(() => {
    setCurrentViewHeading('Lägg till bild på problemet')
  }, [])

  return <UploadImageForm />
}

export default UploadImageView
