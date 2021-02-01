import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { StyledContainer } from '../../components/container/index'

const FollowUpView = () => {
  return (
    <>
      <StyledContainer>
        <HeadSection>
          <HeadSection.Content>
            <HeadSection.Title>Follow up view</HeadSection.Title>
          </HeadSection.Content>
        </HeadSection>

        <NavigationButtons />
      </StyledContainer>
    </>
  )
}

export default FollowUpView
