import { HeadSection } from '../../components/headSection/index'
import { Wrapper } from '../../components/container/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { useUpdate } from '../../contexts/UpdateContext'
import Cookie from '../../components/cookie/Cookie'

const UploadImageView = () => {
  const { acceptCookies } = useUpdate()

  return (
    <Wrapper light>
      {acceptCookies ? (
        <>
          <HeadSection>
            <HeadSection.Inner>
              <HeadSection.Title>Upload</HeadSection.Title>
            </HeadSection.Inner>
          </HeadSection>
          <NavigationButtons />
        </>
      ) : (
        <Cookie />
      )}
    </Wrapper>
  )
}

export default UploadImageView
