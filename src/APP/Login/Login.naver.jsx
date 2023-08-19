import * as toolS from "./Styled/Login.main.tool.styles";

function LoginNaver() {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_API_URL;
  const STATE = "false";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    localStorage.setItem("source", "naver");
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <toolS.InputBtn
      type="button"
      onClick={NaverLogin}
      style={{ background: `url("/Login/naverLogin.png")` }}
    ></toolS.InputBtn>
  );
}
export default LoginNaver;
