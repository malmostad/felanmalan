import React, { useState, useRef, useEffect, useContext } from 'react'
import { StyledLabelSearchBar } from '../styles/searchbar/Searchbar'
import { StyledSearchBarContainer } from '../styles/containers/Containers'
import { BsSearch as SearchIcon, BsX as CloseIcon } from 'react-icons/bs'
import Geocoder from 'react-mapbox-gl-geocoder'
import '../../components/mapBox/MapBox.css'
import { MapContext } from '../../contexts/MapContext'

const placeholder = (props) => <input {...props} placeholder="Search" />

const SearchBar = () => {
  const searchFieldRef = useRef('')
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const [searchFieldValue, setSearchFieldValue] = useState('')
  const { state, dispatch } = useContext(MapContext)
  const { viewport, maxBounds } = state

  useEffect(() => {
    setShowCloseIcon(!!searchFieldValue)
  }, [searchFieldValue])

  const handleClearSearch = () => {
    setSearchFieldValue('')
  }
  const handleSearchFieldOnChange = () => {
    setSearchFieldValue(searchFieldRef.current.value)
  }
  const handelViewPortChange = (payload) => {
    dispatch({ type: 'handelViewportChange', payload })
  }

  return (
    <>
      <StyledSearchBarContainer>
        <StyledLabelSearchBar>
          <SearchIcon size="1rem" style={{ margin: '10px' }} />
          <Geocoder
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onSelected={(payload) => handelViewPortChange(payload)}
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
