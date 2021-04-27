import {
  StyledSearchResult,
  StyledListButton,
  StyledResultUl,
  StyledPrimaryAddress,
  StyledSecondaryAddress,
} from '../styles/searchbar/Searchbar'

const SearchResult = ({ searchResults, handleClickAddress }) => {
  return (
    <>
      <StyledResultUl>
        {searchResults.map((address) => {
          return (
            <StyledSearchResult key={address.id} onClick={handleClickAddress}>
              <StyledListButton id={address.id}>
                {address.text} {address.address}
                <br />
                {address.properties.address} {address.context[0].text} {address.context[1].text}
              </StyledListButton>
            </StyledSearchResult>
          )
        })}
      </StyledResultUl>
    </>
  )
}

export default SearchResult
