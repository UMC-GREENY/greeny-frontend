import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as mystyles from './Styled/Mypage.styles';
import { FaStar } from 'react-icons/fa';
import UserContent from './Mypage.Usercontent';
import LikeClick from '../Like/Like.main.clickitem';
import UserReview from './Mypage.UserReview';

function Mypage() {
  const navigate = useNavigate();
  const handleMore = (type) => {
    navigate('/post', { state: { type } });
  };
  const usercontentinfo = [
    {
      title: '글제목1',
      email: 'idd**@gmail.com',
      date: '2023.00.00',
    },
    {
      title: '글제목2',
      email: 'idd**@gmail.com',
      date: '2024.00.00',
    },
    {
      title: '글제목3',
      email: 'idd**@gmail.com',
      date: '2025.00.00',
    },
    {
      title: '글제목4',
      email: 'idd**@gmail.com',
      date: '2026.00.00',
    },
  ];
  const myreviewinfo = [
    {
      grade: 3,
      content: '리뷰 후기 내용 미리보기',
      email: 'idd**@gmail.com',
      date: '2023.00.00',
    },
    {
      grade: 4,
      content: '리뷰 후기 내용 미리미리미리미리미리보기',
      email: 'idd**@gmail.com',
      date: '2024.00.00',
    },
    {
      grade: 5,
      content: '리뷰리뷰리뷰리뷰 후기 내용 미리보기',
      email: 'idd**@gmail.com',
      date: '2025.00.00',
    },
  ];
  return (
    <mystyles.Div>
      <mystyles.Wrapper>
        <mystyles.Title style={{ fontFamily: 'Merriweather' }}>
          My Page
        </mystyles.Title>
        <UserContent></UserContent>
        <LikeClick type='store' id={1} />
        <LikeClick type='product' id={1} />
        <UserReview></UserReview>
      </mystyles.Wrapper>
    </mystyles.Div>
  );
}

export default Mypage;
