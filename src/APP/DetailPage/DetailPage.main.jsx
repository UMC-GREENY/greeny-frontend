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

  const pathPL = () => {
   const path = window.location.pathname;
   const productIdRegex = /\/product\/([0-9]+)/;
    const matches = path.match(productIdRegex);

    if (matches) {
      const extractedProductId = matches[1];
      setProductId(extractedProductId); // productId 상태 설정
    } else {
      console.log("productId not found");
    }
  }

  useEffect(() => {
   const path = window.location.pathname;
   if (path.includes("/store/:storeId")) {
     setIsProduct(false);
   } else if (path.includes("/product/:productId")) {
     setIsProduct(true);
   }
   pathPL();
 }, [productId]); // productId가 변경될 때마다 실행

  return (
    <>
      <DetailItem
        style={commonStyle}
        isProduct={isProduct}
        productId={productId} // productId를 DetailItem 컴포넌트로 전달
      />
      <ServiceList
        style={commonStyle}
        onSelectService={handleSelectService}
      />
      <ServiceContent
        style={commonStyle}
        selectedService={selectedService}
        isProduct={isProduct}
        productId={productId} // productId를 ServiceContent 컴포넌트로 전달
      />
    </>
  );
}

export default DetailPage;
