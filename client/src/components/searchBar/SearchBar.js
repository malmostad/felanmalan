import { useState, useContext, useRef, useEffect, useCallback } from 'react'
import { fetchSearchResultMapBoxApi } from '../../api/api'
import { MapContext } from '../../contexts/MapContext'
import '../mapBox/MapBox.css'
import { debounce } from 'lodash'
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
  StyledPrimaryAddress,
  StyledSecondaryAddress,
  StyledNoResult,
} from '../styles/searchbar/Searchbar'

const SearchBar = (address) => {
  const searchbarRef = useRef('')
  const { dispatch } = useContext(MapContext)
  const [searchResults, setSearchResults] = useState([])
  const [noResult, setNoResult] = useState(false)

  useEffect(() => {
    if (address.address) {
      searchbarRef.current.value = `I närheten av: ${address.address}`
    }
  }, [address.address])

  const handleInputChange = async (e) => {
    setNoResult(true)
    if (e.target.value.length > 1) {
      const response = await fetchSearchResultMapBoxApi(e.target.value)

      if (response.length === 0) {
        setNoResult(true)
      }
      if (response.length > 1) {
        setNoResult(false)
      }
      setSearchResults(response)
    }
    if (searchbarRef.current.value.length === 0) {
      setSearchResults([])
      setNoResult(false)
    }
  }

  const clearSearchbar = () => {
    setSearchResults([])
    searchbarRef.current.value = ''
    setNoResult(false)
  }

  const handleClickAddress = (e) => {
    const findAddress = searchResults.find(
      (address) => address.id || address.place_name === e.target.attributes.id.value
    )
    const payload = {
      latitude: findAddress.center[1],
      longitude: findAddress.center[0],
      zoom: 16,
    }
    if (findAddress.address === undefined) {
      searchbarRef.current.value = findAddress.text
    } else {
      searchbarRef.current.value = findAddress.text + ' ' + findAddress.address
    }
    dispatch({ type: 'handleFlyOver' })
    dispatch({ type: 'handleViewportChange', payload })
    setSearchResults([])
  }

  const deb = useCallback(
    debounce((text) => handleInputChange(text), 800),
    []
  )
  const handleText = (text) => {
    deb(text)
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
            placeholder="Search"
            onChange={handleText}
          />
        </StyledDivBar>
        {noResult ? (
          <StyledNoResult>No result found</StyledNoResult>
        ) : (
          <StyledSearchResultList>
            <StyledResultUl>
              {searchResults.map((address) => {
                return (
                  <StyledSearchResult key={address.id}>
                    <StyledListButton id={address.id} onClick={handleClickAddress}>
                      <StyledPrimaryAddress>
                        {address.text} {address.address}
                      </StyledPrimaryAddress>
                      <StyledSecondaryAddress>
                        {address.properties.address} {address.context[0].text}{' '}
                        {address.context[1].text},
                      </StyledSecondaryAddress>
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