import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';
import { useLocation } from 'react-router-dom';

// components
import DetailItem from "./DetailPage.main.DetailItem";
// import ServiceList from "./DetailPage.main.serviceList";
import ServiceContentReview from "./DatailPage.main.serviceContentReview";

function Review() {
    const isSuccess = useRecoilValue(isSuccessState);
    const setIsSuccess = useSetRecoilState(isSuccessState);
    console.log("isSuccess", isSuccess);
    useBeforeUnload();

    // const [selectedService, setSelectedService] = useState("review");
    const [productId, setProductId] = useState(null); // productId 상태 추가
    
    const location = useLocation();

    const initialArray = location.state?.array || []; // 배열이 아닌 경우에는 빈 배열로 초기화
    const [array, setArray] = useState(initialArray);

    // const handleSelectService = (service) => {
    //     setSelectedService(service);
    // };

    useEffect(() => {
        console.log("배열 데이터", array);
        console.log("배열 데이터: id", array.post.id);
    }, [array]); // 배열이 업데이트될 때마다 실행

    useEffect(() => {
        // 초기 렌더링 시에 배열 데이터를 설정
        setArray(initialArray);

    }, [initialArray]);

    return (
<>
    {array !== null && (
        <>
            <DetailItem
                isProduct={array.post.type === "product" ? true : false}
                productId={array.post.idByType}
            />
            {/* <ServiceList
                onSelectService={handleSelectService}
            /> */}
            <ServiceContentReview
                // selectedService={selectedService}
                isProduct={array.post.type === "product" ? true : false}
                productId={array.post.idByType}
                reviewID={array.post.id}
            />
        </>
    )}
</>

    );
}

export default Review;
