import { useState } from "react";
import { StyledOutlineButtonWhiteFirstPage } from "../styles/buttons/Buttons";
import {
  StyledCookieContainer,
  StyledOuter,
  StyledButtonContainer,
} from "../styles/containers/Containers";
import { useCookies } from "react-cookie";
import {
  StyledHeroHeading,
  StyledSpanText,
  ConsentHeading,
  StyledInfoText,
} from "../styles/Typography/Typography";

const Cookie = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [readMore, setReadMore] = useState(false);

  const handleSetCookie = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  const handleReadMore = () => {
    setReadMore(true);
  };

  return (
    <>
      <StyledOuter>
        <StyledCookieContainer>
          <StyledHeroHeading>Malmö stads anmälan</StyledHeroHeading>
          <StyledSpanText>
            Här anmäler du fel och synpunkter på Malmös gator, torg och parker.
          </StyledSpanText>
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
