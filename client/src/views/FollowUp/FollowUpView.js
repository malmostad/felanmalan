import { HeadSection } from '../../components/headSection/index'
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons'
import { Wrapper } from '../../components/container/index'

const FollowUpView = () => {
  return (
    <>
      <Wrapper>
        <HeadSection>
          <HeadSection.Inner>
            <HeadSection.Title>Follow up view</HeadSection.Title>
          </HeadSection.Inner>
        </HeadSection>

        <NavigationButtons />
      </Wrapper>
    </>
  )
}

export default FollowUpView
