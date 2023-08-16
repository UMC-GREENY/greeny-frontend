import request from "../Api/request";
import * as toolS from "./Styled/Login.main.tool.styles";
function LoginKakao() {
  const Rest_api_key = "773892aa9bfe0112ddbc27fe1c13f737"; //REST API KEY
  const redirect_uri = "http://localhost:3000/login"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <toolS.InputBtn
      type="button"
      onClick={handleLogin}
      style={{ background: `url("/Login/kakaoLogin.png")` }}
    ></toolS.InputBtn>
  );
}
export default LoginKakao;
