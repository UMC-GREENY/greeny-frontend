import React, { useEffect, useState } from 'react';
import * as itemS from './styles/Category.main.productCard.styles';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../Home/Like/Likepage.main.clickitem';
function ProductCard(props) {
  const navigate = useNavigate();

  if (!props.data) {
    return null; // 데이터가 없을 때에는 아무것도 렌더링하지 않음
  }

  const handleCardClick = () => {
    // 상세 페이지로 이동
    navigate(`/product/${props.data.id}`);
    console.log(props.data);
  };

  return (
    <>
      <itemS.cardWrap type={props.type}>
        <itemS.ImageWrap>
          <itemS.img src={props.data.imageUrl} type={props.type}></itemS.img>
          <itemS.likebuttonWrap>
            <LikeButton type='product' id={props.data.id}></LikeButton>
          </itemS.likebuttonWrap>
        </itemS.ImageWrap>
        <itemS.descripWrap onClick={handleCardClick}>
          <itemS.text type='brand'>{props.data.storeName}</itemS.text>
          <itemS.text type='name'>{props.data.productName}</itemS.text>
          <itemS.text type='price'>₩ {props.data.price}</itemS.text>
        </itemS.descripWrap>
      </itemS.cardWrap>
    </>
  );
}

export default ProductCard;
