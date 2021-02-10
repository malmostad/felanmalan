import { useState, useEffect } from 'react'
import { useUpdate } from '../../contexts/UpdateContext'
import { formViews } from '../../views/index'
import { Button } from '../buttons/Buttons'
import Cookie from '../cookie/Cookie'
import Footer from '../footer/Footer'
import HeaderSection from '../header/HeaderSection'

const Steps = () => {
  const { currentView, acceptCookies, error, errorMessenger } = useUpdate()
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
      {acceptCookies ? (
        <>
          <HeaderSection />
          {error ? <>{errorMessenger}</> : <>{current}</>}
          <Footer />
        </>
      ) : (
        <Cookie />
      )}
    </>
  )
}

export default Steps
