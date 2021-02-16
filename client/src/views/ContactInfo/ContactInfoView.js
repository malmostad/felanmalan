import React, { useState, useEffect, useReducer } from 'react'
import { useReport } from '../.././contexts/ReportContext'
import { StyledError, StyledFormWrapper } from '../../components/styles/form/Form'
import { StyledInput } from '../../components/styles/form/Form'
import { InputFormSecond } from '../../components/styles/form/Form'
import { useUpdate } from '../.././contexts/UpdateContext'
import { store } from '../.././contexts/ReportContext'

const ContactInfoView = () => {
  const { report, setReport, setContact, setFollowUp } = useReport()
  const { setDisabledNext } = useUpdate()
  const [error, setError] = useState('')

  const handleInput = (e) => {
    const value = e.target.value
    setContact((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  /*
  const handleInput = (e) => {
    const value = e.target.value
    setReport((prev) => ({
      ...prev,
      info: {
        contact: {
          [e.target.name]: e.target.value,
        },
      },
    }))
  }
  */

  const handleClick = (e) => {}

  const handleSubmit = () => {}

  useEffect(() => {
    console.log(report.info.contact)
    if (report.info.contact.email && report.info.contact.phone) {
      setDisabledNext(false)
      return
    } else setDisabledNext(true)
  }, [report])

  return (
    <>
      <StyledFormWrapper>
        <form id="my-form" onSubmit={handleSubmit()}>
          <div>
            <label htmlFor>
              Namn
              <StyledInput
                placeholder="Skriv ditt namn"
                type="name"
                name="name"
                value={report.info.contact.name}
                onChange={handleInput}
              />
            </label>
          </div>
          <div>
            <label htmlFor>
              E-post
              <InputFormSecond
                placeholder="Skriv din email"
                type="email"
                name="email"
                value={report.info.contact.email}
                onChange={handleInput}
              />
            </label>
          </div>
          <div>{error}</div>

          <div>
            <label htmlFor>
              Telefonnummer
              <InputFormSecond
                placeholder="Skriv ditt telefonnumer"
                type="phone"
                name="phone"
                value={report.info.contact.phone}
                onChange={handleInput}
              />
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              name="checkbox"
              checked={report.followUp}
              onClick={handleClick}
            />
            <span> Vill du få uppföljning</span>
          </div>
        </form>
        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
      </StyledFormWrapper>
    </>
  )
}

export default ContactInfoView
