import { useLocation } from "react-router-dom";
import LoginMainTool from "./Login.main.tool";

function Login() {
  const location = useLocation();
  console.log(location);
  const type = location.state.type;
  const name = location.state.name;
  return <LoginMainTool type={type} name={name}></LoginMainTool>;
}
export default Login;
