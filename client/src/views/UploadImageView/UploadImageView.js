import styled from 'styled-components/macro'
import UploadImageForm from './form/UploadImageForm'

const StyledPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UploadImageView = () => {
  return (
    <StyledPageWrapper>
      <UploadImageForm />
    </StyledPageWrapper>
  )
}

export default UploadImageView
