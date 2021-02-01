
import { LandingContainer } from '../../components/container/index';
import { useUpdate } from '../../contexts/UpdateContext';
import ReadMore from '../../components/ReadMore/ReadMore';
import NavigationButtons from '../../components/buttons/navigation/NavigationButtons';

const LandingView = () => {
  const { readMore } = useUpdate();
  return (
    <>
      <LandingContainer>
        <h1>Testing testing</h1>
        {readMore && <ReadMore />}
        <NavigationButtons />
      </LandingContainer>
    </>
  );
};

export default LandingView;
