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
import home from "./APP/Home/Home.main";

function App() {
	const MainScreen = styled.div`
		// position: fixed;
		top: 80px;
		width: 100%;
		max-width: 800px;
		min-height: 100vh;
		height: fit-content;
		background-color: ${tokens.colors.grey_50};
	`;
	return (
		<div className="App">
			<TopNav></TopNav>
			<MainScreen>
				<Routes>
					<Route path="/" element={<home />} />

					<Route path="*" element={<home />} />
				</Routes>
			</MainScreen>
		</div>
	);
}

export default App;
