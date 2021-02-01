import { ButtonWrapper } from '../buttons/index';
import { LandingWrapper } from '../container/index';
import { useUpdate } from '../../contexts/UpdateContext';

const Cookie = () => {
  const { setAcceptCookies } = useUpdate();

  const acceptCookies = () => {
    setAcceptCookies(true);
  };

  return (
    <>
      <LandingWrapper>
        <h1>Malmö stads felanmälan</h1>
        <ButtonWrapper>
          <ButtonWrapper.Button onClick={acceptCookies}>
            Acceptera
          </ButtonWrapper.Button>
        </ButtonWrapper>
      </LandingWrapper>
    </>
  );
};

export default Cookie;
