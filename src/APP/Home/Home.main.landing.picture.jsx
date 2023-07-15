import React, { useEffect, useState, useRef } from "react";
import * as landingS from "./Styled/Home.main.landing.picture.styles";

function MainLandigPicture() {
	return (
		<landingS.MainPicWrapper>
			<landingS.MainPicContentWrapper>
				<landingS.MainPicContent type="main">
					친환경적인<br></br>
					라이프스타일 구축을 위해<br></br>
					노력하는 <sapn style={{ fontFamily: "Merriweather" }}>GREENY</sapn>
				</landingS.MainPicContent>
				<landingS.MainPicContent type="sub">
					<u style={{ marginRight: "10px" }}>더 알아보기</u> {">"}
				</landingS.MainPicContent>
			</landingS.MainPicContentWrapper>
		</landingS.MainPicWrapper>
	);
}

export default MainLandigPicture;
