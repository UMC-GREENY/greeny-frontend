import React, { useEffect, useState, useRef } from "react";
import * as landingS from "./Styled/Home.main.landing.picture.styles";
import request from "../Api/request";
import { refreshToken } from "../Api/request";
import { useRecoilState } from 'recoil';
import { isAutoState } from "../Custom/Recoil/Custom.recoil.auto";
import SideNav from "../SideNav/SideNav.main";
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
		<>
			<landingS.MainImg>
				<SideNav type='main'></SideNav>
			</landingS.MainImg>
			

		</>
	);
}

export default MainLandigPicture;
