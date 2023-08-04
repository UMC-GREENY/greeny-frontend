import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/DetailPage.main.serviceList.styles";

function serviceList() {
   return (
      <>
         <itemS.serviceListWrapper>
            <itemS.ListWrapper>
               <itemS.serviceItem>제품 정보</itemS.serviceItem>
               <itemS.serviceItem>리뷰</itemS.serviceItem>
               <itemS.serviceItem>문의</itemS.serviceItem>
            </itemS.ListWrapper>
         </itemS.serviceListWrapper>
      </>
   );
}

export default serviceList;