import styled from 'styled-components/macro'

export const StyledHeading = styled.h1`
  font-size: 2rem;
  color: white;
  font-family: 'MalmoRubik Regular', Arial, Helvetica, sans-serif;
`
export const StyledHeroHeading = styled.h1`
  padding-top: 40px;
  font-size: 4rem;
  color: white;
  font-family: 'MyriadPro';
  font-weight: bold;
`
export const StyledHeroHeadingThin = styled(StyledHeroHeading)`
  font-weight: lighter;
`

export const StyledSpanWord = styled.span`
  font-weight: bold;
`

export const StyledSpanText = styled.p`
  font-size: 1.06rem;
  font-weight: 700;
  color: white;
  font-family: 'MalmoRubik Regular', Arial, Helvetica, sans-serif;
  margin: 20px 0;
`
export const StyledInfoText = styled.p`
  font-size: 1rem;
  font-weight: 100;
  color: white;
  font-family: 'MalmoRubik Regular', Arial, Helvetica, sans-serif;
  font-weight: lighter;
`

export const StyledBoldHeader = styled.span`
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: bold;
`
export const StyledThinHeader = styled(StyledBoldHeader)`
  font-weight: lighter;
`
