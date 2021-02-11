import React, { useState } from 'react'
import { useReport } from '../.././contexts/ReportContext'
import { StyledError, StyledFormWrapper } from '../../components/styles/form/Form'
import { StyledInput } from '../../components/styles/form/Form'
import { InputFormSecond } from '../../components/styles/form/Form'

/*
const initialState = {
  name: '',
  email: '',
  phone: '',
}
*/

const ContactInfoView = () => {
  const { report, setReport } = useReport()
  const [error, setError] = useState('')

  const handleSubmit = (e) => {}

  const handleInput = (e) => {
    const inputName = e.currentTarget.name
    const value = e.currentTarget.value

    setReport((prev) => ({ ...prev, [inputName]: value }))
  }

  return (
    <>
      <StyledFormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor>
              Namn
              <StyledInput
                placeholder="Skriv ditt namn"
                type="name"
                value={report.name}
                onChange={handleInput}
              />
            </label>
          </div>
          <div>
            <label htmlFor>
              E-post eller telefonnummer
              <InputFormSecond
                placeholder="Skriv din e-postadress eller ditt telefonnumer"
                name="email"
                type="email-or-phone"
                value={report.email}
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
              placeholder="asdasdasdas"
            />
            <span> textext text text text psumi</span>
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
