import styled from 'styled-components/macro'

export const StyledFormWrapper = styled.div`
  background: #fff;
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
export const InputFormSecond = styled(StyledInput)`
  font-size: 16px;
`
export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`
