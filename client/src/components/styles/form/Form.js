import styled from 'styled-components/macro'
import checkIcon from '../../../assets/img/checked.png'

export const StyledFormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 560px;
  flex-grow: 1;
  margin-top: 2rem;
  @media (max-height: 568px) {
    margin-top: 10px;
  }
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

export const StyledCheckBox = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 10px;
  border: 1px solid #c4c4c4;
  background: #fff;
  border-radius: 0;
  width: 30px;
  height: 30px;
  padding: 0;
  position: relative;
  :checked {
    background-image: url(${checkIcon});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 0 white;
  }
`
export const StyledFollowUpBox = styled.div`
  display: flex;
`

export const StyledError = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: red;
  margin-bottom: 2px;
  font-family: MyriadPro, Open sans, Verdana;
  font-weight: lighter;
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
  @media (max-height: 580px) {
    height: 160px;
  }
`

export const StyledFormDescription = styled.form`
  padding: 0px 20px;
`
