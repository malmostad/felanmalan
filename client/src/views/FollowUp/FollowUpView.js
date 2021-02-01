import { Hero } from '../../components/hero/index';
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons';

const FollowUpView = () => {

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>Follow up view</Hero.Title>
        </Hero.Content>
      </Hero>

      <NavigationButtons />
    </>
  );
};

export default FollowUpView;
