import { useState } from "react";
import SearchProduct from "./Search.product";
import SearchStore from "./Search.store";
import { useLocation } from "react-router-dom";
import SearchCommunity from "./Search.community";
import { styled } from "styled-components";

const H2 = styled.h2`
  color: var(--green-deep, #1a2807);
  text-align: center;
  /* Headline/Headline */
  font-family: "Pretendard";
  font-size: 24px;
  font-style: normal;
  margin-top: 94px;
  font-weight: 400;
  line-height: 36px; /* 150% */
  font-variant: all-small-caps;
`;
function Search() {
  const content = useLocation();

  return (
    <>
      <H2>{content.state} 검색결과입니다.</H2>
      <SearchProduct prop={content.state}></SearchProduct>
      <SearchStore prop={content.state}></SearchStore>
      <SearchCommunity prop={content.state}></SearchCommunity>
    </>
  );
}
export default Search;
