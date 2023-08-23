import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//components
import MainLandigPicture from './Home.main.landing.picture';
import NewItemStore from '../Category/Category.main.store.newItem';
import BestItemStore from '../Category/Category.main.store.bestItem';
import NewItemProduct from '../Category/Category.main.product.newItem';
import BestItemProduct from '../Category/Category.main.product.bestItem';
import BannerSlider from './Banner/Banner.main';
import { lifeTipCards } from './Banner/Banner.main.dummy';


import request from '../Api/request';
import { refreshToken } from '../Api/request';
import { ACCESS_TOKEN } from '../Api/request';
export const CategoryWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
`;

export const ContentWrapper = styled.div`
  padding-top: 100px;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-left: 1300px;
  width: 120px;
  ${(props) =>
    props.type === 'store'
      ? `
			top: 1600px;`
      : `
				top: 3929px;
				`}
`;

export const LinkSpan = styled.span`
  font-family: Pretendard;
  color: #666666;
  ${(props) =>
    props.type === 'more'
      ? `
				width: 90px;
				height: 24px;
				font-size: 16px;
				line-height: 24px;`
      : `
				width: 24px;
				height: 24px;
				`}
`;

function Home() {
  const navigate = useNavigate();
  const handleNavigateStore = () => {
    navigate(`/store`);
  };

  const handleNavigateProduct = () => {
    navigate(`/product`);
  };

  // 토큰 유효 검사 실시 false면 refreshToken로 재발급
  // isSuccess 는 사용하고 싶으면 쓰세요
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    // 데이터 가져오기를 처리하는 함수 정의
    async function fetchData() {

      try {
        const response = await request.get('/api/auth');
        console.log("response", response);
        setIsSuccess(response.isSuccess);

      } catch (error) {
        if (error.response && error.response.status === 401) {
          // 토큰 만료 또는 인증 실패로 인한 오류인 경우
          try {
            // refreshToken 함수를 사용하여 액세스 토큰 갱신
            await refreshToken();
            // 실패한 요청을 다시 시도
            const response = await request.get('/api/auth');
            setIsSuccess(response.isSuccess);
          } catch (refreshError) {
            console.error('토큰 갱신 중 오류:', refreshError);
          }
        } else {
          console.error('데이터 가져오기 중 오류:', error);
        }
      }
    }

    fetchData();
  }, [isSuccess]);
  return (
    <>
{isSuccess !== null && (
  <>
  <BannerSlider></BannerSlider>
  <CategoryWrapper>
    <ContentWrapper>
      <NewItemStore isSuccess={isSuccess}></NewItemStore>
      <LinkWrapper type='store' onClick={handleNavigateStore}>
        <LinkSpan type='more'>더 알아보기</LinkSpan>
        <LinkSpan type='c'>&gt;</LinkSpan>
      </LinkWrapper>
      <BestItemStore isSuccess={isSuccess}></BestItemStore>
      <NewItemProduct isSuccess={isSuccess}></NewItemProduct>
      <LinkWrapper type='product' onClick={handleNavigateProduct}>
        <LinkSpan type='more'>더 알아보기</LinkSpan>
        <LinkSpan type='c'>&gt;</LinkSpan>
      </LinkWrapper>
      <BestItemProduct isSuccess={isSuccess}></BestItemProduct>
    </ContentWrapper>
  </CategoryWrapper>
</>
)}
</>
  );
  
}


export default Home;
