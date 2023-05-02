import React, { useState } from "react";
import { search_api } from "../config";
import Movie from "../Components/Movie";
import { HiSearch } from "react-icons/hi";

//Search Page

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(search_api + `${searchQuery}`) 
      .then((response) => response.json())
      .then((data) =>{ setSearchResults(data.results)})
      .catch((error) => console.error(error));
  }; 

  return (
    <div className="search-page">
      <form onSubmit={handleFormSubmit} className="search">
        <label htmlFor="searchQuery"></label>
        <input
          type="text"
          id="searchQuery"
          value={searchQuery}
          className="movie-input"
          placeholder="Search"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search-btn">
          <HiSearch className="search-icon" />
        </button>
      </form>
      {searchResults.length > 0 && <Movie movies={searchResults} />}
    </div>
  );
}

export default Search;
