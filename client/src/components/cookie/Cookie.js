import { useUpdate } from '../../contexts/UpdateContext'
import { Button } from '../buttons/Buttons'
import {StyledLandingContainer} from '../styles/containers/Containers'

const Cookie = () => {
  const { setAcceptCookies } = useUpdate()

  const acceptCookies = () => {
    console.log("click")
    setAcceptCookies(true)
  }

  return (
    <>
      <StyledLandingContainer>
        <h1>Malmö stads felanmälan</h1>
        <Button.Outer>
            <Button onClick={acceptCookies}>
              Acceptera
            </Button>
        </Button.Outer>
      </StyledLandingContainer>
    </>
  )
}

export default Cookie
