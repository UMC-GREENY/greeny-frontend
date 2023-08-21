import React from "react";
import * as detailS from "./Styled/Community.detail.styles";
import { useNavigate } from "react-router";
function CommunityDetail() {
  const navigate = useNavigate();
  return (
    <detailS.SignupWrapper>
      <detailS.SignupContentWrapper>
        <detailS.Title>Community</detailS.Title>
        <detailS.ContentWrapper>
          <detailS.SubTitle>GREENY COMMUNITY</detailS.SubTitle>
          <detailS.ListButton onClick={() => navigate("/post")}>
            글 목록
          </detailS.ListButton>
        </detailS.ContentWrapper>
      </detailS.SignupContentWrapper>
      <detailS.Ti>
        <detailS.Name>제목</detailS.Name>
        <detailS.PostEmail>idd***@gmail.com</detailS.PostEmail>
        <detailS.PostDate>2023.00.00</detailS.PostDate>
      </detailS.Ti>
      <detailS.Pic />
      <detailS.Text>
        text
        <detailS.ConTi>
          <detailS.One>
            <div>
              <img src="/community/photo.png" />
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
