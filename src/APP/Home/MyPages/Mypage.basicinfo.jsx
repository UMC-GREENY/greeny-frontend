import React, { useState, useEffect } from "react";
import * as myInfo from "./Styled/MypageInfo.styles";
import request from "../../Api/request";
import { ACCESS_TOKEN } from "../../Api/request";

function MypageInfo() {
  const [userData, setUserData] = useState({
    type: "",
    email: "",
    name: "",
    phone: "",
    birth: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await request.get("api/members", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              ACCESS_TOKEN
            )}`,
          },
        });

        const loginType = response.data.loginType;
        setUserData({
          type: loginType,
          email: response.data.email,
          name: loginType === "General" ? response.data.name : "",
          phone: loginType === "General" ? response.data.phone : "",
          birth: loginType === "General" ? response.data.birth : "",
        });
      } catch (error) {
        console.error("사용자의 정보를 가져오는데 실패", error);
      }
    };

    fetchUserData();
  }, []);

  const { type, email, name, phone, birth } = userData;

  return (
    <myInfo.Div>
      <myInfo.Wrapper>
        <myInfo.Title style={{ fontFamily: "Merriweather" }}>
          My Page
        </myInfo.Title>
        <myInfo.firstcontainer>
          <myInfo.secondcontainertitle>기본정보</myInfo.secondcontainertitle>
        </myInfo.firstcontainer>
        {type === "General" && (
          <>
            <myInfo.Main>
              <myInfo.Divs>
                <h3>이메일</h3>
                <input
                  value={email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>기존 비밀번호</h3>
                <input placeholder="특수문자 1개 이상, 영문+숫자, 15자 이내" />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>비밀번호 변경</h3>
                <input placeholder="특수문자 1개 이상, 영문+숫자, 15자 이내" />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>비밀번호 확인</h3>
                <input placeholder="비밀번호 확인" />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>이름</h3>
                <input
                  value={name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>휴대폰 번호</h3>
                <input
                  value={phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>생년월일</h3>
                <input
                  value={birth}
                  onChange={(e) =>
                    setUserData({ ...userData, birth: e.target.value })
                  }
                />
              </myInfo.Divs>
            </myInfo.Main>
            <myInfo.Btns>
              <button style={{ backgroundColor: "#CCCCCC" }}>취소하기</button>
              <button style={{ backgroundColor: "#649D17" }}>변경하기</button>
            </myInfo.Btns>
          </>
        )}
        {(type === "Kakao" || type === "Naver") && (
          <myInfo.Main>
            <myInfo.Divs>
              <h3>이메일</h3>
              <input value={email} readOnly />
            </myInfo.Divs>
            <h4>{type} 로그인 하셨습니다</h4>
          </myInfo.Main>
        )}
      </myInfo.Wrapper>
    </myInfo.Div>
  );
}

export default MypageInfo;
