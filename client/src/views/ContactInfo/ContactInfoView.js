import React, { useState, useEffect } from 'react'
import { useReport } from '../.././contexts/ReportContext'
import { StyledError, StyledFormWrapper } from '../../components/styles/form/Form'
import { StyledInput } from '../../components/styles/form/Form'
import { InputFormSecond } from '../../components/styles/form/Form'
import { useUpdate } from '../.././contexts/UpdateContext'

const ContactInfoView = () => {
  const { report, setReport, setContact } = useReport()
  const { setDisabledNext } = useUpdate()
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const test = regex.test(report.email)
    console.log(test)
  }

  const handleInput = (e) => {
    const value = e.target.value
    setContact((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  useEffect(() => {
    console.log(report.info.contact.email)
    if (report.info.contact.email) {
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
                placeholder="Skriv din e-postadress eller ditt telefonnumer"
                type="email"
                name="email"
                value={report.info.contact.email}
                onChange={handleInput}
              />
            </label>
          </div>

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
              value="followUp"
              checked={report.followUp}
              onChange={handleInput}
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
