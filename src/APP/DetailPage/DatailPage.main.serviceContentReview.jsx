import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as itemS from "./Styled/DetailPage.main.serviceContent.styles"
import * as tokens from "../tokens";
import StarRatings from "react-star-ratings";
import ImageSlider from "./DetailPage.main.serviceContent.slider"
import request from "../Api/request";
import { ACCESS_TOKEN } from "../Api/request";

import { useRecoilValue } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';


function ServiceContentReview(props) {
    const navigate = useNavigate();

    const [review, setReview] = useState([]);

    const isSuccess = useRecoilValue(isSuccessState);
    console.log("isSuccess", isSuccess);
    useBeforeUnload();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('아이디당:', props.reviewID);
                if (isSuccess) {
                    if (props.isProduct === true) {
                        const response = await request.get(`/api/reviews/auth?type=product&id=${props.reviewID}`, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`
                            },
                        });
                        console.log("확인중", response.data);
                        console.log("확인중", response.data);
                        setReview(response.data);
                    } else {
                        const response = await request.get(`/api/reviews/auth?type=store&id=${props.reviewID}`, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`
                            },
                        });
                        
                        console.log("확인중", response.data);
                        setReview(response.data);
                    }
                } else {
                    if (props.isProduct === true) {
                        const response = await request.get(`/api/reviews?type=product&id=${props.reviewID}`);
                        setReview(response.data);
                    } else {
                        const response = await request.get(`/api/reviews?type=store&id=${props.reviewID}`);
                        setReview(response.data);
                    }
                }
            } catch (error) {
                console.error('데이터 가져오기 실패', error);
            }
        };
        fetchData();
    }, [props.reviewID]);

    


    const images = [
        "https://pbs.twimg.com/media/Dw8nkd2VsAElmJB.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAxOTAzMDJfMjE1/MDAxNTUxNTAzNDY4MzI4.DTPWkA-650YKC2p2coa7ef-rqlTSR0eOEgLTHyWY9hIg.bMJuG4AiMh0SVoNyS_kC22xFxOM9sFAwmmyWfmeY_lQg.JPEG.tbzjyn/180414_%ED%8A%B8%EC%9C%84%ED%84%B02.jpg?type=w800",
        "https://pbs.twimg.com/media/DakKZQhVwAEYN40.jpg"
    ];



    // 별점 관련 상태
    const [rating, setRating] = useState(0);

    return (
        <>
            {props.reviewID !== 0 && (
                <>
                <itemS.ContentWrap>
                    <itemS.ReviewWrapper type="top">
                        <itemS.ReviewWrapper type="text">
                            <itemS.ContentText type="text">리뷰</itemS.ContentText>
                            {isSuccess && review.writer && <itemS.imgIcon type='delete' src={'/review/deleteIcon.png'}></itemS.imgIcon>}
                        </itemS.ReviewWrapper>
                    </itemS.ReviewWrapper>
                    <itemS.overline></itemS.overline>
                    <itemS.ReviewWrapper type="title" style={{ display: "flex", justifyContent: "space-between" }}>
                        <itemS.ContentText type="content"><StarRatings
                            rating={review.star}
                            starRatedColor="black"
                            numberOfStars={5}
                            name='rating'
                            starDimension="24px"
                            starSpacing="2px"
                        /></itemS.ContentText>
                        <itemS.ContentText type="sub" style={{ display: "flex", width: "780px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} >{review.content}</itemS.ContentText>
                        <itemS.ContentText type="body1">{review.writerEmail}</itemS.ContentText>
                        <itemS.ContentText type="body1" style={{ color: tokens.colors.grey_40 }}>{review.createdAt}</itemS.ContentText>
                    </itemS.ReviewWrapper>
                    <itemS.ReviewWrapper type="body" style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <itemS.ReviewWrapper type="img">
                            {review.fileUrls ? (<ImageSlider images={review.fileUrls} />) : (<ImageSlider images={['store_basic.png']} />)}

                        </itemS.ReviewWrapper>
                        <itemS.ReviewWrapper type="viewContent" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                            <itemS.ContentText type="sub" style={{ marginTop: "40px", marginLeft: "10px" }}>{review.writerEmail}</itemS.ContentText>
                            <div style={{ display: "flex", Width: "224px", Height: "44.8px", margin: "10px 0 0 10px" }}>
                                <StarRatings
                                    rating={review.star}
                                    starRatedColor="black"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="40px"
                                    starSpacing="7px"
                                />
                            </div>
                            <itemS.ContentText style={{ height: "278px", width: "100%", textAlign: "start", margin: "40.2px 0 0 10px" }}>{review.content}</itemS.ContentText>
                        </itemS.ReviewWrapper>
                    </itemS.ReviewWrapper>
                    <itemS.overline></itemS.overline>
                    <itemS.ReviewWrapper type="bottom">
                        <itemS.Btn type="list" onClick={() => {
                             navigate(`/community`)
                        }}>COMMUNITY</itemS.Btn>
                    </itemS.ReviewWrapper>
                    </itemS.ContentWrap>
                </>
            )}
        </>
    )
}


export default ServiceContentReview;