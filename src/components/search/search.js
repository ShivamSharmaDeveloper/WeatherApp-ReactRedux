import React, { useState } from "react";
import "../../styles/search.css";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
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
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
