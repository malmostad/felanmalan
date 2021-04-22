import styled from 'styled-components/macro'

export const StyledHeading = styled.h1`
  font-size: 2rem;
  color: white;
  font-family: 'MalmoRubik Regular', Arial, Helvetica, sans-serif;
`
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
    font-family: 'MyriadPro';
    font-weight: 700;
    letter-spacing: 0.2px;
  }
`

export const StyledHeroHeadingThin = styled(StyledHeroHeading)`
  font-weight: lighter;
  line-height: 64px;
  padding: 0;
  @media (max-width: 560px) {
    line-height: 39px;
  }
`

export const StyledSpanWord = styled.span`
  font-weight: bold;
`
export const StyledTextFollowUp = styled.p`
  align-self: flex-end;
  font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
  color: #8f8787;
`

export const StyledSpanText = styled.p`
  font-size: 1.06rem;
  font-weight: 700;
  color: white;
  font-family: 'MyriadPro';
  margin: 20px 0;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5715;
`
export const StyledInfoText = styled.p`
  font-size: 1.06rem;
  color: white;
  font-family: 'MyriadPro';
  font-weight: lighter;
  line-height: 1.5715;
  -moz-osx-font-smoothing: grayscale;
`

export const StyledBoldHeader = styled.span`
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: bold;
`
export const StyledThinHeader = styled(StyledBoldHeader)`
  font-weight: lighter;
`

export const Errand = styled.a`
  cursor: pointer;
  color: white;
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: bold;
  text-decoration: underline;
`
export const StyledDescription = styled.a`
  font-size: 26px;
  line-height: 27px;
  color: white;
  font-family: 'MyriadPro';
  font-weight: lighter;

  -moz-osx-font-smoothing: grayscale;
`
