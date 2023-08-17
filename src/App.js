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
import TopNav from './APP/TopNav/TopNav.main';
import Home from './APP/Home/Home.main';
import Mypage from './APP/Home/MyPages/Mypage1';
import Mypageinfo from './APP/Home/MyPages/Mypage.basicinfo';
import Likepage from './APP/Home/Like/Likepage.main';


import SideNav from "./APP/SideNav/SideNav.main";
import DetailPage from "./APP/DetailPage/DetailPage.main";
import SignupSelect from "./APP/Auth/Auth.signup.select";
import SignupAgree from "./APP/Auth/Auth.signup.agree";
import Signup from "./APP/Auth/Auth.signup";
import Login from "./APP/Login/Login.main";
import LifeTip from "./APP/LifeTip/LifeTip.main";
import LifeTipDe from "./APP/LifeTip/LifeTipDe.main";
import CommunityMain from "./APP/Comunity/Community.main";
import Post from "./APP/Comunity/Community.main.post";
import WritePost from "./APP/Comunity/Community.main.post.write";

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
      {/* <SideNav></SideNav> */}
      <MainScreen>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/select' element={<SignupSelect />} />
          <Route path='/agree' element={<SignupAgree />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/community' element={<CommunityMain />} />
          <Route path='/post' element={<Post />} />
          <Route path='/write_post' element={<WritePost />} />
          <Route path='/lifeTip' element={<LifeTip />} />
          <Route path='/lifeTip_de' element={<LifeTipDe />} />
          <Route path='/detailPage' element={<DetailPage />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/likepage' element={<Likepage />} />
          <Route path='/mypageinfo' element={<Mypageinfo />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </MainScreen>
    </div>
  );
}

export default App;
