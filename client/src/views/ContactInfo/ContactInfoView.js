import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { Wrapper } from '../../components/container/index'

const ContactInfoView = () => {
  return (
    <>
      <Wrapper>
        <HeadSection>
          <HeadSection.Content>
            <HeadSection.Title>ContactInfoView</HeadSection.Title>
          </HeadSection.Content>
        </HeadSection>

        <NavigationButtons />
      </Wrapper>
    </>
  )
}

export default ContactInfoView
