import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/DetailPage.main.serviceContent.styles"
import * as tokens from "../tokens";

function serviceContent() {
	return (
		<>
            <itemS.ContentWrap>
                {/* <itemS.DetailInfo>상품 상세 정보 불러오기</itemS.DetailInfo> */}

                {/* <itemS.InquiryWrapper type="total">
                    <itemS.ContentText type="headLine">아래 연락망을 통해 해당 브랜드 및 스토어에 문의할 수 있습니다.</itemS.ContentText>
                    <itemS.InquiryWrapper type="contact">
                        <itemS.InquiryWrapper type="phone">
                            <itemS.ContentText type="body"> ☎ 0000-0000</itemS.ContentText>
                        </itemS.InquiryWrapper>
                        <itemS.InquiryWrapper type="email">
                            <itemS.ContentText type="body"> ＠ https://aromatica.co.kr/</itemS.ContentText>
                    </itemS.InquiryWrapper>
                    </itemS.InquiryWrapper>
                </itemS.InquiryWrapper> */}

                <itemS.ReviewWrapper type="top">
                    <itemS.ReviewWrapper type="text">
                        <itemS.ContentText type="text">리뷰 (00)</itemS.ContentText>
                    </itemS.ReviewWrapper>
                    <itemS.Btn type="write">글 쓰기</itemS.Btn>
                </itemS.ReviewWrapper>
                <itemS.overline></itemS.overline>
                <itemS.ReviewWrapper type="body">
                    <itemS.ReviewWrapper type="content" style={{ display: "flex", justifyContent: "space-between" }}>
                        <itemS.ContentText type="content">☆☆☆☆☆</itemS.ContentText>
                        <itemS.ContentText type="content" style={{display: "flex", width: "780px", height: "30px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}} >리뷰 후기 내용 미리보기</itemS.ContentText>
                        <itemS.ContentText type="sub">id***@gmail.com</itemS.ContentText>
                        <itemS.ContentText type="sub" style={{color: tokens.colors.grey_40}}>2023.00.00</itemS.ContentText>
                    </itemS.ReviewWrapper>
                </itemS.ReviewWrapper>
                <itemS.overline></itemS.overline>
                <itemS.ReviewWrapper type="btn">
                    <itemS.Btn>1</itemS.Btn>
                    <itemS.Btn>2</itemS.Btn>
                    <itemS.Btn>3</itemS.Btn>
                    <itemS.Btn>4</itemS.Btn>
                    <itemS.Btn>5</itemS.Btn>
                </itemS.ReviewWrapper>
            </itemS.ContentWrap>
		</>
	);
}

export default serviceContent;