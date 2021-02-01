import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { StyledContainer } from '../../components/container/index'

const DescriptionView = () => {
  return (
    <>
      <StyledContainer>
        <HeadSection>
          <HeadSection.Content>
            <HeadSection.Title>DescriptionView</HeadSection.Title>
          </HeadSection.Content>
        </HeadSection>

        <NavigationButtons />
      </StyledContainer>
    </>
  )
}

export default DescriptionView
