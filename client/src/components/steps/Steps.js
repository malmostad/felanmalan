import { useState, useEffect } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { formViews } from '../../views/index'
import { useCookies } from 'react-cookie'
import Cookie from '../cookie/Cookie'
import Footer from '../footer/Footer'
import HeaderSection from '../header/HeaderSection'
import Error from '../errors/Error'

const Steps = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const { currentView, error, errorMessenger, errorStatusCode } = useUpdate()
  const [current, setCurrent] = useState()

  useEffect(() => {
    formViews.forEach((View, index) => {
      if (currentView === index) {
        setCurrent(View)
      }
    })
  }, [currentView])

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
