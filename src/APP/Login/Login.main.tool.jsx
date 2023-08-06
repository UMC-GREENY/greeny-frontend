import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as toolS from "./Styled/Login.main.tool.styles";
import request from "./../Api/request";
import { ACCESS_TOKEN, REFREASH_TOKEN, refreshToken } from "./../Api/request";


function LoginMainTool({ type, name }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const handleEmail = {
    
  };

  const handleLogin = async () => {
    const requestData = {
      "email": email,
      "password": password,
      "isAuto": isAutoLogin,
    };
  
    // try {
    //   console.log("requestData@", requestData);
    //   const response = await request.post("/api/auth/sign-in/general", requestData, {
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8",
    //     },
    //   });
    //   console.log("ww");
    //   console.log("응답 데이터:", response);
    // } catch (error) {
    //   console.error("에러:", error);
    // }
    await request.post('/api/auth/sign-in/general', requestData)    
      .then(res => {
          console.log('res: ', res)
          // console.log('accessToken : ', res['accessToken'])
          // const token = res['data']['accessToken'].replace("Bearer", "").trim();
          const { accessToken, refreshToken } = res.data;
          // console.log('token : ', token)
          localStorage.setItem(ACCESS_TOKEN, accessToken)
          localStorage.setItem(REFREASH_TOKEN, refreshToken);
          // 헤더에 토큰 잘 들어가는지 확인 
          // console.log("headers:", request.defaults.headers)
          console.log('accessToken',accessToken);
          console.log('refreshToken',refreshToken);

          if (res['isSuccess']) {
              alert('로그인에 성공했습니다.')
              navigate('/');

          } else {
              alert('등록되지 않은 회원입니다.')
          }
      })
      .catch(error => {
          console.log(error);
          alert('등록되지 않은 회원입니다. 다시 시도해주세요 ')
      })
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
                  onChange={(e) => setIsAutoLogin(e.target.checked)}
                />
                자동 로그인
              </toolS.Label>
              <toolS.LoginBtn style={{ marginTop: "40px" }}>
                <button onClick={handleLogin}>로그인</button>
              </toolS.LoginBtn>
              <toolS.FindBtn>
                <button onClick={handleSignup}>회원가입</button>|
                <button
                  onClick={() =>
                    navigate("/login", {
                      state: { type: "find", name: "비밀번호 찾기" },
                    })
                  }
                >
                  비밀번호 찾기
                </button>
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
            <toolS.InputBtn
              type="button"
              // onClick=""
              style={{ background: `url("Login/naverLogin.png")` }}
            ></toolS.InputBtn>
            <toolS.InputBtn
              type="button"
              // onClick=""
              style={{ background: `url("Login/kakaoLogin.png")` }}
            ></toolS.InputBtn>
          </toolS.SocialBtn>
        )}
      </toolS.LoginContentWrapper>
    </toolS.LoginWrapper>
  );
}

export default LoginMainTool;