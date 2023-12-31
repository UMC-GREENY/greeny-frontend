import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as itemS from "./Styled/Community.main.styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaStar, FaRegStar, FaHome } from "react-icons/fa";
import request from "../Api/request";
import { Link } from "react-router-dom";

function CommunityMain() {
  const navigate = useNavigate();
  const handleMore = (type) => {
    navigate("/post", { state: { type } });
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < count ? <FaStar key={i} /> : <FaRegStar key={i} />);
    }
    return stars;
  };

  const [storeReviewsResponse, setStoreReviewsResponse] = useState([]); //스토어 리뷰
  const [productReviewsResponse, setProductReviewsResponse] = useState([]); //제품 리뷰
  const [bestResponse, setBestResponse] = useState([]); //베스트 게시글
  const [postResponse, setPostResponse] = useState([]); //게시글

  // 유효성 검증
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeReviewsResponse = await request.get(
          "/api/reviews/all?type=store&page=0&size=3&sort=id,desc"
        );
        setStoreReviewsResponse(storeReviewsResponse.data.content);
        console.log("storeReviewsResponse", storeReviewsResponse);

        const productReviewsResponse = await request.get(
          "/api/reviews/all?type=product&page=0&size=3&sort=id,desc"
        );
        setProductReviewsResponse(productReviewsResponse.data.content);
        console.log("productReviewsResponse", productReviewsResponse);

        const bestResponse = await request.get(
          "/api/posts/search?page=0&size=3&sort=hits,desc"
        );
        setBestResponse(bestResponse.data.content);
        console.log("bestResponse", bestResponse);

        const postResponse = await request.get(
          "/api/posts/search?page=0&size=3&sort=id,desc"
        );
        setPostResponse(postResponse.data.content);
        console.log("postResponse", postResponse);
      } catch (error) {
        console.error("오류:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Community</itemS.Title>
        <itemS.ContentWrapper>
          <itemS.SubTitle>BEST POST</itemS.SubTitle>
          <itemS.MoreWrap onClick={() => handleMore("best")}>
            <span>더보기</span>
            <span>&gt;</span>
          </itemS.MoreWrap>
        </itemS.ContentWrapper>

        <itemS.InfoBox>
          {bestResponse.map((post, index) => (
            <React.Fragment key={post.id}>
              <itemS.InfoLine onClick={() => navigate(`/community/${post.id}`)}>
                <itemS.PostTitle>{post.title}</itemS.PostTitle>
                <itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
                <itemS.PostDate>{post.createdAt}</itemS.PostDate>
              </itemS.InfoLine>
              <itemS.Line></itemS.Line>
            </React.Fragment>
          ))}
        </itemS.InfoBox>

        <itemS.ContentWrapper>
          <itemS.SubTitle>ECO-STORE REVIEW</itemS.SubTitle>
          <itemS.MoreWrap onClick={() => handleMore("storereview")}>
            <span>더보기</span>
            <span>&gt;</span>
          </itemS.MoreWrap>
        </itemS.ContentWrapper>

        <itemS.InfoBox>
          {storeReviewsResponse.map((post, index) => (
            <React.Fragment key={post.id}>
              <itemS.InfoLine onClick={() =>
              navigate(`/${post.type}/review/${post.idByType}`, {
                state: { array: {post} },
              })
            }>
                <itemS.PostStar>{renderStars(post.star)}</itemS.PostStar>
                <itemS.PostContent>{post.content}</itemS.PostContent>
                <itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
                <itemS.PostDate>{post.createdAt}</itemS.PostDate>
              </itemS.InfoLine>
              <itemS.Line></itemS.Line>
            </React.Fragment>
          ))}
        </itemS.InfoBox>

        <itemS.ContentWrapper>
          <itemS.SubTitle>ECO_PRODUCT REVIEW</itemS.SubTitle>
          <itemS.MoreWrap onClick={() => handleMore("productreview")}>
            <span>더보기</span>
            <span>&gt;</span>
          </itemS.MoreWrap>
        </itemS.ContentWrapper>

        <itemS.InfoBox>
          {productReviewsResponse.map((post, index) => (
            <React.Fragment key={post.id}>
              <itemS.InfoLine onClick={() =>
              navigate(`/${post.type}/review/${post.idByType}`, {
                state: { array: {post} },
              })
            }>
                <itemS.PostStar>{renderStars(post.star)}</itemS.PostStar>
                <itemS.PostContent>{post.content}</itemS.PostContent>
                <itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
                <itemS.PostDate>{post.createdAt}</itemS.PostDate>
              </itemS.InfoLine>
              <itemS.Line></itemS.Line>
            </React.Fragment>
          ))}
        </itemS.InfoBox>

        <itemS.ContentWrapper>
          <itemS.SubTitle>GREENY COMMUNITY</itemS.SubTitle>
          <itemS.MoreWrap onClick={() => handleMore("community")}>
            <span>더보기</span>
            <span>&gt;</span>
          </itemS.MoreWrap>
        </itemS.ContentWrapper>

        <itemS.InfoBox>
          {postResponse.map((post, index) => (
            <React.Fragment key={post.id}>
              <itemS.InfoLine onClick={() => navigate(`/community/${post.id}`)}>
                <itemS.PostTitle>{post.title}</itemS.PostTitle>
                <itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
                <itemS.PostDate>{post.createdAt}</itemS.PostDate>
              </itemS.InfoLine>
              <itemS.Line></itemS.Line>
            </React.Fragment>
          ))}
        </itemS.InfoBox>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default CommunityMain;
