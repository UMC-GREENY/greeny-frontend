import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles"

import ProductCard from "./Category.main.productCard";

function BestItem() {
   return (
      <>
         <itemS.TitleWrap type='best'>
            <itemS.overline></itemS.overline>
            <itemS.TitleText>PRODUCTS BEST</itemS.TitleText>
            <itemS.overline></itemS.overline>
         </itemS.TitleWrap>
         <itemS.ItemsWrapper type='best'>
            <ProductCard type='best'></ProductCard>
            <ProductCard type='best'></ProductCard>
            <ProductCard type='best'></ProductCard>
            <ProductCard type='best'></ProductCard>
            <ProductCard type='best'></ProductCard>
            <ProductCard type='best'></ProductCard>
            <ProductCard type='best'></ProductCard>
            <ProductCard type='best'></ProductCard>
         </itemS.ItemsWrapper>
         <itemS.overline type='long'></itemS.overline>
      </>
   );
}

export default BestItem;