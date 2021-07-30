import styled from "styled-components/macro";

export const StyledHeroHeading = styled.h1`
  overflow: hidden;
  padding-top: 90px;
  font-size: 4rem;
  color: white;
  font-weight: 700;
  @media (max-width: 560px) {
    padding: 15px 0px;
    line-height: 39px;
    font-size: 2.1rem;
    max-width: 20rem;
    font-family: "MyriadPro";
    font-weight: 700;
    letter-spacing: 0.2px;
  }
`;

export const StyledHeroHeadingThin = styled(StyledHeroHeading)`
  font-weight: lighter;
  line-height: 64px;
  padding: 0;
  padding-bottom: 10px;
  @media (max-width: 560px) {
    line-height: 39px;
  }
`;

export const StyledSpanWord = styled.span`
  font-weight: bold;
`;
export const StyledTextFollowUp = styled.p`
  align-self: flex-end;
  font-family: "Titillium Web", Arial, Helvetica, sans-serif;
  color: #8f8787;
`;

export const StyledSpanText = styled.p`
  font-size: 1.06rem;
  font-weight: 700;
  color: white;
  font-family: "MyriadPro";
  margin: 20px 0;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5715;
`;
export const StyledInfoText = styled.p`
  font-size: 1.06rem;
  color: white;
  font-family: "MyriadPro";
  font-weight: lighter;
  line-height: 1.5715;
  -moz-osx-font-smoothing: grayscale;
`;

export const StyledText = styled(StyledInfoText)`
  padding: 10px;
  color: white;
`;

export const StyledTextTitle = styled(StyledText)`
  margin-top: 10px;
  flex-grow: 1;
  overflow: hidden;
  font-size: 22px;
  line-height: 27px;
  color: white;
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: bold;
  margin-bottom: 0;
  font-weight: 600;
  @media (max-width: 560px) {
    margin-left: 10px;
    padding: 0;
  }
`;

export const StyledBorder = styled.div`
  overflow: hidden;
  max-width: 100%;
  border: solid #f8c900 1px;
  @media (max-width: 560px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBoldHeader = styled.span`
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: bold;
`;

export const Errand = styled.span`
  color: white;
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: bold;
  text-decoration: underline;
`;
export const StyledDescription = styled.a`
  margin-top: 1.5rem !important;
  font-size: 26px;
  line-height: 27px;
  color: white;
  font-family: "MyriadPro";
  font-weight: lighter;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  margin: auto;
  justify-content: end;
  flex-direction: column;
`;
