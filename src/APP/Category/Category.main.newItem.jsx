import React, { useEffect, useState } from "react";
import axios from 'axios';
import request from "../Api/request";
import * as itemS from "./styles/Category.main.newItem.styles"

import ProductCard from "./Category.main.productCard";

function NewItem() {
   const [newItem, setNewItem] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await request.get('/api/products/simple?page=0&size=3&sort=id,desc'
          );

          setNewItem(response.data.content);
          console.log('데이터:', newItem);
        } catch (error) {
          console.error('데이터 가져오기 실패', error);
        }
      };
      fetchData();
    }, []);
    

   return (
      <>
         <itemS.TitleWrap>
            <itemS.overline></itemS.overline>
            <itemS.TitleText>PRODUCTS NEW</itemS.TitleText>
            <itemS.overline></itemS.overline>
         </itemS.TitleWrap>
         <itemS.ItemsWrapper>
         {newItem.map((item, index) => (
                    <ProductCard key={index} type='best' data={item} />
                ))}
         </itemS.ItemsWrapper>
      </>
   );
}

export default NewItem;