import { useState, useContext, useRef, useEffect, useCallback } from 'react'
import { fetchSearchResultMapBoxApi } from '../../api/api'
import { MapContext } from '../../contexts/MapContext'
import { debounce } from 'lodash'
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai'
import '../mapBox/MapBox.css'
import {
  StyledLabelSearchBar,
  StyledInputSearchBar,
  StyledSearchResultList,
  StyledSearchLabel,
  StyledDivBar,
  StyledNoResult,
} from '../styles/searchbar/Searchbar'
import SearchResult from './SearchResult'

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
    if (e.target.value.length >= 1) {
      const response = await fetchSearchResultMapBoxApi(e.target.value)

      if (response.length === 0) {
        setNoResult(true)
      }
      if (response.length >= 1) {
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

  const handleClickAddress = (id) => {
    const findAddress = searchResults.find((address) => address.id === id)
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
    dispatch({
      type: 'handleViewportChange',
      payload: { ...payload, transitionDuration: 2300 },
    })
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
          <SearchIcon className="search-icon" />

          <StyledInputSearchBar
            ref={searchbarRef}
            onClick={clearSearchbar}
            type="text"
            placeholder="Sök efter en adress"
            onChange={handleText}
          />
        </StyledDivBar>
        {noResult ? (
          <StyledNoResult>Inga resultat hittade</StyledNoResult>
        ) : (
          <StyledSearchResultList>
            <SearchResult searchResults={searchResults} handleClickAddress={handleClickAddress} />
          </StyledSearchResultList>
        )}
      </StyledSearchLabel>
    </StyledLabelSearchBar>
  )
}

export default SearchBar
