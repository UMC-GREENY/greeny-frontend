import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//components
import MainLandigPicture from "./Home.main.landing.picture";
import NewItemStore from "../Category/Category.main.store.newItem";
import BestItemStore from "../Category/Category.main.store.bestItem";
import NewItemProduct from "../Category/Category.main.product.newItem";
import BestItemProduct from "../Category/Category.main.product.bestItem";
import BannerSlider from "./Banner/Banner.main";
import { lifeTipCards } from "./Banner/Banner.main.dummy";
export const CategoryWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
`;

export const ContentWrapper = styled.div`
  padding-top: 100px;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-left: 1300px;
  width: 120px;
  cursor: pointer;
  ${(props) =>
    props.type === "store"
      ? `
			top: 1750px;`
      : `
				top: 4079px;
				`}
`;

export const LinkSpan = styled.span`
  font-family: Pretendard;
  color: #666666;
  ${(props) =>
    props.type === "more"
      ? `
				width: 90px;
				height: 24px;
				font-size: 16px;
				line-height: 24px;`
      : `
				width: 24px;
				height: 24px;
				`}
`;

function Home() {
  const navigate = useNavigate();
  const handleNavigateStore = () => {
    navigate(`/store`);
  };

  const handleNavigateProduct = () => {
    navigate(`/product`);
  };
  return (
    <>
      <MainLandigPicture></MainLandigPicture>
      <CategoryWrapper>
        <ContentWrapper>
          <NewItemStore></NewItemStore>
          <LinkWrapper type="store" onClick={handleNavigateStore}>
            <LinkSpan type="more">더 알아보기</LinkSpan>
            <LinkSpan type="c">&gt;</LinkSpan>
          </LinkWrapper>
          <BestItemStore></BestItemStore>
          <NewItemProduct></NewItemProduct>
          <LinkWrapper type="product" onClick={handleNavigateProduct}>
            <LinkSpan type="more">더 알아보기</LinkSpan>
            <LinkSpan type="c">&gt;</LinkSpan>
          </LinkWrapper>
          <BestItemProduct></BestItemProduct>
        </ContentWrapper>
      </CategoryWrapper>
    </>
  );
}

export default Home;
