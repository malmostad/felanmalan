import {
  StyledSearchResult,
  StyledListButton,
  StyledResultUl,
  StyledPrimaryAddress,
  StyledSecondaryAddress,
} from "../styles/searchbar/Searchbar";

const SearchResult = ({ searchResults, handleClickAddress }) => {
  return (
    <>
      <StyledResultUl>
        {searchResults.map((address) => {
          return (
            <StyledSearchResult
              key={address.id}
              onClick={() => handleClickAddress(address.id)}
            >
              <StyledListButton>
                <StyledPrimaryAddress>
                  {address.text} {address.address}
                </StyledPrimaryAddress>
                <StyledSecondaryAddress>
                  {address.properties.address} {address.context[0].text}{" "}
                  {address.context[1].text}
                </StyledSecondaryAddress>
              </StyledListButton>
            </StyledSearchResult>
          );
        })}
      </StyledResultUl>
    </>
  );
};

export default SearchResult;
