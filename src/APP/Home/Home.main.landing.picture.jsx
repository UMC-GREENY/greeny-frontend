import React from "react";
import * as landingS from "./Styled/Home.main.landing.picture.styles";
import SideNav from "../SideNav/SideNav.main";
function MainLandigPicture() {
	return (
		<>
			<landingS.MainImg>
				<SideNav type='main'></SideNav>
				<landingS.MainText>친환경적인<br/>라이프 스타일 구축을 위해<br/>노력하는 Greeny</landingS.MainText>
			</landingS.MainImg>
		</>
	);
}

export default MainLandigPicture;
