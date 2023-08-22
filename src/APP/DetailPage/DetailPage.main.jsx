import React, { useEffect, useState } from "react";

// components
import DetailItem from "./DetailPage.main.DetailItem";
import ServiceList from "./DetailPage.main.serviceList";
import ServiceContent from "./DetailPage.main.serviceContent";

function DetailPage() {
  const commonStyle = {
    fontFamily: "Predendard"
  };

  const [isProduct, setIsProduct] = useState(true);
  const [selectedService, setSelectedService] = useState("detailInfo");
  const [productId, setProductId] = useState(null); // productId 상태 추가

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    console.log("TLqkf:", isProduct);
    pathPL(); // productId를 가져오는 함수 호출
    const path = window.location.pathname;
    if (path.includes("/store")) {
      setIsProduct(false);
    } else if (path.includes("/product")) {
      setIsProduct(true);
    }
  }, [isProduct]); // 처음 렌더링 시에만 실행

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
            style={commonStyle}
            isProduct={isProduct}
            productId={productId}
          />
          <ServiceList
            style={commonStyle}
            onSelectService={handleSelectService}
          />
          <ServiceContent
            style={commonStyle}
            selectedService={selectedService}
            isProduct={isProduct}
            productId={productId}
          />
        </>
      )}
    </>
  );
}

export default DetailPage;
