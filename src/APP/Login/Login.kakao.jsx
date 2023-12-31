import request from "../Api/request";
import * as toolS from "./Styled/Login.main.tool.styles";
import { useRecoilState } from "recoil";

const Rest_api_key = process.env.REACT_APP_API_KEY; //REST API KEY
const redirect_uri = process.env.REACT_APP_API_URL; //Redirect URI

function LoginKakao() {
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    localStorage.setItem("source", "kakao");
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
