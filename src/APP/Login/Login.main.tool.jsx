import { useNavigate } from "react-router-dom";
import * as toolS from "./Styled/Login.main.tool.styles";
function LoginMainTool({ type, name }) {
  const navigate = useNavigate();
  return (
    <toolS.LoginWrapper>
      <toolS.LoginContentWrapper>
        <toolS.LoginTitle>Login</toolS.LoginTitle>
        <toolS.Name>{name}</toolS.Name>
        <toolS.Line />
        <toolS.LoginBox type="main">
          {type === "login" ? (
            <toolS.Div>
              <toolS.Input type="email" placeholder="이메일" />
              <toolS.Input type="password" placeholder="비밀번호" />
              <toolS.Label>
                <input type="radio" />
                자동 로그인
              </toolS.Label>
              <toolS.LoginBtn style={{ marginTop: "40px" }}>
                <button>로그인</button>
              </toolS.LoginBtn>
              <toolS.FindBtn>
                <button>회원가입</button>|
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
              <toolS.Input type="email" placeholder="이메일"></toolS.Input>
              <toolS.LoginBtn
                style={{ marginBottom: "60px", marginTop: "48px" }}
              >
                <button>이메일 보내기</button>
              </toolS.LoginBtn>
            </toolS.Div>
          )}
        </toolS.LoginBox>
        <toolS.Line />
        {type === "login" && (
          <toolS.SocialBtn>
            <toolS.InputBtn
              type="button"
              onClick=""
              style={{ background: `url("Login/naverLogin.png")` }}
            ></toolS.InputBtn>
            <toolS.InputBtn
              type="button"
              onClick=""
              style={{ background: `url("Login/kakaoLogin.png")` }}
            ></toolS.InputBtn>
          </toolS.SocialBtn>
        )}
      </toolS.LoginContentWrapper>
    </toolS.LoginWrapper>
  );
}
export default LoginMainTool;
