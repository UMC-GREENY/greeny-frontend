import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/DetailPage.main.detailItem.styles";
import request from "../Api/request";
import { useNavigate } from 'react-router-dom';

function DetailItem({ isProduct, productId }) {

   const [itemInfo, setItemInfo] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await request.get(`/api/products?productId=${productId}`);
            setItemInfo(response.data);
         } catch (error) {
            console.error('데이터 가져오기 실패', error);
         }
      };
      fetchData();
   }, [productId]); 

   const handleLinkClick = () => {
      // 상세 페이지로 이동
      window.location.href = `${itemInfo.webUrl}`;
   };

   return (
      <itemS.ItemWrapper>
         <itemS.InItemWrapper>
         <itemS.ImageItem src={itemInfo.imageUrl}></itemS.ImageItem>
         <itemS.TitleItemWrapper type="top">
            <itemS.titleText type="brand">{itemInfo.storeName}</itemS.titleText>
            <itemS.titleText type="name">{itemInfo.name}</itemS.titleText>
            <itemS.overline type="name"></itemS.overline>
            <itemS.LinkTitleWrapper onClick={handleLinkClick}>
               <itemS.LinkTitle>{itemInfo.webUrl}</itemS.LinkTitle>
               <itemS.LinkTitle>&gt;</itemS.LinkTitle>
            </itemS.LinkTitleWrapper>
            {isProduct ? 
             null : <itemS.titleText type="address">{itemInfo.address}</itemS.titleText>
         }
            
         </itemS.TitleItemWrapper>
         <itemS.TitleItemWrapper type="middle">
            {isProduct ? 
               <>
                  <itemS.titleText type="price">{itemInfo.price} ₩</itemS.titleText>
                  <itemS.titleText type="delivery">
                     {itemInfo.deliveryFee === 0 ? "배송비 무료" : itemInfo.deliveryFee + " ₩"}
                  </itemS.titleText>
                  <itemS.overline></itemS.overline>
               </> : 
               <>
                  <itemS.titleText type="area">{itemInfo.location}</itemS.titleText>
                  <itemS.titleText type="description">{itemInfo.description}</itemS.titleText>
               </>
            }
         </itemS.TitleItemWrapper>
         <itemS.TitleItemWrapper type="bottom">
            <itemS.totalWrapper>
            {isProduct ? 
               <>
                  <itemS.titleText type="total">총 합계</itemS.titleText>
                  <itemS.titleText type="totalPrice">{itemInfo.price + itemInfo.deliveryFee} ₩</itemS.titleText>
               </> : null
            }     
            </itemS.totalWrapper>
            <itemS.wishBtn>♡ 찜하기</itemS.wishBtn>
         </itemS.TitleItemWrapper>
         </itemS.InItemWrapper>
      </itemS.ItemWrapper>
   );
}

export default DetailItem;