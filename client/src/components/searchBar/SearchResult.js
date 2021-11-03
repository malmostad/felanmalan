import {
  StyledSearchResult,
  StyledListButton,
  StyledResultUl,
  StyledPrimaryAddress,
  StyledSecondaryAddress,
} from "../styles/searchbar/Searchbar";

const normalize = (place) => {
  const postalCode = place.context.find((item) => {
    return item.id.includes("postcode");
  }).text;
  const city = place.context.find((item) => {
    return item.id.includes("place");
  }).text;
  const address = place.place_type.includes("poi")
    ? place.properties.address
    : `${place.text} ${place.address || " "}`;
  const name = place.text;

  const primary = place.place_type.includes("poi") ? name : address;
  const secondary = place.place_type.includes("poi")
    ? `${address}, ${postalCode} ${city}`
    : `${postalCode} ${city}`;

  return { primary, secondary };
};
const SearchResult = ({ searchResults, handleClickAddress }) => {
  return (
    <>
      <StyledResultUl>
        {searchResults.map((place) => {
          const { primary, secondary } = normalize(place);
          return (
            <StyledSearchResult
              key={place.id}
              onClick={() => handleClickAddress(place.id)}
            >
              <StyledListButton>
                <StyledPrimaryAddress>{primary}</StyledPrimaryAddress>
                <StyledSecondaryAddress>{secondary}</StyledSecondaryAddress>
              </StyledListButton>
            </StyledSearchResult>
          );
        })}
      </StyledResultUl>
    </>
  );
};

export default SearchResult;
