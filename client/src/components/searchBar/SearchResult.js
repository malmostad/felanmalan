import React from 'react'

const SearchResult = (searchResult) => {
  console.log('this is the object that we are returning', searchResult)
  return (
    <div className="search-result">
      <ul>
        {searchResult.map((address) => {
          return (
            <li key={address.id}>
              <div>{address.place_name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SearchResult
