import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import request from '../../Api/request'; // request 모듈을 가져온다고 가정
import { ACCESS_TOKEN } from '../../Api/request';
import { refreshToken } from '../../Api/request';
import axios from 'axios';
const LikeButton = ({ type, id }) => {
  const [isLike, setIsLike] = useState(false);

  const handleToggleLike = async () => {
    try {
      await request.post('/api/bookmarks?type=store&id=1', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
        },
      });

      setIsLike((prevState) => !prevState);
      console.log('찜하기 완료');
    } catch (error) {
      console.error('찜하기 실패', error);
      console.log(ACCESS_TOKEN);
    }
  };

  const buttonStyle = {
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <FaHeart
      onClick={handleToggleLike}
      color={isLike ? 'red' : 'gray'}
      style={buttonStyle}
    />
  );
};

export default LikeButton;
