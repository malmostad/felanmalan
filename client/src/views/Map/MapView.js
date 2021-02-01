import { Hero } from '../../components/hero/index';
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons';

const MapView = () => {

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>Map</Hero.Title>
        </Hero.Content>
      </Hero>
      <NavigationButtons />
    </>
  );
};

export default MapView;
