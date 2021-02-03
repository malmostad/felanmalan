import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { Wrapper } from '../../components/container/index'

const DescriptionView = () => {
  return (
    <>
      <Wrapper>
        <HeadSection>
          <HeadSection.Content>
            <HeadSection.Title>DescriptionView</HeadSection.Title>
          </HeadSection.Content>
        </HeadSection>

        <NavigationButtons />
      </Wrapper>
    </>
  )
}

export default DescriptionView
