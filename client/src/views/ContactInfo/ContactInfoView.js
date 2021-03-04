import React, { useEffect, useRef, useContext } from 'react'
import { useReport } from '../.././contexts/ReportContext'
import { NavigationContext } from '../../contexts/NavigationContext'
import {
  StyledError,
  StyledFormWrapper,
  StyledInput,
  InputFormSecond,
} from '../../components/styles/form/Form'
import { useUpdate } from '../.././contexts/UpdateContext'

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const mobilePattern = /^[0-9]{10}$/

const ContactInfoView = () => {
  const name = useRef('')
  const email = useRef('')
  const phone = useRef('')
  const enable_tracking = useRef(false)
  const { handelSetFormInfo, formState } = useReport()
  const { dispatch } = useContext(NavigationContext)

  const handelFormInfo = (e) => {
    handelSetFormInfo('name', name.current.value),
      handelSetFormInfo('email', email.current.value),
      handelSetFormInfo('phone', phone.current.value),
      handelSetFormInfo('enable_tracking', enable_tracking.current.checked)
  }

  useEffect(() => {
    enable_tracking.current.checked
      ? dispatch({ type: 'disableSubmit' })
      : dispatch({ type: 'enableSubmit' })
    if (emailPattern.test(email.current.value)) {
      dispatch({ type: 'enableSubmit' })
    }
    if (mobilePattern.test(phone.current.value)) {
      dispatch({ type: 'enableSubmit' })
    }
  }, [enable_tracking.current.checked, email.current.value, phone.current.value])

  const isValidEmail =
    !email.current || email.current.value.length < 1 || emailPattern.test(email.current.value)

  const isValidPhoneNumber =
    !phone.current || phone.current.value.length < 1 || mobilePattern.test(phone.current.value)

  const isValidAndChecked =
    enable_tracking.current.checked && !emailPattern.test(email.current.value)

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
              {!isValidEmail && <StyledError>Kontrollera email</StyledError>}
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
              {!isValidPhoneNumber && <StyledError>Kontrollera telefonnumer</StyledError>}
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
        {isValidAndChecked && !mobilePattern.test(phone.current.value) && (
          <StyledError> Fyll i telefonnumer eller e-post </StyledError>
        )}
      </StyledFormWrapper>
    </>
  )
}

export default ContactInfoView
