import React, { useState, useRef, useEffect } from 'react'
import { StyledLabelSearchBar, StyledInputSearchBar } from '../styles/searchbar/Searchbar'
import { StyledSearchBarContainer } from '../styles/containers/Containers'
import { BsSearch as SearchIcon, BsX as CloseIcon } from 'react-icons/bs'
import Geocoder from 'react-mapbox-gl-geocoder'
import '../../components/mapBox/MapBox.css'

import { useMap } from '../../contexts/MapContext'

const placeholder = (props) => <input {...props} placeholder="Search" />

const SearchBar = () => {
  const searchFieldRef = useRef('')
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const [searchFieldValue, setSearchFieldValue] = useState('')
  const { viewport, setViewport, maxBounds } = useMap()

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
          <Geocoder
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onSelected={(viewport) => setViewport(viewport)}
            viewport={viewport}
            hideOnSelect={true}
            proximity={viewport}
            queryParams={{ bbox: maxBounds, proximity: viewport }}
            inputComponent={placeholder}
            onChange={handleSearchFieldOnChange}
            value={searchFieldValue}
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
