import React, { useEffect, useState, useRef } from "react";

//components
import DetailItem from "./DetailPage.main.detailItem";
import ServiceList from "./DetailPage.main.serviceList";
import ServiceContent from "./DetailPage.main.serviceContent";

function DetailPage() {
	return (
		<>
            <DetailItem></DetailItem>
            <ServiceList></ServiceList>
            <ServiceContent></ServiceContent>
		</>
	);
}

export default DetailPage;
