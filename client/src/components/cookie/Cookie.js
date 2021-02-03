import { ButtonContainer } from '../buttons/index'
import { LandingContainer } from '../container/index'
import { useUpdate } from '../../contexts/UpdateContext'

const Cookie = () => {
  const { setAcceptCookies } = useUpdate()

  const acceptCookies = () => {
    setAcceptCookies(true)
  }

  return (
    <>
      <LandingContainer>
        <h1>Malmö stads felanmälan</h1>
        <ButtonContainer>
          <ButtonContainer.Button onClick={acceptCookies}>
            Acceptera
          </ButtonContainer.Button>
        </ButtonContainer>
      </LandingContainer>
    </>
  )
}

export default Cookie
