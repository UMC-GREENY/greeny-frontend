import React, { useEffect, useState } from 'react';
import * as itemS from './styles/Category.main.productCard.styles';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../Home/Like/Likepage.main.clickitem';
function StoreCard(props) {
  const navigate = useNavigate();

  if (!props.data) {
    return null; // 데이터가 없을 때에는 아무것도 렌더링하지 않음
  }

  const handleCardClick = () => {
    // 상세 페이지로 이동
    navigate(`/store/${props.data.id}`);
  };

  const handleImageError = (event) => {
    event.target.src =
      'https://umc-greeny.s3.ap-northeast-2.amazonaws.com/store_basic.png';
  };

  return (
    <>
      <itemS.cardWrap type={props.type}>
        <itemS.ImageWrap>
          <itemS.img
            src={props.data.imageUrl}
            onError={handleImageError}
            type={props.type}
          ></itemS.img>
          <itemS.likebuttonWrap>
            <LikeButton type='store' id={props.data.id}></LikeButton>
          </itemS.likebuttonWrap>
        </itemS.ImageWrap>

        <itemS.descripWrap onClick={handleCardClick}>
          <itemS.text type='brand'>{props.data.name}</itemS.text>
          <itemS.tagWrap>
            <itemS.text type='location'>{props.data.location}</itemS.text>
            <itemS.text type='category'>{props.data.category}</itemS.text>
          </itemS.tagWrap>
        </itemS.descripWrap>
      </itemS.cardWrap>
    </>
  );
}

export default StoreCard;
