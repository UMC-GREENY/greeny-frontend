import { useState } from "react";
import SearchProduct from "./Search.product";
import SearchStore from "./Search.store";
import { useLocation } from "react-router-dom";
import SearchCommunity from "./Search.community";

function Search() {
  const content = useLocation();

  return (
    <>
      <h2>{content.state}검색결과입니다.</h2>
      <SearchProduct prop={content.state}></SearchProduct>
      <SearchStore prop={content.state}></SearchStore>
      <SearchCommunity prop={content.state}></SearchCommunity>
    </>
  );
}
export default Search;
