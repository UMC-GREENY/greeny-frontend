import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as toolS from "./Styled/Login.main.tool.styles";
import request from "./../Api/request";
import { ACCESS_TOKEN, REFRESH_TOKEN, refreshToken } from "./../Api/request";
import LoginKakao from "./Login.kakao";
import { useRecoilState } from "recoil";
import { isSuccessState } from "./Recoil/Recoil.auth.state";
import LoginNaver from "./Login.naver";

function LoginMainTool() {
  const [isSuccess, setIsSuccess] = useRecoilState(isSuccessState); // recoil 로그인 여부
  const [type, setType] = useState("login");
  const [name, setName] = useState("로그인");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const Change = () => {
    setType("find");
    setName("비밀번호 찾기");
  };

  useEffect(() => {
    // const code = window.location.href.split("=")[1];
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) return;
    const source = localStorage.getItem("source");
    if (!source) {
      console.error("Source is not available.");
      return;
    }
    const fetch = async () => {
      const { data } = await request.post(`/api/auth/sign-in/${source}`, null, {
        params: { authorizationCode: code },
      });
      
      if (data.email !== "nothing") { // 최초 로그인 시 nothing 아닌 email 값 받음
        navigate("/agree", { // 일반 로그인 회원가입 시 약관동의 플로우와 달라 type 필요
          state: {
            email: data.email,
            type: "social"
          }
        });
        return;
      } else {
        localStorage.setItem(ACCESS_TOKEN, data.accessToken);
        localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
      }
      setIsSuccess(true);
      navigate("/");
    };
    fetch();
  }, []);

  const handleEmail = {};

  const handleLogin = async () => {
    const requestData = {
      email: email,
      password: password,
      isAuto: isAutoLogin,
    };

    await request
      .post("/api/auth/sign-in/general", requestData)
      .then((res) => {
        console.log("res: ", res);
        // console.log('accessToken : ', res['accessToken'])
        // const token = res['data']['accessToken'].replace("Bearer", "").trim();
        const { accessToken, refreshToken } = res.data;
        // console.log('token : ', token)
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        // 헤더에 토큰 잘 들어가는지 확인
        // console.log("headers:", request.defaults.headers)
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);

        if (res["isSuccess"]) {
          setIsSuccess(true);
          alert("로그인에 성공했습니다.");
          navigate("/");
        } else {
          setIsSuccess(false);
          alert("등록되지 않은 회원입니다.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("등록되지 않은 회원입니다. 다시 시도해주세요 ");
      });
  };

  const handleSignup = () => {
    navigate("/select");
  };

  return (
    <toolS.LoginWrapper>
      <toolS.LoginContentWrapper>
        <toolS.LoginTitle>Login</toolS.LoginTitle>
        <toolS.Name>{name}</toolS.Name>
        <toolS.Line />
        <toolS.LoginBox type="main">
          {type === "login" ? (
            <toolS.Div>
              <toolS.Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <toolS.Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <toolS.Label>
                <input
                  type="checkbox"
                  checked={isAutoLogin}
                  onChange={(e) => {
                    setIsAutoLogin(e.target.checked); 
                    // setIsAuto(e.target.checked);
                  }}
                />
                자동 로그인
              </toolS.Label>
              <toolS.LoginBtn style={{ marginTop: "40px" }}>
                <button onClick={handleLogin}>로그인</button>
              </toolS.LoginBtn>
              <toolS.FindBtn>
                <button onClick={handleSignup}>회원가입</button>|
                <button onClick={Change}>비밀번호 찾기</button>
              </toolS.FindBtn>
            </toolS.Div>
          ) : (
            <toolS.Div>
              <toolS.Input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <toolS.LoginBtn
                style={{ marginBottom: "60px", marginTop: "48px" }}
              >
                <button onClick={handleEmail}>이메일 보내기</button>
              </toolS.LoginBtn>
            </toolS.Div>
          )}
        </toolS.LoginBox>
        <toolS.Line />
        {type === "login" && (
          <toolS.SocialBtn>
            <LoginNaver />
            <LoginKakao />
          </toolS.SocialBtn>
        )}
      </toolS.LoginContentWrapper>
    </toolS.LoginWrapper>
  );
}

export default LoginMainTool;
