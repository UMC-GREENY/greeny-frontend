import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/DetailPage.main.detailItem.styles";

function DetailItem({ isProduct }) {

   const Dummy = isProduct
   ? [
       {
         brand: "아로마티카",
         name: "글로우 비타 페이셜 스크럽 오렌지 & 네롤리",
         link: "https://aromatica.co.kr/",
         price: 0,
         delivery_fee : 0
       },
     ]
   : [
       {
         brand: "상점",
         name: "스타일 비건",
         link: "https://aromatica.co.kr/",
         address: "서울 강남구 선릉로 135길 6, 2층",
         location: "서울특별시",
         description: (
            <div>
              비건 음식점 & 카페<br />
              비건 화덕피자, 비건 수제버거, 비건 치킨 등을 매장에서 또는 배달로 만나보세요.
            </div>
          )          
       }
     ];
 
   
   return (
      <itemS.ItemWrapper>
         <itemS.InItemWrapper>
         <itemS.ImageItem></itemS.ImageItem>
         <itemS.TitleItemWrapper type="top">
            <itemS.titleText type="brand">{Dummy[0].brand}</itemS.titleText>
            <itemS.titleText type="name">{Dummy[0].name}</itemS.titleText>
            <itemS.overline type="name"></itemS.overline>
            <itemS.LinkTitleWrapper>
               <itemS.LinkTitle>{Dummy[0].link}</itemS.LinkTitle>
               <itemS.LinkTitle>&gt;</itemS.LinkTitle>
            </itemS.LinkTitleWrapper>
            {isProduct ? 
             null : <itemS.titleText type="address">{Dummy[0].address}</itemS.titleText>
         }
            
         </itemS.TitleItemWrapper>
         <itemS.TitleItemWrapper type="middle">
            {isProduct ? 
               <>
                  <itemS.titleText type="price">{Dummy[0].price} ₩</itemS.titleText>
                  <itemS.titleText type="delivery">
                     {Dummy[0].delivery_fee === 0 ? "배송비 무료" : Dummy[0].delivery_fee}
                  </itemS.titleText>
                  <itemS.overline></itemS.overline>
               </> : 
               <>
                  <itemS.titleText type="area">{Dummy[0].location}</itemS.titleText>
                  <itemS.titleText type="description">{Dummy[0].description}</itemS.titleText>
               </>
            }
         </itemS.TitleItemWrapper>
         <itemS.TitleItemWrapper type="bottom">
            <itemS.totalWrapper>
            {isProduct ? 
               <>
                  <itemS.titleText type="total">총 합계</itemS.titleText>
                  <itemS.titleText type="totalPrice">{Dummy[0].price + Dummy[0].delivery_fee} ₩</itemS.titleText>
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