import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles"

import ProductCard from "./Category.main.productCard";

function NewItem() {
   return (
      <>
         <itemS.TitleWrap>
            <itemS.overline></itemS.overline>
            <itemS.TitleText>PRODUCTS NEW</itemS.TitleText>
            <itemS.overline></itemS.overline>
         </itemS.TitleWrap>
         <itemS.ItemsWrapper>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
         </itemS.ItemsWrapper>
      </>
   );
}

export default NewItem;