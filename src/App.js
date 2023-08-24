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
import Mypage from "./APP/Home/MyPages/Mypage1";
import Mypageinfo from "./APP/Home/MyPages/Mypage.basicinfo";
import Likepage from "./APP/Home/Like/Likepage.main";
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
import CommunityDetail from "./APP/Comunity/Community.detail";
import Product from "./APP/Category/Category.main.product.jsx";
import Store from "./APP/Category/Category.main.store";
import Search from "./APP/Search/Search.main";
import Review from "./APP/DetailPage/DetailPage.main.review";

function App() {
  const MainScreen = styled.div`
    position: relative;
    top: 100px;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
  `;
  return (
    <div className="App">
      <TopNav></TopNav>
      <MainScreen>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/store" element={<Store />} />

          <Route path="*" element={<Home />} />
          <Route
            path="search"
            element={
              <>
                <SideNav> </SideNav>
                <Search />
              </>
            }
          />
          <Route
            path="/select"
            element={
              <>
                <SideNav></SideNav>
                <SignupSelect />
              </>
            }
          />
          <Route
            path="/agree"
            element={
              <>
                <SideNav></SideNav>
                <SignupAgree />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SideNav></SideNav>
                <Signup />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <SideNav></SideNav>
                <Login />
              </>
            }
          />
          <Route
            path="/community"
            element={
              <>
                <SideNav></SideNav>
                <CommunityMain />
              </>
            }
          />
          <Route
            path="/post"
            element={
              <>
                <SideNav></SideNav>
                <Post />
              </>
            }
          />
          <Route
            path="/write_post"
            element={
              <>
                <SideNav></SideNav>
                <WritePost />
              </>
            }
          />
          <Route
            path="/lifeTip"
            element={
              <>
                <SideNav></SideNav>
                <LifeTip />
              </>
            }
          />
          <Route
            path="/lifeTip_de"
            element={
              <>
                <SideNav></SideNav>
                <LifeTipDe />
              </>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <>
                <SideNav></SideNav>
                <DetailPage />
              </>
            }
          />
          <Route
            path="/product/:productId/review"
            element={
              <>
                <SideNav></SideNav>
                <Review />
              </>
            }
          />
          <Route
            path="/store/:storeId"
            element={
              <>
                <SideNav></SideNav>
                <DetailPage />
              </>
            }
          />
          <Route
            path="/store/review/:storeId"
            element={
              <>
                <SideNav></SideNav>
                <Review />
              </>
            }
          />
          <Route
            path="/mypage"
            element={
              <>
                <SideNav></SideNav>
                <Mypage />
              </>
            }
          />
          <Route
            path="/likepage"
            element={
              <>
                <SideNav></SideNav>
                <Likepage />
              </>
            }
          />
          <Route
            path="/mypageinfo"
            element={
              <>
                <SideNav></SideNav>
                <Mypageinfo />
              </>
            }
          />
          <Route
            path="/community/:no"
            element={
              <>
                <SideNav></SideNav>
                <CommunityDetail />
              </>
            }
          />
        </Routes>
      </MainScreen>
    </div>
  );
}

export default App;
