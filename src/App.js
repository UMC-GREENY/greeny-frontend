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
import Login from "./APP/Login/Login.main";

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

          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainScreen>
    </div>
  );
}

export default App;
