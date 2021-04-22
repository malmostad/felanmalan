import {
  StyledSearchResult,
  StyledListButton,
  StyledResultUl,
  StyledPrimaryAddress,
  StyledSecondaryAddress,
} from '../styles/searchbar/Searchbar'

const SearchResult = ({ searchResults }) => {
  return (
    <>
      <StyledResultUl>
        {searchResults.map((address) => {
          return (
            <StyledSearchResult key={address.id}>
              <StyledListButton id={address.id}>
                <StyledPrimaryAddress>
                  {address.text} {address.address}
                </StyledPrimaryAddress>
                <StyledSecondaryAddress>
                  {address.properties.address} {address.context[0].text} {address.context[1].text}
                </StyledSecondaryAddress>
              </StyledListButton>
            </StyledSearchResult>
          )
        })}
      </StyledResultUl>
    </>
  )
}

export default SearchResult
