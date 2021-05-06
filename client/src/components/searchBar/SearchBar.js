import { useState, useContext, useRef, useEffect } from 'react'
import { fetchSearchResultMapBoxApi } from '../../api/api'
import { debounce } from 'lodash'
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai'
import {
  StyledLabelSearchBar,
  StyledInputSearchBar,
  StyledSearchResultList,
  StyledSearchLabel,
  StyledDivBar,
  StyledNoResult,
} from '../styles/searchbar/Searchbar'
import SearchResult from './SearchResult'

const SearchBar = ({ address, renderPrefix, onResultSelect }) => {
  const searchbarRef = useRef('')
  const [searchResults, setSearchResults] = useState([])
  const [noResult, setNoResult] = useState(false)

  useEffect(() => {
    if (address && renderPrefix) {
      searchbarRef.current.value = `I närheten av: ${address}`
    } else {
      searchbarRef.current.value = `${address}`
    }
  }, [address])

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
    const result = searchResults.find((address) => address.id === id)
    const payload = {
      latitude: result.center[1],
      longitude: result.center[0],
      address: [result.text, result.address].join(' '),
      zoom: 16,
    }
    onResultSelect(payload)
    setSearchResults([])
  }

  const onChange = debounce((text) => handleInputChange(text), 800)

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
            onChange={onChange}
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
