import React, { useEffect, useState} from "react";
import * as itemS from "./Styled/DetailPage.main.serviceList.styles";
import * as tokens from "../tokens";

function ServiceList({ onSelectService }) {
  const [selectedService, setSelectedService] = useState("detailInfo");

  const handleServiceClick = (service) => {
    onSelectService(service);
    setSelectedService(service);
  };

  return (
    <>
      <itemS.serviceListWrapper>
        <itemS.ListWrapper>
          <itemS.serviceItem
            onClick={() => handleServiceClick("detailInfo")}
            style={{
              borderBottom:
                selectedService === "detailInfo"
                  ? `3px solid ${tokens.colors.green_main2}`
                  : `3px solid ${tokens.colors.grey_80}`,
            }}
          >
            제품 정보
          </itemS.serviceItem>
          <itemS.serviceItem
            onClick={() => handleServiceClick("review")}
            style={{
              borderBottom:
                selectedService === "review"
                  ? `3px solid ${tokens.colors.green_main2}`
                  : `3px solid ${tokens.colors.grey_80}`,
            }}
          >
            리뷰
          </itemS.serviceItem>
          <itemS.serviceItem
            onClick={() => handleServiceClick("inquiry")}
            style={{
              borderBottom:
                selectedService === "inquiry"
                  ? `3px solid ${tokens.colors.green_main2}`
                  : `3px solid ${tokens.colors.grey_80}`,
            }}
          >
            문의
          </itemS.serviceItem>
        </itemS.ListWrapper>
      </itemS.serviceListWrapper>
    </>
  );
}

export default ServiceList;
