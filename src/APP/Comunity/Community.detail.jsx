import React, { useEffect, useState } from "react";
import * as detailS from "./Styled/Community.detail.styles";
import { useNavigate } from "react-router";
import request from "../Api/request";
import Slider from "./Community.main.serviceContent.slider";
import { isSuccessState } from "../Login/Recoil/Recoil.auth.state";
import { useRecoilState, useRecoilValue } from "recoil";
import { ACCESS_TOKEN, REFRESH_TOKEN, refreshToken } from "../Api/request";

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
    const fetchData = async () => {
      try {
        const con =
          isSuccess === true
            ? await request.get(`/api/posts/auth?postId=${params[1]}`, {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  ACCESS_TOKEN
                )}`,
              },
            })
            : await request.get(`/api/posts?postId=${params[1]}`, {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  ACCESS_TOKEN
                )}`,
              },
            });
        console.log("화긴중", con.data);
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
        setLove(con.data.isLiked);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    console.log(love, "loge");
  }, [params[1]]);

  //좋아요
  const onLove = async () => {
    try {
      // 선택한 포스트에 대한 좋아요 처리
      if (love === true) {
        await request.post(
          `/api/posts/like?postId=${params[1]}`, // 변경: unlike 엔드포인트 사용
          null,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
        setUserData((prevUserData) => ({
          ...prevUserData,
          likes: prevUserData.likes - 1,
        }));
        setLove(false);
        
      } else {
        await request.post(
          `/api/posts/like?postId=${params[1]}`, // 변경: like 엔드포인트 사용
          null,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
  
        setUserData((prevUserData) => ({
          ...prevUserData,
          likes: prevUserData.likes + 1,
        }));
        setLove(true);
      }
    } catch (error) {
      if (error.response.status === 403) {
        alert(error.response.data.message);
      }
      console.error("Error fetching data:", error);
    }
  };
  
//댓글 목록 불러오기
const [comment, setComment] = useState([]);
const fetchComments = async () => {
  try {
    const response =
      isSuccess === true
        ? await request.get(`/api/comments/auth?postId=${params[1]}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              ACCESS_TOKEN
            )}`,
          },
        })
        : await request.get(`/api/comments?postId=${params[1]}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              ACCESS_TOKEN
            )}`,
          },
        });
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

//댓글삭제
const RemoveComment = async (commentItem) => {
  try {
    const response = await request.delete(
      `/api/comments?commentId=${commentItem.id}`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            ACCESS_TOKEN
          )}`,
        },
      }
    );
    fetchComments();
    // setComment(response.data.reverse());
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

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
    {userData.fileUrls.length === 0 ? (
      <></>
    ) : (
      <detailS.Pic>
        <Slider
          images={userData.fileUrls.map(
            (imageUrl) =>
              `https://umc-greeny.s3.ap-northeast-2.amazonaws.com/${imageUrl}`
          )}
        />
      </detailS.Pic>
    )}

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
          {love ? (
            <img src="/community/favorite.png" />
          ) : (
            <img src="/community/pre_favorite.png" />
          )}
          {console.log(love, "ss")}
          {console.log(userData.likes, "likes")}
          {console.log(userData.isLiked, "liked")}
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
          <detailS.ConBtn>
            {commentItem.content}
            {commentItem.isWriter && (
              <button onClick={() => RemoveComment(commentItem)}>삭제</button>
            )}
          </detailS.ConBtn>
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
