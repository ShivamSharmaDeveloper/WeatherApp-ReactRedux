import React, { useState, useContext } from "react";
import "../../styles/search.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import weatherContext from "../../context/weather/weatherContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setLocation } = useContext(weatherContext);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value)
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // setWeatherData(null); // Reset the weatherData when a new location is searched
    setLocation(search);
    setSearch("");
  };

  return (
    <div>
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
