import { useUpdate } from '../../contexts/UpdateContext'
import { NavigationContext } from '../../contexts/NavigationContext'
import { useCookies } from 'react-cookie'
import Cookie from '../cookie/Cookie'
import Footer from '../footer/Footer'
import HeaderSection from '../header/HeaderSection'
import { useContext, createContext, useReducer } from 'react'
import Error from '../errors/Error'
import { formViews } from '../../views/index'
const Steps = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const { error, errorMessenger, errorStatusCode } = useUpdate()
  const { state } = useContext(NavigationContext)
  const { currentViewIndex } = state

  return (
    <>
      {cookies.cookieConsent ? (
        <>
          <HeaderSection />
          {error ? (
            <Error errorMessage={errorMessenger} statusCode={errorStatusCode} />
          ) : (
            <>{formViews[state.currentViewIndex]}</>
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
