import styled from "styled-components/macro";

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
`;
export const StyledSearchLabel = styled.div`
  margin: 10px 16px;
  box-shadow: 0 2px 7px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 10%);
  line-height: 24px;
  font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, sans-serif;
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
`;
export const StyledDivBar = styled.div`
  display: flex;
`;

export const StyledInputSearchBar = styled.input`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.75);
  height: 35px;
  width: 500px;
  margin-left: 13px;
  margin-right: auto;
  left: 0;
  right: 0;
  border: none;
  @media (max-width: 560px) {
    font-size: 1rem;
    height: 50px;
  }
`;
export const StyledSearchResultList = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
`;
export const StyledResultUl = styled.ul`
  list-style: none;
  :focus {
    outline: none;
  }
`;

export const StyledSearchResult = styled.li`
  border-top: 1px solid #e4e4e4;
`;

export const StyledListButton = styled.button`
  padding: 20px 15px 20px 20px;
  border-bottom: 1px solid #c8c7cc;
  width: 100%;
  background-color: white;
  border: none;
  cursor: pointer;
  text-align: left;
  input:focus {
    outline: none;
  }
  &:hover {
    color: #404040;
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

export const StyledPrimaryAddress = styled.span`
  font-size: 0.9rem;
  color: #12181f;
  font-weight: 400;
  display: block;
`;
export const StyledSecondaryAddress = styled.span`
  font-size: 0.8rem;
  color: #8a8a8d;
`;
export const StyledNoResult = styled(StyledSecondaryAddress)`
  border-top: 1px solid #e4e4e4;
  font-size: 1rem;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
