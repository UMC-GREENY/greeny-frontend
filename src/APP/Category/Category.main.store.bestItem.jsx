import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles"
import request from "../Api/request";

import StoreCard from "./Category.main.storeCard";

function BestItemStore() {
   const [bestItem, setBestItem] = useState([]);
 


   useEffect(() => {
      let isMounted = true; // 언마운트 상태 확인을 위한 변수

      setBestItem([]);

      const fetchData = async () => {
         try {
            if (isMounted) {
               const response = await request.get('/api/stores/simple?page=0&size=8&sort=bookmarks,desc')
               console.log('response:', response.data);
               setBestItem(response.data.content);
            }
         } catch (error) {
            console.error('데이터 가져오기 실패', error);
         }
      };

      fetchData();

      return () => {
         isMounted = false; // 컴포넌트 언마운트 시 변수 업데이트
      };
   }, []); // 의존성 배열에 isProduct 추가


   return (
      <>
         <itemS.TitleWrap type='best'>
            <itemS.overline></itemS.overline>
            <itemS.TitleText>"STORE BEST"</itemS.TitleText>
            <itemS.overline></itemS.overline>
         </itemS.TitleWrap>
         <itemS.ItemsWrapper type='best'>
            {bestItem.map((item, index) => (
               <StoreCard key={index} type="best" data={item} />
            ))}
         </itemS.ItemsWrapper>
         <itemS.overline type='long'></itemS.overline>
      </>
   );
}

export default BestItemStore;