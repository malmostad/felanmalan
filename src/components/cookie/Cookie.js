import { StyledOutlineButtonWhiteFirstPage } from "../styles/buttons/Buttons";
import styled from "styled-components/macro";
import {
  StyledCookieContainer,
  StyledOuter,
  StyledButtonContainer,
} from "../styles/containers/Containers";
import { useCookies } from "react-cookie";
import {
  StyledHeroHeading,
  ConsentHeading,
  StyledInfoText,
} from "../styles/Typography/Typography";

import malmoSvg from "../../assets/img/malmo-logo.svg";

const Logo = styled.img`
  width: 200px;
  margin: 10px 0px 30px 0px;
  @media (min-width: 560px) {
    margin-top: 30px;
  }
`;

const Cookie = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  const handleSetCookie = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <>
      <StyledOuter>
        <StyledCookieContainer>
          <Logo src={malmoSvg} />
          <StyledHeroHeading>
            Felanmälan och synpunkter på stadsmiljön
          </StyledHeroHeading>
          <>
            <ConsentHeading>Hantering av personuppgifter</ConsentHeading>
            <StyledInfoText>
              För att kunna hantera ditt ärende sparar vi de personuppgifter du
              lämnar till oss.
            </StyledInfoText>
          </>
          <a href="https://malmo.se/personuppgifter">
            Information om hur Malmö stad hanterar personuppgifter
          </a>
        </StyledCookieContainer>
        <StyledButtonContainer>
          <StyledOutlineButtonWhiteFirstPage onClick={handleSetCookie}>
            Acceptera
          </StyledOutlineButtonWhiteFirstPage>
        </StyledButtonContainer>
      </StyledOuter>
    </>
  );
};
export default Cookie;
