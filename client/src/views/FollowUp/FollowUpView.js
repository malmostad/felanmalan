import { Hero } from '../../components/hero/index';
import { ButtonWrapper } from '../../components/buttons/index';

const FollowUpView = () => {
  const handleSubmit = () => {
    console.log('success');
  };

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>Follow up view</Hero.Title>
        </Hero.Content>
      </Hero>

      <ButtonWrapper>
        <ButtonWrapper.Button onClick={handleSubmit}>
          Submit
        </ButtonWrapper.Button>
      </ButtonWrapper>
    </>
  );
};

export default FollowUpView;
