import React, { useEffect, useState } from "react";
import * as detailS from "./Styled/Community.detail.styles";
import { useNavigate } from "react-router";
import request from "../Api/request";
import Slider from "./Community.main.serviceContent.slider";

function CommunityDetail() {
  const navigate = useNavigate();
  const handleMore = (type) => {
    navigate("/post", { state: { type } });
  };
  const [images, setImages] = useState([]);
  const [userData, setUserData] = useState({
    title: "",
    content: "",
    isLiked: "",
    createdAt: "",
    updatedAt: "",
    writeEmail: "",
    isWriter: "",
    likes: "",
    fileUrls: [],
  });
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
          writeEmail: con.data.writeEmail,
          isWriter: con.data.isWriter,
          likes: con.data.likes,
          fileUrls: con.data.fileUrls,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(userData.fileUrls);
  }, [params[1]]);

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
        <detailS.PostEmail>{userData.writeEmail}</detailS.PostEmail>
        <detailS.PostDate>{userData.updatedAt}</detailS.PostDate>
      </detailS.Ti>
      <detailS.Pic>
        <Slider
          images={userData.fileUrls.map(
            (imageUrl) =>
              `https://umc-greeny.s3.ap-northeast-2.amazonaws.com/${imageUrl}`
          )}
        />

        {/* {userData.fileUrls.map((imageUrl, index) => (
          <Slider images={userData.fileUrls} />
        ))} */}
      </detailS.Pic>
      {/* <detailS.Pic
        src={`https://umc-greeny.s3.ap-northeast-2.amazonaws.com/${userData.fileUrls[0]}`}
        alt="Image"
      /> */}

      <detailS.Text>
        {userData.content}
        <detailS.ConTi>
          <detailS.One>
            <div>
              <img src="/community/photo.png" />
              {}
            </div>
            <div>
              <img src="/community/chat.png" />
            </div>
          </detailS.One>
          <div>
            <img src="/community/favorite.png" />
          </div>
        </detailS.ConTi>
      </detailS.Text>
      <detailS.Co>
        <detailS.Commend>
          <detailS.Who>
            <div>idd***@gmail.com</div>
            <div>2023.00.00</div>
          </detailS.Who>
          dd
        </detailS.Commend>
        <detailS.Commend>
          <detailS.Who>
            <div>idd***@gmail.com</div>
            <div>2023.00.00</div>
          </detailS.Who>
          qw
        </detailS.Commend>
        <detailS.Commend>
          <detailS.Who>
            <div>idd***@gmail.com</div>
            <div>2023.00.00</div>
          </detailS.Who>
          rq
        </detailS.Commend>
      </detailS.Co>
      <detailS.Write>
        <detailS.Box>
          <div>idd***@gmail.com</div>
          <detailS.Memtion></detailS.Memtion>
        </detailS.Box>
        <button>댓글 등록</button>
      </detailS.Write>
    </detailS.SignupWrapper>
  );
}
export default CommunityDetail;
