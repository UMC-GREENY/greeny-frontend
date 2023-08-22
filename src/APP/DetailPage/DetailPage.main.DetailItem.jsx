import React, { useEffect, useState, useRef } from 'react';
import * as itemS from './Styled/DetailPage.main.detailItem.styles';
import request from '../Api/request';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../Home/Like/Likepage.main.clickitem';
function DetailItem({ isProduct, productId }) {
  const [itemInfo, setItemInfo] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await request.get(
//           `/api/products?productId=${productId}`
//         );
//         setItemInfo(response.data);
//       } catch (error) {
//         console.error('데이터 가져오기 실패', error);
//       }
//     };
//     fetchData();
//   }, [productId]);

   const [itemInfo, setItemInfo] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = isProduct === true ? await request.get(`/api/products?productId=${productId}`) : await request.get(`/api/stores?storeId=${productId}`);
            console.log("불러온 애", response.data);
            setItemInfo(response.data);
         } catch (error) {
            console.error('데이터 가져오기 실패', error);
         }
      };
      fetchData();
   }, []);

  const handleLinkClick = () => {
    // 상세 페이지로 이동
    window.location.href = `${itemInfo.webUrl}`;
  };


//   return (
//     <itemS.ItemWrapper>
//       <itemS.InItemWrapper>
//         <itemS.ImageItem src={itemInfo.imageUrl}></itemS.ImageItem>
//         <itemS.TitleItemWrapper type='top'>
//           <itemS.titleText type='brand'>{itemInfo.storeName}</itemS.titleText>
//           <itemS.titleText type='name'>{itemInfo.name}</itemS.titleText>
//           <itemS.overline type='name'></itemS.overline>
//           <itemS.LinkTitleWrapper onClick={handleLinkClick}>
//             <itemS.LinkTitle>{itemInfo.webUrl}</itemS.LinkTitle>
//             <itemS.LinkTitle>&gt;</itemS.LinkTitle>
//           </itemS.LinkTitleWrapper>
//           {isProduct ? null : (
//             <itemS.titleText type='address'>{itemInfo.address}</itemS.titleText>
//           )}
//         </itemS.TitleItemWrapper>
//         <itemS.TitleItemWrapper type='middle'>
//           {isProduct ? (
//             <>
//               <itemS.titleText type='price'>{itemInfo.price} ₩</itemS.titleText>
//               <itemS.titleText type='delivery'>
//                 {itemInfo.deliveryFee === 0
//                   ? '배송비 무료'
//                   : itemInfo.deliveryFee + ' ₩'}
//               </itemS.titleText>
//               <itemS.overline></itemS.overline>
//             </>
//           ) : (
//             <>
//               <itemS.titleText type='area'>{itemInfo.location}</itemS.titleText>
//               <itemS.titleText type='description'>
//                 {itemInfo.description}
//               </itemS.titleText>
//             </>
//           )}
//         </itemS.TitleItemWrapper>
//         <itemS.TitleItemWrapper type='bottom'>
//           <itemS.totalWrapper>
//             {isProduct ? (
//               <>
//                 <itemS.titleText type='total'>총 합계</itemS.titleText>
//                 <itemS.titleText type='totalPrice'>
//                   {itemInfo.price + itemInfo.deliveryFee} ₩
//                 </itemS.titleText>
//               </>
//             ) : null}
//           </itemS.totalWrapper>
//           <itemS.wishBtn>
//             {' '}
//             <LikeButton></LikeButton> 찜하기
//           </itemS.wishBtn>
//         </itemS.TitleItemWrapper>
//       </itemS.InItemWrapper>
//     </itemS.ItemWrapper>
//   );

   const handleImageError = (event) => {
      event.target.src = 'https://umc-greeny.s3.ap-northeast-2.amazonaws.com/store_basic.png';
   };

   const spliting = itemInfo.location ? itemInfo.location.split(' ') : []; // itemInfo.location이 정의되었을 때만 split 호출
   const firstText = spliting[0];

   return (
      <itemS.ItemWrapper>
         <itemS.InItemWrapper>
            <itemS.ImageItem src={itemInfo.imageUrl} onError={handleImageError}></itemS.ImageItem>
            <itemS.TitleItemWrapper type="top">
               {isProduct ?
                  <itemS.titleText type="brand">{itemInfo.storeName}</itemS.titleText> : <itemS.titleText type="brand">{itemInfo.category}</itemS.titleText>
               }
               <itemS.titleText type="name">{itemInfo.name}</itemS.titleText>
               <itemS.overline type="name"></itemS.overline>
               {itemInfo.webUrl !== null ? (
                  <itemS.LinkTitleWrapper onClick={handleLinkClick}>
                     <itemS.LinkTitle>{itemInfo.webUrl}</itemS.LinkTitle>
                     <itemS.LinkTitle>&gt;</itemS.LinkTitle>
                  </itemS.LinkTitleWrapper>
               ) : (
                  <itemS.LinkTitle>제공 중인 URL이 없습니다.</itemS.LinkTitle>
               )}

               {isProduct ?
                  null : <itemS.titleText type="address">{itemInfo.location
                  }</itemS.titleText>
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
                     <itemS.titleText type="area">{firstText}</itemS.titleText>
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
