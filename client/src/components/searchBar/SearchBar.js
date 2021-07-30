import { useState, useContext, useRef, useEffect } from "react";
import { fetchSearchResultMapBoxApi } from "../../api/api";
import { debounce } from "lodash";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import {
  StyledLabelSearchBar,
  StyledInputSearchBar,
  StyledSearchResultList,
  StyledSearchLabel,
  StyledDivBar,
  StyledNoResult,
} from "../styles/searchbar/Searchbar";
import SearchResult from "./SearchResult";

const SearchBar = ({ address, renderPrefix, onResultSelect, maxBounds }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (address && renderPrefix) {
      setValue(`I närheten av: ${address}`);
    } else {
      setValue(address);
    }
  }, [address]);

  const updateSearchResults = async (e) => {
    if (e.target.value.length >= 3) {
      const response = await fetchSearchResultMapBoxApi(
        e.target.value,
        maxBounds
      );

      if (response.length === 0) {
        setNoResult(true);
      }
      if (response.length >= 1) {
        setNoResult(false);
      }
      setSearchResults(response);
    }
    if (value === 0) {
      setSearchResults([]);
      setNoResult(false);
    }
  };
  const updateSearchResultsDebounced = debounce(
    (e) => updateSearchResults(e),
    800
  );
  const onChange = (e) => {
    setValue(e.target.value);
    updateSearchResultsDebounced(e);
  };
  const clearSearchbar = () => {
    setSearchResults([]);
    setValue("");
    setNoResult(false);
  };

  const handleClickAddress = (id) => {
    const result = searchResults.find((address) => address.id === id);
    const payload = {
      latitude: result.center[1],
      longitude: result.center[0],
      address: [result.text, result.address].join(" "),
      zoom: 16,
    };
    onResultSelect(payload);
    setSearchResults([]);
  };

  return (
    <StyledLabelSearchBar>
      <StyledSearchLabel>
        <StyledDivBar>
          <SearchIcon className="search-icon" />

          <StyledInputSearchBar
            onClick={clearSearchbar}
            type="text"
            value={value}
            placeholder="Sök efter en adress"
            onChange={onChange}
          />
        </StyledDivBar>
        {noResult ? (
          <StyledNoResult>Inga resultat hittade</StyledNoResult>
        ) : (
          <StyledSearchResultList>
            <SearchResult
              searchResults={searchResults}
              handleClickAddress={handleClickAddress}
            />
          </StyledSearchResultList>
        )}
      </StyledSearchLabel>
    </StyledLabelSearchBar>
  );
};

export default SearchBar;
