import React, { useEffect, useRef, useContext } from 'react'
import { useReport } from '../.././contexts/ReportContext'
import { NavigationContext } from '../../contexts/NavigationContext'
import {
  StyledError,
  StyledFormWrapper,
  StyledInput,
  InputFormSecond,
} from '../../components/styles/form/Form'

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const mobilePattern = /^[0-9]{10}$/

const ContactInfoView = () => {
  const { setCurrentViewHeading, currentViewHeading } = useUpdate()
  const name = useRef('')
  const email = useRef('')
  const phone = useRef('')
  const enable_tracking = useRef(false)
  const { handelSetFormInfo, formState } = useReport()
  const { dispatch } = useContext(NavigationContext)

  const handelFormInfo = (e) => {
    handelSetFormInfo('name', name.current.value)
    handelSetFormInfo('email', email.current.value)
    handelSetFormInfo('phone', phone.current.value)
    handelSetFormInfo('enable_tracking', enable_tracking.current.checked)
  }

  useEffect(() => {
    setCurrentViewHeading('Kan vi kontakta dig vid frågor?')
  }, [currentViewHeading])

  useEffect(() => {
    const phoneOrEmailSet =
      [!isEmptyPhoneNumberInput, !isEmptyEmailInput].filter((isSet) => isSet).length > 0

    if ((isEmptyEmailInput || isValidEmail) && (isEmptyPhoneNumberInput || isValidPhoneNumber)) {
      if (enable_tracking.current.checked && phoneOrEmailSet) {
        dispatch({ type: 'enableSubmit' })
      } else if (!enable_tracking.current.checked) {
        dispatch({ type: 'enableSubmit' })
      } else {
        dispatch({ type: 'disableSubmit' })
      }
    } else {
      dispatch({ type: 'disableSubmit' })
    }
  }, [enable_tracking.current.checked, email.current.value, phone.current.value])

  const isEmptyPhoneNumberInput =
    !phone.current.value || (phone.current.value && phone.current.value.length === 0)

  const isEmptyEmailInput =
    !email.current.value || (email.current.value && email.current.value.length === 0)

  const isValidEmail = emailPattern.test(email.current.value)

  const isValidPhoneNumber = mobilePattern.test(phone.current.value)

  const trackingRequirementsFulfilled = () => {
    const phoneOrEmailSet =
      [!isEmptyPhoneNumberInput, !isEmptyEmailInput].filter((isSet) => isSet).length > 0
    return phoneOrEmailSet && (isValidEmail || isValidPhoneNumber)
  }

  const shouldRenderPhoneError = () => {
    if (isEmptyPhoneNumberInput) {
      return false
    }
    if (!isValidPhoneNumber) {
      return true
    }
  }

  const shouldRenderEmailError = () => {
    if (isEmptyEmailInput) {
      return false
    }
    if (!isValidEmail) {
      return true
    }
  }
  return (
    <>
      <StyledFormWrapper>
        <form>
          <div>
            <label htmlFor="name">
              Namn
              <StyledInput
                placeholder="Skriv ditt namn"
                type="name"
                name="name"
                defaultValue={formState.name}
                ref={name}
                onChange={handelFormInfo}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              E-post
              {shouldRenderEmailError() && <StyledError>Kontrollera email</StyledError>}
              <InputFormSecond
                placeholder="Skriv din email"
                type="email"
                name="email"
                defaultValue={formState.email}
                ref={email}
                onChange={handelFormInfo}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Telefonnummer
              {shouldRenderPhoneError() && <StyledError>Kontrollera telefonnummer</StyledError>}
              <InputFormSecond
                placeholder="Skriv ditt telefonnummer"
                type="phone"
                name="phone"
                defaultValue={formState.phone}
                ref={phone}
                onChange={handelFormInfo}
              />
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="enable_tracking"
              defaultChecked={formState.enable_tracking}
              ref={enable_tracking}
              onChange={handelFormInfo}
            />
            <span> Vill du få uppföljning på ditt ärende?</span>
          </div>
        </form>
        {enable_tracking.current.checked && !trackingRequirementsFulfilled() && (
          <StyledError> Fyll i telefonnumer eller e-post </StyledError>
        )}
      </StyledFormWrapper>
    </>
  )
}

export default ContactInfoView
