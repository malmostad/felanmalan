import styled from 'styled-components/macro'
import UploadImageForm from './form/UploadImageForm'

const StyledPageWrapper = styled.div`
  height: 600px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const UploadImageView = () => {
  return (
    <StyledPageWrapper>
      <UploadImageForm />
    </StyledPageWrapper>
  )
}

export default UploadImageView
