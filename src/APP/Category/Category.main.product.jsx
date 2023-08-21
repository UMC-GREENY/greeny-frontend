import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MainLandigPicture from "../Home/Home.main.landing.picture";
import NewItem from "./Category.main.product.newItem";
import BestItem from "./Category.main.product.bestItem";
import AllItem from "./Category.main.product.allItem";


import request from '../Api/request';
import { refreshToken } from '../Api/request';
import { ACCESS_TOKEN } from '../Api/request';

export const CategoryWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;

    background-color: white;
`

export const ContentWrapper = styled.div`
    padding-top: 100px;
    width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
`

function Product() {

    // 토큰 유효 검사 실시 false면 refreshToken로 재발급
  // isSuccess 는 사용하고 싶으면 쓰세요
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    // 데이터 가져오기를 처리하는 함수 정의
    async function fetchData() {
      
      try {
        const response = await request.get('/api/auth');
        console.log("response",response);
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
  }, []);

   return (
      <>
        <MainLandigPicture></MainLandigPicture>
        <CategoryWrapper>
            <ContentWrapper>
                <NewItem></NewItem>
                <BestItem></BestItem>
                <AllItem></AllItem>
            </ContentWrapper>
        </CategoryWrapper>
      </>
   );
}

export default Product;