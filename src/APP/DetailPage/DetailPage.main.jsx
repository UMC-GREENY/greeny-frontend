import React, { useEffect, useState } from "react";

//components
import DetailItem from "./DetailPage.main.DetailItem";
import ServiceList from "./DetailPage.main.serviceList";
import ServiceContent from "./DetailPage.main.serviceContent";

function DetailPage() {
   const commonStyle = {
        fontFamily: "Predendard"
   };

   const [isProduct, setIsProduct] = useState(true); // 초기값을 제품으로 설정
   const [selectedService, setSelectedService] = useState("detailInfo");

   const handleSelectService = (service) => {
      setSelectedService(service);
   };

   useEffect(() => {
      const path = window.location.pathname;
      if (path.includes("/store/:storeId")) {
         setIsProduct(false);
      } else if (path.includes("/product/:productId")) {
         setIsProduct(true);
      }
   }, []);

   return (
      <>
            <DetailItem style={commonStyle} isProduct={isProduct}></DetailItem>
            <ServiceList style={commonStyle} onSelectService={handleSelectService} />
            <ServiceContent style={commonStyle} selectedService={selectedService} />
      </>
   );
}

export default DetailPage;