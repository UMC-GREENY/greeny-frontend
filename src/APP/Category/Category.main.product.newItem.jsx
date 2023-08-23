import React, { useEffect, useState } from "react";
import request from "../Api/request";
import * as itemS from "./styles/Category.main.newItem.styles"
import { ACCESS_TOKEN } from "../Api/request";

import ProductCard from "./Category.main.productCard";

function NewItemProduct(props) {
   const [newItem, setNewItem] = useState([]);
   const [isSuccess, setIsSuccess] = useState(props.isSuccess);


   useEffect(() => {
      let isMounted = true; // 언마운트 상태 확인을 위한 변수

      setNewItem([]);
      console.log("지금 newItem 상태 확인중:", isSuccess);

      const fetchData = async () => {
         try {
            if (isMounted) {
               if (isSuccess === true) {
                  const response = await request.get('/api/products/auth/simple?page=0&size=3&sort=id,desc', {
                     headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`
                    },
                  })
                  console.log('auth response:', response.data);
                  setNewItem(response.data.content);
               } else {
                  const response = await request.get('/api/products/simple?page=0&size=3&sort=id,desc')
                  console.log('response:', response.data);
                  setNewItem(response.data.content);
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
   }, []); // 의존성 배열에 isProduct 추가


   return (
      <>
         <itemS.TitleWrap>
            <itemS.overline></itemS.overline>
            <itemS.TitleText>
               PRODUCTS NEW
            </itemS.TitleText>
            <itemS.overline></itemS.overline>
         </itemS.TitleWrap>
         <itemS.ItemsWrapper>
            {newItem.map((item, index) => (
               <ProductCard key={index} type="new" data={item}/>)
            )}
         </itemS.ItemsWrapper>


      </>
   );
}

export default NewItemProduct;