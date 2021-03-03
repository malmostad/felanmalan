import React, { useState, useRef, useEffect } from 'react'
import { StyledLabelSearchBar, StyledInputSearchBar } from '../styles/searchbar/Searchbar'
import { StyledSearchBarContainer } from '../styles/containers/Containers'
import { BsSearch as SearchIcon, BsX as CloseIcon } from 'react-icons/bs'

const SearchBar = () => {
  const searchFieldRef = useRef('')
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const [searchFieldValue, setSearchFieldValue] = useState('')

  useEffect(() => {
    setShowCloseIcon(!!searchFieldValue)
  }, [searchFieldValue])

  const handleClearSearch = () => {
    setSearchFieldValue('')
  }
  const handleSearchFieldOnChange = () => {
    setSearchFieldValue(searchFieldRef.current.value)
  }

  return (
    <>
      <StyledSearchBarContainer>
        <StyledLabelSearchBar>
          <SearchIcon size="1rem" style={{ margin: '10px' }} />
          <StyledInputSearchBar
            onChange={handleSearchFieldOnChange}
            value={searchFieldValue}
            placeholder="search"
            type="text"
            ref={searchFieldRef}
          />
          {showCloseIcon && (
            <CloseIcon
              onClick={handleClearSearch}
              size="1.4rem"
              style={{ cursor: 'pointer', marginRight: '5px' }}
            />
          )}
        </StyledLabelSearchBar>
      </StyledSearchBarContainer>
    </>
  )
}

export default SearchBar
