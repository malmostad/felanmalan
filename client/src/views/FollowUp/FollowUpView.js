import { HeadSection } from '../../components/headSection/index';
import { ButtonWrapper } from '../../components/buttons/index';

const FollowUpView = () => {
  const handleSubmit = () => {
    console.log('success');
  };

  return (
    <>
      <HeadSection>
        <HeadSection.Content>
          <HeadSection.Title>Follow up view</HeadSection.Title>
        </HeadSection.Content>
      </HeadSection>

      <ButtonWrapper>
        <ButtonWrapper.Button onClick={handleSubmit}>
          Submit
        </ButtonWrapper.Button>
      </ButtonWrapper>
    </>
  );
};

export default FollowUpView;
