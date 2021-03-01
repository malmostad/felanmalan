import { useUpdate } from '../../contexts/UpdateContext'
import { useCookies } from 'react-cookie'
import Cookie from '../cookie/Cookie'
import Footer from '../footer/Footer'
import HeaderSection from '../header/HeaderSection'
import Error from '../errors/Error'

const Steps = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const { error, errorMessenger, errorStatusCode, current } = useUpdate()

  return (
    <>
      {cookies.cookieConsent ? (
        <>
          <HeaderSection />
          {error ? (
            <Error errorMessage={errorMessenger} statusCode={errorStatusCode} />
          ) : (
            <>{current}</>
          )}
          <Footer />
        </>
      ) : (
        <Cookie />
      )}
    </>
  )
}

export default Steps
