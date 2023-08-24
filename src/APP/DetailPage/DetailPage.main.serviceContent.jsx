import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/DetailPage.main.serviceContent.styles"
import * as tokens from "../tokens";
import Pagination from "react-js-pagination";
import StarRatings from "react-star-ratings";
import request from "../Api/request";
import IsViewing from "./DetailPage.main.serviceContent.isViewing";
import IsWriting from "./DetailPage.main.isWriting";

import { useRecoilValue } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';

function ServiceContent({ selectedService, isProduct, productId }) {
    const [isWriting, setIsWriting] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [itemInfo, setItemInfo] = useState([]);
    const [review, setReview] = useState([]);
    const [Product] = useState(isProduct);

    const isSuccess = useRecoilValue(isSuccessState);
    console.log("isSuccess", isSuccess);
    useBeforeUnload();

    useEffect(() => {
        // 선택된 서비스가 변경될 때마다 isWriting을 false로 초기화
        setIsWriting(false);
        setIsViewing(false)
    }, [selectedService]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = isProduct === true ? await request.get(`/api/products?productId=${productId}`) : await request.get(`/api/stores?storeId=${productId}`);
                setItemInfo(response.data);
            } catch (error) {
                console.error('데이터 가져오기 실패', error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (isProduct === true) {
                    const response = await request.get(`/api/reviews/simple?type=product&id=${productId}&page=0&size=2&sort=id,desc`);
                    setReview(response.data.content);
                    console.log('데이터', response);
                } else {
                    const response = await request.get(`/api/reviews/simple?type=store&id=${productId}&page=0&size=2&sort=id,desc`);
                    setReview(response.data.content);
                    console.log('데이터', response);
                }
            } catch (error) {
                console.error('데이터 가져오기 실패', error);
            }
        };
        fetchData();
    }, [isProduct, productId]);


    // 별점 관련 상태
    const [rating, setRating] = useState(0);

    // 별점 변경 시 호출되는 함수
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };


    // 페이지네이션 관련 상태
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // 현재 페이지의 리뷰 목록 계산
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentReviews = review.slice(startIndex, endIndex);

    // 페이지 변경 시 호출되는 함수
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <itemS.ContentWrap>
                {selectedService === "detailInfo" && (
                    <>
                        {isProduct ? (
                            itemInfo.contentUrl ? (
                                <itemS.DetailInfo src={"https://umc-greeny.s3.ap-northeast-2.amazonaws.com/" + itemInfo.contentUrl} />
                            ) : (
                                <itemS.ContentText type="headLine">Web URL을 참고해 주세요</itemS.ContentText>
                            )
                        ) : (
                            itemInfo.runningTime ? (
                                <itemS.ContentText type="headLine">🕖 {itemInfo.runningTime}</itemS.ContentText>
                            ) : (
                                <itemS.ContentText type="headLine">Web URL을 참고해 주세요</itemS.ContentText>
                            )
                        )}
                    </>
                )}

                {selectedService === "inquiry" && (
                    <>
                        <itemS.InquiryWrapper type="total">
                            <itemS.ContentText type="headLine">아래 연락망을 통해 해당 브랜드 및 스토어에 문의할 수 있습니다.</itemS.ContentText>
                            <itemS.InquiryWrapper type="contact">
                                {itemInfo.phone !== null ? (
                                    <itemS.InquiryWrapper type="phone">
                                        <itemS.ContentText type="body"> ☎ {itemInfo.phone}</itemS.ContentText>
                                    </itemS.InquiryWrapper>
                                ) : (
                                    <itemS.InquiryWrapper type="phone">
                                        <itemS.ContentText type="body"> ☎ 제공되지 않습니다</itemS.ContentText>
                                    </itemS.InquiryWrapper>
                                )}
                                {itemInfo.webUrl !== null ? (
                                    <itemS.InquiryWrapper type="email">
                                        <itemS.ContentText type="body"> ＠ {itemInfo.webUrl}</itemS.ContentText>
                                    </itemS.InquiryWrapper>
                                ) : (
                                    <itemS.InquiryWrapper type="phone">
                                        <itemS.ContentText type="body"> ＠ 제공되지 않습니다</itemS.ContentText>
                                    </itemS.InquiryWrapper>
                                )}
                            </itemS.InquiryWrapper>
                        </itemS.InquiryWrapper>
                    </>
                )}

                {selectedService === "review" && (
                    <>
                        {isViewing ? (
                            <IsViewing data={review} setIsViewing={setIsViewing} isProduct={Product}></IsViewing>

                        ) : isWriting ? (
                            <IsWriting data={productId} setIsWriting={setIsWriting} isProduct={Product}></IsWriting>
                        )
                            : (
                                <>
                                    <itemS.ReviewWrapper type="top">
                                        <itemS.ReviewWrapper type="text">
                                            <itemS.ContentText type="text">리뷰 ({review.length})</itemS.ContentText>
                                        </itemS.ReviewWrapper>
                                        <itemS.Btn type="write" onClick={(e) => {
                                            if (isSuccess) {
                                                setIsWriting(true);
                                            } else { alert("로그인을 해 주세요.") }
                                        }} >글 쓰기</itemS.Btn>
                                    </itemS.ReviewWrapper>
                                    <itemS.overline></itemS.overline>
                                    <itemS.ReviewWrapper type="body">
                                        {currentReviews.map((reviewItem, index) => (
                                            <div key={index}>
                                                <itemS.ReviewWrapper
                                                    type="content"
                                                    style={{ display: "flex", justifyContent: "space-between" }}
                                                    onClick={() => setIsViewing(true)}
                                                >
                                                    <itemS.ContentText type="content">
                                                        <StarRatings
                                                            rating={reviewItem.star}
                                                            starRatedColor="black"
                                                            numberOfStars={5}
                                                            name='rating'
                                                            starDimension="24px"
                                                            starSpacing="2px"
                                                        />
                                                    </itemS.ContentText>
                                                    <itemS.ContentText
                                                        type="sub"
                                                        style={{
                                                            display: "flex",
                                                            width: "780px",
                                                            whiteSpace: "nowrap",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                        }}
                                                    >
                                                        {reviewItem.content}
                                                        {reviewItem.existsFile && <itemS.imgIcon src={'/review/photo.png'} alt="Review Image" />}
                                                    </itemS.ContentText>

                                                    <itemS.ContentText type="body1">{reviewItem.writerEmail}</itemS.ContentText>
                                                    <itemS.ContentText
                                                        type="body1"
                                                        style={{ color: tokens.colors.grey_40 }}
                                                    >
                                                        {reviewItem.createdAt}
                                                    </itemS.ContentText>
                                                </itemS.ReviewWrapper>
                                            </div>
                                        ))}

                                    </itemS.ReviewWrapper>
                                    <itemS.overline></itemS.overline>
                                    <itemS.PaginationWrapper>
                                        <Pagination
                                            activePage={currentPage}
                                            itemsCountPerPage={itemsPerPage}
                                            totalItemsCount={currentReviews.length}
                                            onChange={handlePageChange}
                                            hideNavigation={true}
                                            hideFirstLastPages={true}
                                        />
                                    </itemS.PaginationWrapper>

                                </>
                            )}
                    </>
                )}
            </itemS.ContentWrap>
        </>
    );
}

export default ServiceContent;