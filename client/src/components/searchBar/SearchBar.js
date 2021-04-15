import { useState } from 'react'
import { fetchSearchResultMapBoxApi } from '../../api/api'
import './style.css'

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState(null)

  const handleInputChange = async (e) => {
    if (e.target.value.length > 3) {
      const response = await fetchSearchResultMapBoxApi(e.target.value)
      console.log('this is our response', response)
      setSearchResult(response)
    }
  }
  const clearSearchbar = () => {
    setSearchResult(null)
  }

  const handleClick = (e) => {
    const coordinates = e.target.attributes.coordinates.nodeValue
    console.log(coordinates)
  }

  return (
    <div className="searchbar">
      <input
        onClick={clearSearchbar}
        type="text"
        placeholder="search new address"
        onChange={handleInputChange}
      />
      {searchResult && (
        <div className="search-result">
          <ul>
            {searchResult.map((address) => {
              return (
                <li key={address.id}>
                  <button
                    className="style-button"
                    coordinates={address.center}
                    onClick={handleClick}>
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
