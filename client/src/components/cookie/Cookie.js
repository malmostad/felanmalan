import { Button } from '../buttons/Buttons'
import { StyledLandingContainer } from '../styles/containers/Containers'
import { useCookies } from 'react-cookie'

const Cookie = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent'])

  const handleSetCookie = () => {
    setCookie('cookieConsent', true, { path: '/' })
  }

  return (
    <>
      <StyledLandingContainer>
        <h1>Malmö stads felanmälan</h1>
        <Button.Outer>
          <Button onClick={handleSetCookie}>Acceptera</Button>
        </Button.Outer>
      </StyledLandingContainer>
    </>
  )
}
export default Cookie
