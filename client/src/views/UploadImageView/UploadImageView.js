import styled from 'styled-components/macro'
import UploadImageForm from './form/UploadImageForm'

const StyledPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const UploadImageView = () => {
  return <UploadImageForm />
}

export default UploadImageView
