import React, { useState, useEffect } from "react";
import * as myInfo from "./Styled/MypageInfo.styles";
import request from "../../Api/request";
import axios from "axios";
function MypageInfo() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [type, setType] = useState("Kakao");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get("/api/members");
        console.log("ee");
      } catch (error) {}
    };
    fetchData();
    console.log("qq");
  }, []);
  return (
    <myInfo.Div>
      <myInfo.Wrapper>
        <myInfo.Title style={{ fontFamily: "Merriweather" }}>
          My Page
        </myInfo.Title>
        <myInfo.firstcontainer>
          <myInfo.secondcontainertitle>기본정보</myInfo.secondcontainertitle>
        </myInfo.firstcontainer>
        {type == "General" && (
          <>
            <myInfo.Main>
              <myInfo.Divs>
                <h3>이메일</h3>
                <input />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>기존 비밀번호</h3>
                <input />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>비밀번호 변경</h3>
                <input />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>비밀번호 확인</h3>
                <input />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>이름</h3>
                <input />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>휴대폰 번호</h3>
                <input />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>생년월일</h3>
                <input />
              </myInfo.Divs>
            </myInfo.Main>
            <myInfo.Btns>
              <button style={{ backgroundColor: "#CCCCCC" }}>취소하기</button>
              <button style={{ backgroundColor: "#649D17" }}>변경하기</button>
            </myInfo.Btns>
          </>
        )}
        {(type == "Kakao" || type == "Naver") && (
          <myInfo.Main>
            <myInfo.Divs>
              <h3>이메일</h3>
              <input />
            </myInfo.Divs>
            {type}
          </myInfo.Main>
        )}
      </myInfo.Wrapper>
    </myInfo.Div>
  );
}

export default MypageInfo;
