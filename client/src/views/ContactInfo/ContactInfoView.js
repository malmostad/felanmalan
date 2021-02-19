import React, { useEffect, useRef } from 'react'
import { useReport } from '../.././contexts/ReportContext'
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
  const userName = useRef('')
  const email = useRef('')
  const phone = useRef('')
  const followUp = useRef(false)
  const { handelSetFormInfo, formState } = useReport()
  const { setDisabledNext } = useUpdate()

  const handelFormInfo = (e) => {
    handelSetFormInfo('userName', userName.current.value),
      handelSetFormInfo('email', email.current.value),
      handelSetFormInfo('phone', phone.current.value),
      handelSetFormInfo('followUp', followUp.current.checked)
  }

  useEffect(() => {
    followUp.current.checked ? setDisabledNext(true) : setDisabledNext(false)
    if (emailPattern.test(email.current.value)) {
      setDisabledNext(false)
    }
    if (mobilePattern.test(phone.current.value)) {
      setDisabledNext(false)
    }
  }, [followUp.current.checked, email.current.value, phone.current.value])

  return (
    <>
      <StyledFormWrapper>
        <form id="contact-form">
          <div>
            <label htmlFor="name">
              Namn
              <StyledInput
                placeholder="Skriv ditt namn"
                type="name"
                name="name"
                defaultValue={formState.name}
                ref={userName}
                onChange={handelFormInfo}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              E-post
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
              <InputFormSecond
                placeholder="Skriv ditt telefonnumer"
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
              name="followUp"
              defaultChecked={formState.followUp}
              ref={followUp}
              onChange={handelFormInfo}
            />
            <span> Vill du få uppföljning på ditt ärende?</span>
          </div>
        </form>
        {followUp.current.checked && <StyledError>Fyll i telefonnumer eller e-post</StyledError>}
      </StyledFormWrapper>
    </>
  )
}

export default ContactInfoView
