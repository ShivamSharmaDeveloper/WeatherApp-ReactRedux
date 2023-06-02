import React, { useState } from "react";
import "../../styles/search.css";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value)
  };
  
  const handleSearch = async(e) => {
    e.preventDefault();
    // console.log(search)
    props.onSearch(search)
  };

  return (
    <div className="row height d-flex justify-content-center align-items-center">
      <div className="col-md-8">
        <div className="search">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter Your city!"
            value={search}
            onChange={handleOnChange}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
