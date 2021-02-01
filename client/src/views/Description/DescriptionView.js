import { Hero } from '../../components/hero/index';
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons';

const DescriptionView = () => {

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>DescriptionView</Hero.Title>
        </Hero.Content>
      </Hero>

      <NavigationButtons />
    </>
  );
};

export default DescriptionView;
