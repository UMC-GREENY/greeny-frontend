import React, { useEffect, useState, useRef } from "react";
import * as itemS from "./Styled/Home.main.item.styles";

function MainItem() {
	return (
		<itemS.MainItemWrapper>
			메인 화면 꾸며주세요! 일부러 색상 넣어놨으니, styled component확인하면서
			수정부탁드립니다 *^^*
		</itemS.MainItemWrapper>
	);
}

export default MainItem;
