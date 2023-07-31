import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Router,
  useLocation,
  Routes,
  useNavigate,
} from "react-router-dom";
//styles
import styled from "styled-components";
import * as tokens from "./APP/tokens";

//Main components
import TopNav from "./APP/TopNav/TopNav.main";
import Home from "./APP/Home/Home.main";
import SignupSelect from "./APP/Auth/Auth.signup.select";
import SignupAgree from "./APP/Auth/Auth.signup.agree";
import Signup from "./APP/Auth/Auth.signup";
import Login from "./APP/Login/Login.main";
import CommunityMain from "./APP/Comunity/Community.main";
import Post from "./APP/Comunity/Community.main.post";

function App() {
  const MainScreen = styled.div`
    position: absolute;
    top: 100px;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;

		// background-color: ${tokens.colors.grey_100};
		z-index: 50;
	`;
	return (
		<div className="App">
			<TopNav></TopNav>
			<MainScreen>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/select" element={<SignupSelect />} />
					<Route path="/agree" element={<SignupAgree />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/community" element={<CommunityMain />} />
					<Route path="/post" element={<Post />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</MainScreen>
		</div>
	);
}

export default App;
