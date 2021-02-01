import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { StyledContainer } from '../../components/container/index'

const ContactInfoView = () => {
  return (
    <>
      <StyledContainer>
        <HeadSection>
          <HeadSection.Content>
            <HeadSection.Title>ContactInfoView</HeadSection.Title>
          </HeadSection.Content>
        </HeadSection>

        <NavigationButtons />
      </StyledContainer>
    </>
  )
}

export default ContactInfoView
