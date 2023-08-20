import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles"
import request from "../Api/request";

import ProductCard from "./Category.main.productCard";

function BestItem() {
   const [bestItem, setBestItem] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await request.get('/api/products/simple?page=0&size=8&sort=bookmarks,desc'
            );

            setBestItem(response.data.content);
            console.log('데이터:', bestItem);
         } catch (error) {
            console.error('데이터 가져오기 실패', error);
         }
      };
      fetchData();
   }, []);

   return (
      <>
         <itemS.TitleWrap type='best'>
            <itemS.overline></itemS.overline>
            <itemS.TitleText>PRODUCTS BEST</itemS.TitleText>
            <itemS.overline></itemS.overline>
         </itemS.TitleWrap>
         <itemS.ItemsWrapper type='best'>
            {bestItem.map((item, index) => (
               <ProductCard key={index} type='best' data={item} />
            ))}
         </itemS.ItemsWrapper>
         <itemS.overline type='long'></itemS.overline>
      </>
   );
}

export default BestItem;