import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/DetailPage.main.detailItem.styles";

function DetailItem() {
   return (
      <itemS.ItemWrapper>
         <itemS.ImageItem></itemS.ImageItem>
         <itemS.TitleItemWrapper type="item">
            <itemS.titleText type="brand">아로마티카</itemS.titleText>
            <itemS.titleText type="name">글로우 비타 페이셜 스크럽 오렌지 & 네롤리</itemS.titleText>
            <itemS.overline type="name"></itemS.overline>
            <itemS.LinkTitleWrapper>
               <itemS.LinkTitle>https://aromatica.co.kr/</itemS.LinkTitle>
               <itemS.LinkTitle>&gt;</itemS.LinkTitle>
            </itemS.LinkTitleWrapper>
         </itemS.TitleItemWrapper>
         <itemS.TitleItemWrapper type="price">
            <itemS.titleText type="price">00,000₩</itemS.titleText>
            <itemS.titleText type="delivery">배송비 무료 </itemS.titleText>
            <itemS.overline></itemS.overline>
         </itemS.TitleItemWrapper>
         <itemS.TitleItemWrapper type="Btn">
            <itemS.totalWrapper>
               <itemS.titleText type="total">총 합계</itemS.titleText>
               <itemS.titleText type="totalPrice">00,000₩</itemS.titleText>
            </itemS.totalWrapper>
            <itemS.wishBtn>♡ 찜하기</itemS.wishBtn>
         </itemS.TitleItemWrapper>
      </itemS.ItemWrapper>
   );
}

export default DetailItem;