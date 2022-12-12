import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import BrandComponent from "../../components/filter/Brands";

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-between flex-column flex-md-row ">
      {/* <ProductType /> */}
      <BrandComponent />

      {/* <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      /> */}
    </div>
  );
};

export default SearchBar;
