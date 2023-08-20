import React, { useEffect, useState } from "react";
import * as itemS from './styles/Category.main.productCard.styles'

function ProductCard(props) {
   return (
      <>
        <itemS.cardWrap type={props.type}>
            <itemS.img src='/pages/product2.png' type={props.type}></itemS.img>
            <itemS.descripWrap>
               <itemS.text type="brand">Brand</itemS.text>
               <itemS.text type="name">Product Name</itemS.text>
               <itemS.text type="price">00,000</itemS.text>
            </itemS.descripWrap>
        </itemS.cardWrap>
      </>
   );
}

export default ProductCard;