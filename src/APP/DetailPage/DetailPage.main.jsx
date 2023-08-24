import React, { useEffect, useState } from "react";

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';
import { useLocation } from 'react-router-dom';

// components
import DetailItem from "./DetailPage.main.DetailItem";
import ServiceList from "./DetailPage.main.serviceList";
import ServiceContent from "./DetailPage.main.serviceContent";

function DetailPage() {
  const isSuccess = useRecoilValue(isSuccessState);
  const setIsSuccess = useSetRecoilState(isSuccessState);
  console.log("isSuccess", isSuccess);
  useBeforeUnload();

  const [isProduct, setIsProduct] = useState(true);
  const [selectedService, setSelectedService] = useState("detailInfo");
  const [productId, setProductId] = useState(null); // productId 상태 추가

  const location = useLocation();

  const selectService = location.state?.selectedService; // 여기에서 props를 사용합니다.
  const reviewId = location.state?.reviewId;

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    pathPL(); // productId를 가져오는 함수 호출
    const path = window.location.pathname;
    if (path.includes("/store")) {
      setIsProduct(false);
    } else if (path.includes("/product")) {
      setIsProduct(true);
    }
  }, [isProduct]); // 처음 렌더링 시에만 실행

  useEffect(() => {
    if (selectService !== null && reviewId !== null) {
      console.log("히", selectService);
      console.log("후", reviewId);
    }
  }, [selectService, reviewId]); // 처음 렌더링 시에만 실행

const pathPL = () => {
  const path = window.location.pathname;
  const regex = isProduct === true ? /\/product\/([0-9]+)/ : /\/store\/([0-9]+)/;
  const matches = path.match(regex);

  if (matches) {
    const extractedProductId = matches[1];
    setProductId(extractedProductId); // productId 상태 설정
  } else {
    console.log("productId not found");
  }
}

return (
  <>
    {productId !== null && ( // productId가 설정되었을 때에만 렌더링
      <>
        <DetailItem
          isProduct={isProduct}
          productId={productId}
        />
        <ServiceList
          onSelectService={handleSelectService}
        />
        {reviewId !== null ? (
          <ServiceContent
            selectedService={selectService}
            isProduct={isProduct}
            productId={productId}
            reviewID={reviewId}
          />
        ) : (
          <ServiceContent
            selectedService={selectedService}
            isProduct={isProduct}
            productId={productId}
          />
        )}



      </>
    )}
  </>
);
}

export default DetailPage;
