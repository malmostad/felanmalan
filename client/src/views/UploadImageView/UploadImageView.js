import { HeadSection } from '../../components/headSection/index'
import { StyledContainer } from '../../components/container/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { useUpdate } from '../../contexts/UpdateContext'
import Cookie from '../../components/cookie/Cookie'

const UploadImageView = () => {
  const { acceptCookies } = useUpdate()

  return (
    <>
      <StyledContainer>
        {acceptCookies ? (
          <>
            <HeadSection>
              <HeadSection.Content>
                <HeadSection.Title>Upload</HeadSection.Title>
              </HeadSection.Content>
            </HeadSection>
            <NavigationButtons />
          </>
        ) : (
          <Cookie />
        )}
      </StyledContainer>
    </>
  )
}

export default UploadImageView
