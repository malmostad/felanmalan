import React from 'react'
import { StyledLabelSearchBar, StyledInputSearchBar } from '../styles/searchbar/Searchbar'
import { StyledSearchBarContainer } from '../styles/containers/Containers'
import { BsSearch as SearchIcon } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <>
      <StyledSearchBarContainer>
        <StyledLabelSearchBar>
          <SearchIcon size="1rem" style={{ margin: '10px' }} />
          <StyledInputSearchBar placeholder="search" type="text" />
        </StyledLabelSearchBar>
      </StyledSearchBarContainer>
    </>
  )
}

export default SearchBar
