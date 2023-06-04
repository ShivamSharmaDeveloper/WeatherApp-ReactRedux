import React, { useState } from "react";
import "../../styles/search.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value)
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // console.log(search)
    props.onSearch(search);
  };

  return (
    <div className="search-container">
      <div className="search">
        <i className="fa fa-search"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Please enter Your city!"
          value={search}
          onChange={handleOnChange}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
