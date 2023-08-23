import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles"
import request from "../Api/request";
import { ACCESS_TOKEN } from "../Api/request";


import ProductCard from "./Category.main.productCard";

function BestItemProduct(props) {
   const [bestItem, setBestItem] = useState([]);
   const [isSuccess, setIsSuccess] = useState(props.isSuccess);



   useEffect(() => {
      let isMounted = true; // 언마운트 상태 확인을 위한 변수

      setBestItem([]);
      console.log("지금은 상태 확인중", isSuccess);

      const fetchData = async () => {
         try {
            if (isMounted) {
               if (isSuccess === true) {
                  const response = await request.get('/api/products/auth/simple?page=0&size=8&sort=bookmarks,desc', {
                     headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`
                    },
                  })
                  console.log('response best 잘 불러옴:', response.data);
                  setBestItem(response.data.content);
               } else {
                  const response = await request.get('/api/products/simple?page=0&size=8&sort=bookmarks,desc')
                  console.log('response:', response.data);
                  setBestItem(response.data.content);
               }

            }
         } catch (error) {
            console.error('데이터 가져오기 실패', error);
         }
      };

      fetchData();

      return () => {
         isMounted = false; // 컴포넌트 언마운트 시 변수 업데이트
      };
   }, [isSuccess]); // 의존성 배열에 isProduct 추가


   return (
      <>
         {isSuccess !== null && (
            <>
               <itemS.TitleWrap type='best'>
                  <itemS.overline></itemS.overline>
                  <itemS.TitleText>PRODUCTS BEST</itemS.TitleText>
                  <itemS.overline></itemS.overline>
               </itemS.TitleWrap>
               <itemS.ItemsWrapper type='best'>
                  {bestItem.map((item, index) => (
                     <ProductCard key={index} type="best" data={item} />
                  ))}
               </itemS.ItemsWrapper>
               <itemS.overline type='long'></itemS.overline>
            </>
         )}
      </>
   );
}

export default BestItemProduct;