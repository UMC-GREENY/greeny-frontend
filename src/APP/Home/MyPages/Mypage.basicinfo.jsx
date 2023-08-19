import React, { useState, useEffect } from "react";
import * as myInfo from "./Styled/MypageInfo.styles";
import request from "../../Api/request";
import { ACCESS_TOKEN } from "../../Api/request";
import { async } from "q";
import { useNavigate } from "react-router";

function MypageInfo() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    type: "",
    email: "",
    name: "",
    phone: "",
    birth: "",
  });
  const [before, setBefore] = useState("");
  const [after1, setAfter1] = useState("");
  const [after2, setAfter2] = useState("");
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

  const useChangePw = async () => {
    if (before === "") {
      return alert("기존 비밀번호를 입력하지 않았습니다.");
    }
    if (after1 === "") {
      return alert("새로운 비밀번호를 입력하지 않았습니다.");
    }
    if (after2 === "") {
      return alert("새로운 비밀번호을 확인하지 않았습니다.");
    }
    if (after1 !== after2) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    try {
      const response = await request.patch(
        "api/members", // 엔드포인트
        {
          passwordToCheck: before,
          // 요청 본문 데이터
          passwordToChange: after1,
          // 새로운 비밀번호
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              ACCESS_TOKEN
            )}`,
          },
        }
      );

      console.log("비밀번호 변경 성공", response);
      // 성공 처리 로직 추가
      navigate("/");
    } catch (error) {
      console.error("비밀번호 변경 실패", error);
      // 실패 처리 로직 추가
      alert(
        "기존 비밀번호가 잘못되었거나 새로운 비밀번호가 조건에 맞지 않습니다.(조건: 특수문자 1개 이상, 영문+숫자, 15자 이내) "
      );
    }
  };

  const { type, email, name, phone, birth } = userData;
  console.log(before);
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
                <input
                  placeholder="특수문자 1개 이상, 영문+숫자, 15자 이내"
                  onChange={(e) => setBefore(e.target.value)}
                  type="password"
                />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>비밀번호 변경</h3>
                <input
                  placeholder="특수문자 1개 이상, 영문+숫자, 15자 이내"
                  onChange={(e) => setAfter1(e.target.value)}
                  type="password"
                />
              </myInfo.Divs>
              <myInfo.Divs>
                <h3>비밀번호 확인</h3>
                <input
                  placeholder="비밀번호 확인"
                  onChange={(e) => setAfter2(e.target.value)}
                  type="password"
                />
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
              <button
                style={{ backgroundColor: "#649D17" }}
                onClick={useChangePw}
              >
                변경하기
              </button>
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
