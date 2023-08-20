import React, { useEffect, useState } from "react";
import * as itemS from './styles/Category.main.productCard.styles'
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
   const navigate = useNavigate();
   
   if (!props.data) {
      return null; // 데이터가 없을 때에는 아무것도 렌더링하지 않음
   }

   const handleCardClick = () => {
      // 상세 페이지로 이동
      navigate(`/product/${props.data.id}`);
   };

   return (
      <>
         <itemS.cardWrap type={props.type} onClick={handleCardClick}>
            <itemS.img src={props.data.imageUrl} type={props.type}></itemS.img>
            <itemS.descripWrap>
               <itemS.text type="brand">{props.data.storeName}</itemS.text>
               <itemS.text type="name">{props.data.productName}</itemS.text>
               <itemS.text type="price">₩ {props.data.price}</itemS.text>
            </itemS.descripWrap>
         </itemS.cardWrap>
      </>
   );
}

export default ProductCard;