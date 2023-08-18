import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/DetailPage.main.serviceContent.styles"
import * as tokens from "../tokens";
import ImageSlider from "./DetailPage.main.serviceContent.slider"
import Pagination from "react-js-pagination";
import StarRatings from "react-star-ratings";


function ServiceContent({ selectedService }) {
    const [isWriting, setIsWriting] = useState(false);
    const [isViewing, setIsViewing] = useState(false);

    const images = [
        "https://pbs.twimg.com/media/Dw8nkd2VsAElmJB.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAxOTAzMDJfMjE1/MDAxNTUxNTAzNDY4MzI4.DTPWkA-650YKC2p2coa7ef-rqlTSR0eOEgLTHyWY9hIg.bMJuG4AiMh0SVoNyS_kC22xFxOM9sFAwmmyWfmeY_lQg.JPEG.tbzjyn/180414_%ED%8A%B8%EC%9C%84%ED%84%B02.jpg?type=w800",
        "https://pbs.twimg.com/media/DakKZQhVwAEYN40.jpg"
    ];

    const ReviewDummy = [
        {
            "star": 0,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.09.08',
            "url": "sample",
        },
        {
            "star": 2,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.05.07',
            "url": "sample",
        },
        {
            "star": 5,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.03.01',
            "url": "sample",
        },
        {
            "star": 0,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.09.08',
            "url": "sample",
        },
        {
            "star": 2,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.05.07',
            "url": "sample",
        },
        {
            "star": 5,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.03.01',
            "url": "sample",
        },
        {
            "star": 0,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.09.08',
            "url": "sample",
        },
        {
            "star": 2,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.05.07',
            "url": "sample",
        },
        {
            "star": 5,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.03.01',
            "url": "sample",
        },
        {
            "star": 0,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.09.08',
            "url": "sample",
        },
        {
            "star": 2,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.05.07',
            "url": "sample",
        },
        {
            "star": 5,
            "content": "리뷰 내용 미리보기 리뷰 내용 미리보기",
            "email": "idd***@gmail.com",
            "date": '2023.03.01',
            "url": "sample",
        },
    ]

    useEffect(() => {
        // 선택된 서비스가 변경될 때마다 isWriting을 false로 초기화
        setIsWriting(false);
        setIsViewing(false)
    }, [selectedService]);

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
    const currentReviews = ReviewDummy.slice(startIndex, endIndex);

    // 페이지 변경 시 호출되는 함수
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <itemS.ContentWrap>
                {selectedService === "detailInfo" && (
                    <>
                        <itemS.DetailInfo>상품 상세 정보 불러오기</itemS.DetailInfo>
                    </>
                )}

                {selectedService === "inquiry" && (
                    <>
                        <itemS.InquiryWrapper type="total">
                            <itemS.ContentText type="headLine">아래 연락망을 통해 해당 브랜드 및 스토어에 문의할 수 있습니다.</itemS.ContentText>
                            <itemS.InquiryWrapper type="contact">
                                <itemS.InquiryWrapper type="phone">
                                    <itemS.ContentText type="body"> ☎ 0000-0000</itemS.ContentText>
                                </itemS.InquiryWrapper>
                                <itemS.InquiryWrapper type="email">
                                    <itemS.ContentText type="body"> ＠ https://aromatica.co.kr/</itemS.ContentText>
                                </itemS.InquiryWrapper>
                            </itemS.InquiryWrapper>
                        </itemS.InquiryWrapper>
                    </>
                )}

                {selectedService === "review" && (
                    <>
                        {isViewing ? (
                            <>
                                <itemS.ReviewWrapper type="top">
                                    <itemS.ReviewWrapper type="text">
                                        <itemS.ContentText type="text">리뷰 (00)</itemS.ContentText>
                                    </itemS.ReviewWrapper>
                                </itemS.ReviewWrapper>
                                <itemS.overline></itemS.overline>
                                <itemS.ReviewWrapper type="title" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <itemS.ContentText type="content">☆☆☆☆☆</itemS.ContentText>
                                    <itemS.ContentText type="sub" style={{ display: "flex", width: "780px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} >리뷰 후기 내용 미리보기</itemS.ContentText>
                                    <itemS.ContentText type="body1">id***@gmail.com</itemS.ContentText>
                                    <itemS.ContentText type="body1" style={{ color: tokens.colors.grey_40 }}>2023.00.00</itemS.ContentText>
                                </itemS.ReviewWrapper>
                                <itemS.ReviewWrapper type="body" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <itemS.ReviewWrapper type="img">
                                        <ImageSlider images={images} />
                                    </itemS.ReviewWrapper>
                                    <itemS.ReviewWrapper type="viewContent" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                                        <itemS.ContentText type="sub" style={{ marginTop: "40px", marginLeft: "10px" }}>id***@gmail.com</itemS.ContentText>
                                        <div style={{ display: "flex" }}>
                                            <itemS.ReviewWrapper type="star">☆</itemS.ReviewWrapper>
                                            <itemS.ReviewWrapper type="star">☆</itemS.ReviewWrapper>
                                            <itemS.ReviewWrapper type="star">☆</itemS.ReviewWrapper>
                                            <itemS.ReviewWrapper type="star">☆</itemS.ReviewWrapper>
                                            <itemS.ReviewWrapper type="star">☆</itemS.ReviewWrapper>
                                        </div>
                                        <itemS.ContentText style={{ marginTop: "40.2px", height: "278px", width: "100%", }}>후기 내용</itemS.ContentText>
                                    </itemS.ReviewWrapper>
                                </itemS.ReviewWrapper>
                                <itemS.overline></itemS.overline>
                                <itemS.ReviewWrapper type="bottom">
                                    <itemS.Btn type="list" onClick={() => setIsViewing(false)}>리뷰 목록</itemS.Btn>
                                </itemS.ReviewWrapper>
                            </>
                        ) : isWriting ? (
                            <>
                                <itemS.ReviewWrapper type="top">
                                    <itemS.ReviewWrapper type="text">
                                        <itemS.ContentText type="text">리뷰 작성하기</itemS.ContentText>
                                    </itemS.ReviewWrapper>
                                </itemS.ReviewWrapper>
                                <itemS.overline></itemS.overline>
                                <itemS.ReviewWrapper type="body">
                                    <itemS.ReviewWrapper type="writeContent">
                                        <itemS.ContentText type="content" style={{ fontWeight: 600, marginRight: "110px" }}>평점</itemS.ContentText>
                                        <StarRatings
                                            rating={rating}
                                            starRatedColor="blue"
                                            changeRating={handleRatingChange}
                                            numberOfStars={5}
                                            name='rating'
                                        />
                                    </itemS.ReviewWrapper>
                                    <itemS.ReviewWrapper type="writeContent">
                                        <itemS.ContentText type="content" style={{ fontWeight: 600, marginRight: "75px" }}>첨부파일</itemS.ContentText>
                                        <itemS.ContentText type="body1" style={{ width: "824px", borderRadius: "5px", border: "1px solid #B3B3B3", display: "flex", alignItems: "center", paddingLeft: "10px" }}>첨부파일명</itemS.ContentText>
                                        <itemS.Btn type="attach">파일 첨부하기</itemS.Btn>
                                    </itemS.ReviewWrapper>
                                    <itemS.ReviewWrapper type="writeContent">
                                        <itemS.ContentText type="content" style={{ fontWeight: 600, marginRight: "116px" }}>본문</itemS.ContentText>
                                        <itemS.textarea placeholder="본문 내용"></itemS.textarea>
                                    </itemS.ReviewWrapper>
                                </itemS.ReviewWrapper>
                                <itemS.ReviewWrapper type="btns">
                                    <itemS.Btn type="cancelSubmit" style={{ backgroundColor: tokens.colors.grey_80 }} onClick={() => setIsWriting(false)}>취소하기</itemS.Btn>
                                    <itemS.Btn type="cancelSubmit" style={{ backgroundColor: tokens.colors.green_main2 }}>작성하기</itemS.Btn>
                                </itemS.ReviewWrapper>
                            </>
                        )
                            : (
                                <>
                                    <itemS.ReviewWrapper type="top">
                                        <itemS.ReviewWrapper type="text">
                                            <itemS.ContentText type="text">리뷰 ({ReviewDummy.length})</itemS.ContentText>
                                        </itemS.ReviewWrapper>
                                        <itemS.Btn type="write" onClick={() => setIsWriting(true)} >글 쓰기</itemS.Btn>
                                    </itemS.ReviewWrapper>
                                    <itemS.overline></itemS.overline>
                                      <itemS.ReviewWrapper type="body">
                                        {currentReviews.map((review, index) => (
                                            <div key={index}>
                                                <itemS.ReviewWrapper
                                                    type="content"
                                                    style={{ display: "flex", justifyContent: "space-between" }}
                                                    onClick={() => setIsViewing(true)}
                                                >
                                                    <itemS.ContentText type="content">
                                                        <StarRatings
                                                            rating={review.star}
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
                                                        {review.content} {/* 리뷰 내용 */}
                                                    </itemS.ContentText>
                                                    <itemS.ContentText type="body1">{review.email}</itemS.ContentText>
                                                    <itemS.ContentText
                                                        type="body1"
                                                        style={{ color: tokens.colors.grey_40 }}
                                                    >
                                                        {review.date}
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
                                        totalItemsCount={ReviewDummy.length}
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