import { Hero } from '../../components/hero/index';
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons';

const UploadImageView = () => {

  return (
    <>
      <Hero>
        <Hero.Content>
          <Hero.Title>Upload</Hero.Title>
        </Hero.Content>
      </Hero>
      <NavigationButtons />
    </>
  );
};

export default UploadImageView;
