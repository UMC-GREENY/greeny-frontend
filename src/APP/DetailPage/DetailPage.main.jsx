import React, { useEffect, useState, useRef } from "react";

//components
import DetailItem from "./DetailPage.main.DetailItem";
import ServiceList from "./DetailPage.main.serviceList";
import ServiceContent from "./DetailPage.main.serviceContent";

function DetailPage() {
    const commonStyle = {
        fontFamily: "Predendard"
     };
   return (
      <>
            <DetailItem style={commonStyle}></DetailItem>
            <ServiceList style={commonStyle}></ServiceList>
            <ServiceContent style={commonStyle}></ServiceContent>
      </>
   );
}

export default DetailPage;