import { useState, useContext, useRef } from 'react'
import { fetchSearchResultMapBoxApi } from '../../api/api'
import { MapContext } from '../../contexts/MapContext'
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai'
import {
  StyledLabelSearchBar,
  StyledInputSearchBar,
  StyledSearchResult,
  StyledSearchResultList,
  StyledListButton,
  StyledSearchLabel,
  StyledDivBar,
  StyledResultUl,
} from '../styles/searchbar/Searchbar'

const SearchBar = () => {
  const searchbarRef = useRef('')
  const { dispatch } = useContext(MapContext)
  const [searchResult, setSearchResult] = useState(null)

  const handleInputChange = async (e) => {
    if (e.target.value.length > 1) {
      const response = await fetchSearchResultMapBoxApi(e.target.value)
      setSearchResult(response)
    }
  }
  const clearSearchbar = () => {
    setSearchResult(null)
    searchbarRef.current.value = ''
  }

  const handleClickAddress = (e) => {
    const findAddress = searchResult.find((address) => address.id === e.target.attributes.id.value)
    const payload = {
      latitude: findAddress.center[1],
      longitude: findAddress.center[0],
      zoom: 16,
    }
    // const revert = str1.replace(/\,/g,"");
    const myString = findAddress.place_name.split(' ', 2)
    var newArray = myString.reduce((a, b) => {
      return a + ' ' + b
    })
    searchbarRef.current.value = newArray
    dispatch({ type: 'handleFlyOver' })
    dispatch({ type: 'handleViewportChange', payload })
    setSearchResult(null)
  }

  return (
    <StyledLabelSearchBar>
      <StyledSearchLabel>
        <StyledDivBar>
          <SearchIcon
            size="1.4rem"
            style={{ color: '#757575', marginLeft: '10px', marginTop: '7px' }}
          />
          <StyledInputSearchBar
            ref={searchbarRef}
            onClick={clearSearchbar}
            type="text"
            placeholder="search"
            onChange={handleInputChange}
          />
        </StyledDivBar>
        {searchResult && (
          <StyledSearchResult>
            <StyledResultUl>
              {searchResult.map((address) => {
                return (
                  <StyledSearchResultList key={address.id}>
                    <StyledListButton id={address.id} onClick={handleClickAddress}>
                      {address.place_name}
                    </StyledListButton>
                  </StyledSearchResultList>
                )
              })}
            </StyledResultUl>
          </StyledSearchResult>
        )}
      </StyledSearchLabel>
    </StyledLabelSearchBar>
  )
}

export default SearchBar
