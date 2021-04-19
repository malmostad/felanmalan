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
  StyledListAddress,
} from '../styles/searchbar/Searchbar'

const SearchBar = (address) => {
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

    const setNumberToAdress = findAddress.address
    const setFullAddress = findAddress.text

    if (findAddress.address === undefined) {
      searchbarRef.current.value = setFullAddress
    } else {
      searchbarRef.current.value = setFullAddress + ' ' + setNumberToAdress
    }

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
            defaultValue={address.address}
          />
        </StyledDivBar>
        {searchResult && (
          <StyledSearchResultList>
            <StyledResultUl>
              {searchResult.map((address) => {
                return (
                  <StyledSearchResult key={address.id}>
                    <StyledListButton id={address.id} onClick={handleClickAddress}>
                      <div>{address.properties.address}</div>
                      {address.place_name}
                    </StyledListButton>
                  </StyledSearchResult>
                )
              })}
            </StyledResultUl>
          </StyledSearchResultList>
        )}
      </StyledSearchLabel>
    </StyledLabelSearchBar>
  )
}

export default SearchBar
