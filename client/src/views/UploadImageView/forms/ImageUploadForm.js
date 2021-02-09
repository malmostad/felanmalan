import { useState } from 'react'
import { useReport } from '../../../contexts/ReportContext'
import { useForm } from 'react-hook-form'
import StyledFlexCenterColumn from '../styles/styles'

const ImageUploadForm = () => {
  const { report, setReport } = useReport()
  const [image, setImage] = useState([{}])
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    setImage(data)
  }

  return (
    <StyledFlexCenterColumn>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type="file" name="picture" />
        <button>Submit</button>
      </form>
    </StyledFlexCenterColumn>
  )
}

export default ImageUploadForm
