import { Hero } from '../../hero/index';
import { ButtonContainer } from '../../buttons';

const FollowUpView = () => {

  const handleSubmit= () => {
    console.log('success')
  }

    return (
        <>
        <Hero>
          <Hero.Content>
            <Hero.Title>Follow up view</Hero.Title>
          </Hero.Content>
        </Hero>

        <ButtonContainer>
          <ButtonContainer.Button onClick={handleSubmit}> Submit </ButtonContainer.Button>
        </ButtonContainer>
      </>
    )
}

export default FollowUpView