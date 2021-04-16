import { useState, useContext, useRef } from 'react'
import { fetchSearchResultMapBoxApi } from '../../api/api'
import { MapContext } from '../../contexts/MapContext'
import './style.css'

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
    dispatch({ type: 'handleFlyOver' })
    dispatch({ type: 'handleViewportChange', payload })
    setSearchResult(null)
  }

  return (
    <div className="searchbar">
      <input
        onClick={clearSearchbar}
        type="text"
        placeholder="search new address"
        onChange={handleInputChange}
        ref={searchbarRef}
      />
      {searchResult && (
        <div className="search-result">
          <ul>
            {searchResult.map((address) => {
              return (
                <li key={address.id}>
                  <button id={address.id} className="style-button" onClick={handleClickAddress}>
                    {address.place_name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
