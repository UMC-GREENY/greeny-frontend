import React, { useEffect, useState } from "react";
import * as detailS from "./Styled/Community.detail.styles";
import { useNavigate } from "react-router";
import request from "../Api/request";
import Slider from "./Community.main.serviceContent.slider";
import { isSuccessState } from "../Login/Recoil/Recoil.auth.state";
import { useRecoilState, useRecoilValue } from "recoil";
import { ACCESS_TOKEN, REFRESH_TOKEN, refreshToken } from "../Api/request";
import Pagination from "react-js-pagination";
function CommunityDetail() {
  const navigate = useNavigate();
  const isSuccess = useRecoilValue(isSuccessState);
  const handleMore = (type) => {
    navigate("/post", { state: { type } });
  };

  const [love, setLove] = useState(false);
  const [userData, setUserData] = useState({
    title: "",
    content: "",
    isLiked: "",
    createdAt: "",
    updatedAt: "",
    writerEmail: "",
    isWriter: "",
    likes: 0,
    fileUrls: [],
  });
  //게시물 불러오기
  const urlPath = window.location.pathname; // 현재 페이지의 경로
  const params = urlPath.split("community/");
  useEffect(() => {
    console.log(params[1]);
    const fetchData = async () => {
      try {
        const con = await request.get(`/api/posts?postId=${params[1]}`);
        setUserData({
          title: con.data.title,
          content: con.data.content,
          isLiked: con.data.isLiked,
          createdAt: con.data.createdAt,
          updatedAt: con.data.updatedAt,
          writerEmail: con.data.writerEmail,
          isWriter: con.data.isWriter,
          likes: con.data.likes,
          fileUrls: con.data.fileUrls,
        });
        setLove(userData.isLiked);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(userData);
    console.log(userData);
  }, [params[1]]);
  //좋아요
  useEffect(() => {
    // console.log(params[1]);
    const fetchData = async () => {
      try {
        const response = await request.post(
          `/api/posts/like?postId=${params[1]}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("에러");
      }
    };
    fetchData();
  }, [love]);

  const onLove = () => {
    setLove(!love);
    if (userData.isLiked == false) {
      if (love) {
        setUserData((prevUserData) => ({
          ...prevUserData,
          likes: prevUserData.likes - 1,
        }));
      } else {
        setUserData((prevUserData) => ({
          ...prevUserData,
          likes: prevUserData.likes + 1,
        }));
      }
    }
  };
  //댓글 목록 불러오기
  const [comment, setComment] = useState([]);
  const fetchComments = async () => {
    try {
      const response = await request.get(`/api/comments?postId=${params[1]}`);
      setComment(response.data.reverse());
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [params[1]]);

  const [visibleComments, setVisibleComments] = useState(5);

  const loadMoreComments = () => {
    setVisibleComments(visibleComments + 5);
  };
  //댓글달기
  const [myComment, setMyComment] = useState();
  const addComment = () => {
    const fetchData = async () => {
      try {
        const requestData = {
          content: myComment,
        };

        const response = await request.post(
          `/api/comments?postId=${params[1]}`,
          requestData, // 전송할 데이터
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
              "Content-Type": "application/json", // 데이터 형식을 JSON으로 지정
            },
          }
        );
        fetchComments();
        setMyComment("");
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("에러");
      }
    };
    fetchData();
  };

  // console.log(myComment);
  return (
    <detailS.SignupWrapper>
      <detailS.SignupContentWrapper>
        <detailS.Title>Community</detailS.Title>
        <detailS.ContentWrapper>
          <detailS.SubTitle>GREENY COMMUNITY</detailS.SubTitle>
          <detailS.ListButton onClick={() => handleMore("community")}>
            글 목록
          </detailS.ListButton>
        </detailS.ContentWrapper>
      </detailS.SignupContentWrapper>
      <detailS.Ti>
        <detailS.Name>{userData.title}</detailS.Name>
        <detailS.PostEmail>{userData.writerEmail}</detailS.PostEmail>
        <detailS.PostDate>{userData.updatedAt}</detailS.PostDate>
      </detailS.Ti>
      <detailS.Pic>
        <Slider
          images={userData.fileUrls.map(
            (imageUrl) =>
              `https://umc-greeny.s3.ap-northeast-2.amazonaws.com/${imageUrl}`
          )}
        />
      </detailS.Pic>

      <detailS.Text>
        {userData.content}
        <detailS.ConTi>
          <detailS.One>
            <div>
              <img src="/community/photo.png" />
              {userData.fileUrls.length}
            </div>
            <div>
              <img src="/community/chat.png" />
              {comment.length}
            </div>
          </detailS.One>
          <div
            onClick={isSuccess ? onLove : null}
            style={{ display: "flex", alignItems: "center", fontSize: "12px" }}
          >
            {userData.isLiked ? (
              <img src="/community/favorite.png" />
            ) : love ? (
              <img src="/community/favorite.png" />
            ) : (
              <img src="/community/pre_favorite.png" />
            )}
            {console.log(userData.isLiked)}
            {userData.likes}
          </div>
        </detailS.ConTi>
      </detailS.Text>
      <detailS.Co>
        {comment.slice(0, visibleComments).map((commentItem) => (
          <detailS.Commend key={commentItem.id}>
            <detailS.Who>
              <div>{commentItem.writerEmail}</div>
              <div>{commentItem.updatedAt}</div>
            </detailS.Who>
            {commentItem.content}
          </detailS.Commend>
        ))}
        {visibleComments < comment.length && (
          <detailS.preBtn>
            <button onClick={loadMoreComments}>
              이전 댓글 더 보기
              <img src="/community/arrow.png" />
            </button>
          </detailS.preBtn>
        )}
      </detailS.Co>
      <detailS.Write>
        <detailS.Box
          disabled={!isSuccess}
          onChange={(e) => setMyComment(e.target.value)}
          value={myComment}
        />
        <button onClick={addComment}>댓글 등록</button>
      </detailS.Write>
    </detailS.SignupWrapper>
  );
}
export default CommunityDetail;
