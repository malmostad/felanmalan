import styled from 'styled-components/macro'

export const StyledFormWrapper = styled.div`
  padding: 40px 20px;
  width: 100%;
  margin: 0 auto;
  max-width: 560px;
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

export const StyledErrorInput = styled.div`
  border: 1px solid red;
`

export const InputFormSecond = styled(StyledInput)`
  font-size: 16px;
`
export const StyledError = styled.div`
  font-weight: 700;
  margin: 30px 0 0px 0px;
`
