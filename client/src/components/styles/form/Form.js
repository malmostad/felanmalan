import styled from 'styled-components/macro'

export const StyledFormWrapper = styled.div`
  padding: 0px 20px;
  width: 100%;
  margin: 0 auto;
  max-width: 560px;
  flex-grow: 1;
  margin-top: 2rem;
`

export const StyledInput = styled.input`
  border-radius: 0;
  font-size: 18px;
  background: none;
  border: none;
  border-bottom: 1px solid #c8c7cc;
  display: block;
  width: 100%;
  padding: 5px 0 0;
  margin-bottom: 20px;
`

export const InputFormSecond = styled(StyledInput)`
  font-size: 16px;
`
export const StyledError = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 2px;
`
export const DescriptionSpan = styled.span`
  color: red;
  font-size: 21px;
`
export const StyledLabel = styled.label`
  font-size: 16px;
  line-height: 16px;
  color: #000;
  margin-bottom: 5px;
  font-weight: 700;
`

export const StyledTextArea = styled.textarea`
  margin-top: 5px;
  font-size: 16px;
  width: 100%;
  height: 200px;
  padding: 2px 2px 2px 4px;
  resize: none;
  border: 1px solid #888;
  font-family: Tahoma, sans-serif;
`
