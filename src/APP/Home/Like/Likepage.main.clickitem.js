import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import request from '../../Api/request'; // request 모듈을 가져온다고 가정
import { ACCESS_TOKEN } from '../../Api/request';
import { refreshToken } from '../../Api/request';
import axios from 'axios';
const LikeButton = ({ type, id, isLike, inner }) => {
  const [isSuccess, setIsSuccess] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get('/api/auth');
        console.log('response', response);
        setIsSuccess(response.isSuccess);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            await refreshToken();
            const response = await request.get('/api/auth');
            setIsSuccess(response.isSuccess);
          } catch (refreshError) {
            console.error('토큰 갱신 중 오류:', refreshError);
          }
        } else {
          console.error('데이터 가져오기 중 오류:', error);
        }
      }
    };

    fetchData();
  }, []);

  const isTokenValid = () => {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) {
      // 토큰이 없는 경우
      return false;
    }

    try {
      const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000); // 현재 시간(초 단위)

      if (tokenData.exp < currentTime) {
        // 토큰이 만료된 경우
        return false;
      }

      // 토큰이 유효한 경우
      return true;
    } catch (error) {
      // 토큰을 파싱할 수 없는 경우
      return false;
    }
  };
  ////////////////////////////////////////////////////////
  const [initialLikeState, setInitialLikeState] = useState(isLike);

  useEffect(() => {

  }, [initialLikeState]);
  const handleToggleLike = async () => {
    if (!isTokenValid()) {
      console.log('토큰이 유효하지 않습니다.');
      return;
    }
    {
      console.log('토큰 유효');
      try {
        const response = await request.post(
          `/api/bookmarks?type=${type}&id=${id}`,
          null,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
        if (initialLikeState) {
          console.log(`${id}번 아이템이 찜 해제되었습니다.`);
        } else {
          console.log(`${id}번 아이템이 찜되었습니다.`);
        }

        setInitialLikeState((prevState) => !prevState);
        console.log('찜하기 완료');
      } catch (error) {
        console.error('찜하기 실패', error);
        console.log(ACCESS_TOKEN);
      }
    }
  };

  const buttonStyle = {
    fontSize: '24px',
    cursor: 'pointer',
    marginRight: '8px',
    marginTop: '8px'
  };

  const heartColor = inner ? '#ffffff' : '#649D17'; //하트 색깔

  return (
    <div onClick={handleToggleLike}>
      {initialLikeState ? (
        <FaHeart
          color={heartColor}
          style={buttonStyle}
        />
      ) : (
        <FaRegHeart color='beige' style={buttonStyle} />
      )}
    </div>
  );
};

export default LikeButton;
