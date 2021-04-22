import { StyledPrimaryAddress, StyledSecondaryAddress } from '../styles/searchbar/Searchbar'

const SearchResult = ({ address }) => {
  return (
    <>
      <StyledPrimaryAddress>
        {address.text} {address.address}
      </StyledPrimaryAddress>
      <StyledSecondaryAddress>
        {address.properties.address} {address.context[0].text} {address.context[1].text}
      </StyledSecondaryAddress>
    </>
  )
}

export default SearchResult
