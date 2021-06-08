import { useState } from 'react'
import { StyledReadMoreButton, StyledOutlineButtonWhiteFirstPage } from '../styles/buttons/Buttons'
import {
  StyledCookieContainer,
  StyledOuter,
  StyledButtonContainer,
} from '../styles/containers/Containers'
import { useCookies } from 'react-cookie'
import { StyledHeroHeading, StyledSpanText, StyledInfoText } from '../styles/Typography/Typography'
import { AiOutlineQuestionCircle as Icon } from 'react-icons/ai'
import ReadMore from '../readmore/ReadMore'

const Cookie = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const [readMore, setReadMore] = useState(false)

  const handleSetCookie = () => {
    setCookie('cookieConsent', true, { path: '/' })
  }

  const handleReadMore = () => {
    setReadMore(true)
  }

  return (
    <>
      <StyledOuter>
        <StyledCookieContainer>
          <StyledHeroHeading>Malmö stads felanmälan</StyledHeroHeading>
          <StyledSpanText>Här anmäler du fel på Malmös gator, torg och parker.</StyledSpanText>
          {readMore ? (
            <ReadMore />
          ) : (
            <>
              <StyledInfoText>
                Vi vill att tjänsten ska fungera så bra som möjligt för dig som besökare. För att
                kunna ta reda på vad vi kan göra bättre analyserar vi hur våra besökare använder
                tjänsten med webbkakor (cookies)
              </StyledInfoText>
            </>
          )}
        </StyledCookieContainer>
        <StyledButtonContainer>
          {!readMore && (
            <StyledReadMoreButton onClick={handleReadMore}>
              <Icon /> Läs mer
            </StyledReadMoreButton>
          )}

          <StyledOutlineButtonWhiteFirstPage onClick={handleSetCookie}>
            Acceptera
          </StyledOutlineButtonWhiteFirstPage>
        </StyledButtonContainer>
      </StyledOuter>
    </>
  )
}
export default Cookie
