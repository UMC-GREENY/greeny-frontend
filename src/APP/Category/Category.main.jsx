import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MainLandigPicture from "../Home/Home.main.landing.picture";
import NewItem from "./Category.main.newItem";
import BestItem from "./Category.main.bestItem";
import AllItem from "./Category.main.allItem";

export const CategoryWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;

    background-color: white;
`

export const ContentWrapper = styled.div`
    padding-top: 100px;
    width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
`

function Category() {

   return (
      <>
        <MainLandigPicture></MainLandigPicture>
        <CategoryWrapper>
            <ContentWrapper>
                <NewItem></NewItem>
                <BestItem></BestItem>
                <AllItem></AllItem>
            </ContentWrapper>
        </CategoryWrapper>
      </>
   );
}

export default Category;