import React, { useEffect, useState, useRef } from "react";
import * as landingS from "./Styled/Home.main.landing.picture.styles";
import request from "../Api/request";
import { refreshToken } from "../Api/request";
import { useRecoilState } from 'recoil';
import { isAutoState } from "../Custom/Recoil/Custom.recoil.auto";
function MainLandigPicture() {
	// const [isSuccess, setIsSuccess] = useState(null);
	// const [isAuto, setIsAuto] = useRecoilState(isAutoState); // recoil 자동로그인 여부

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	  try {
	// 		const response = await request.get('/api/auth/auto/sign-in');
	// 		console.log('@@@@@', response.data.isAuto);
	// 		setIsAuto(response.data.isAuto)
	// 	  } catch (error) {
	// 			console.error('오류:', error);
	// 	  }
	// 	}
	
	// 	fetchData();
	// }, []);
	return (
		<landingS.MainPicWrapper>
			<landingS.MainPicContentWrapper>
				<landingS.MainPicContent type="main">
					친환경적인<br></br>
					라이프스타일 구축을 위해<br></br>
					노력하는 <span style={{ fontFamily: "Merriweather" }}>GREENY</span>
				</landingS.MainPicContent>
				<landingS.MainPicContent type="sub">
					<u style={{ marginRight: "10px" }}>더 알아보기</u> {">"}
				</landingS.MainPicContent>
			</landingS.MainPicContentWrapper>
		</landingS.MainPicWrapper>
	);
}

export default MainLandigPicture;
