import styled from 'styled-components/macro'

export const StyledLabelSearchBar = styled.div`
  font-size: 15px;
  line-height: 20px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  z-index: 98;
`
export const StyledSearchLabel = styled.div`
  margin: 10px 16px;
  box-shadow: 0 2px 7px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 10%);
  line-height: 24px;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: relative;
  background-color: #fff;
  min-width: 240px;
  z-index: 1;
  border: none;
  transition: width 0.25s, min-width 0.25s;
  width: 560px;
  margin-top: 20px;
  input:focus {
    outline: none;
  }
`
export const StyledDivBar = styled.div`
  display: flex;
`

export const StyledInputSearchBar = styled.input`
  height: 35px;
  width: 500px;
  margin-left: 7px;
  margin-right: auto;
  left: 0;
  right: 0;
  border: none;
  font-size: 18px;
`
export const StyledSearchResult = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
`
export const StyledResultUl = styled.ul`
  :focus {
    outline: none;
  }
`

export const StyledSearchResultList = styled.li`
  border-top: 1px solid #e4e4e4;
`

export const StyledListButton = styled.button`
  line-height: 66px;
  width: 100%;
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 10px 0;
  text-align: left;
  input:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(192, 192, 192);
  }
`
