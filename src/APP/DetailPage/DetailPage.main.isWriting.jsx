import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as itemS from "./Styled/DetailPage.main.serviceContent.styles"
import * as tokens from "../tokens";
import StarRatings from "react-star-ratings";
import request from "../Api/request";
import { ACCESS_TOKEN } from '../Api/request';

function IsWriting(props) {

    // 별점 관련 상태
    const [star, setStar] = useState(0);

    // 별점 변경 시 호출되는 함수
    const handleRatingChange = (newRating) => {
        console.log("평점: ", newRating)
        setStar(newRating);
    };

    const handleContentChange = (e) => {
        console.log("컨텐츠 ", e)
        setContent(e);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state?.type;
    const [file, setFile] = useState('');
    const [content, setContent] = useState('');

    const handleWrite = async () => {
        try {
            const formData = new FormData();

            formData.append('files', file);

            const jsonData = {
                star: star,
                content: content,
            };
            console.log("jsonData",jsonData);
            const jsonBlob = new Blob([JSON.stringify(jsonData)], {
                type: 'application/json',
            });
            console.log("jsonBlob",jsonBlob);

            formData.append('body', jsonBlob, 'json-data');

            console.log("폼데이터",formData);
            if (props.isProduct === true) {
                await request.post(`/api/reviews?type=product&id=${props.data}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`
                    },
                })
                .then((res) => {
                    console.log("post res:", res);
                    if (res.isSuccess) {
                        alert(res.message);
                        navigate('/home', { replace: true });
                    } else {
                        console.error('게시물 작성에 실패했습니다.');
                    }
                })
            } else {
                await request.post(`/api/reviews?type=store&id=${props.data}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`
                    },
                })
                .then((res) => {
                    console.log("post res:", res);
                    if (res.isSuccess) {
                        navigate(`/product/${props.data}`, { state: { type } });
                    } else {
                        console.error('게시물 작성에 실패했습니다.');
                    }
                })
            }
                


        } catch (error) {
            console.error('게시물 작성 중 에러 발생', error);
        }
    };

    return (
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
                    <div style={{ height: "36px" }}>
                        <StarRatings
                            rating={star}
                            starRatedColor="black"
                            starHoverColor={tokens.colors.green_main2}
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            starDimension="30px"
                            starSpacing="6px"
                            name='rating'
                        />
                    </div>

                </itemS.ReviewWrapper>
                <itemS.ReviewWrapper type="writeContent">
                    <itemS.ContentText type="content" style={{ fontWeight: 600, marginRight: "75px" }}>첨부파일</itemS.ContentText>
                    <itemS.FileInput
                        type="file"
                        id="my-input"
                        placeholder="첨부파일명"
                        onChange={(e) => setFile(e.target.files[0])}></itemS.FileInput>
                    <label htmlFor="my-input">
                        <itemS.Btn type="attach">파일 첨부하기</itemS.Btn>
                    </label>
                </itemS.ReviewWrapper>
                <itemS.ReviewWrapper type="writeContent">
                    <itemS.ContentText type="content" style={{ fontWeight: 600, marginRight: "116px" }}>본문</itemS.ContentText>
                    <itemS.textarea placeholder="본문 내용" onChange={(e) => handleContentChange(e.target.value)}></itemS.textarea>
                </itemS.ReviewWrapper>
            </itemS.ReviewWrapper>
            <itemS.ReviewWrapper type="btns">
                <itemS.Btn type="cancelSubmit" style={{ backgroundColor: tokens.colors.grey_80 }} onClick={() => props.setIsWriting(false)}>취소하기</itemS.Btn>
                <itemS.Btn type="cancelSubmit" style={{ backgroundColor: tokens.colors.green_main2 }} onClick={handleWrite}>작성하기</itemS.Btn>
            </itemS.ReviewWrapper>
        </>
    );
}

export default IsWriting;