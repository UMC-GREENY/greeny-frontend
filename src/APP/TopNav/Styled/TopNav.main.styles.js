import styled from "styled-components";
import * as tokens from "../../tokens";

export const TopNavWrapper = styled.div`
	width: 100vw;
	height: 100px;

	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	z-index: 100;
`;

export const TopNavContentWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${(props) =>
		props.type == "main"
			? `background-color: ${tokens.colors.green_main};`
			: `background-color: #ffffff; color: #000000;`}

	z-index: 100;
`;
export const TopNavLogo = styled.span`
	width: 600px;
	height: fit-content;
	margin-left: 10vw;
	text-align: left;
	${tokens.typography.display_1}
`;

export const SubNavItemWrapper = styled.span`
	width: 450px;
	height: fit-content;
	margin-left: 10vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-align: left;
	${tokens.typography.s_title};
`;

export const TopNavInfoWrapper = styled.span`
	width: 300px;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 10vw;

	${tokens.typography.s_title}
`;

export const TopNavContents = styled.div`
	position: relative;
	width: 33%;
	height: 100%;

	cursor: pointer;
`;

export const TopNavSubContents = styled.div`
	position: relative;
	width: fit-content;
	height: 100%;

	cursor: pointer;
`;

export const TopNavInputWrapper = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const TopNavInputBox = styled.input`
	width: 80%;
	height: 20px;

	border: none;
	border-bottom: 1px solid #000000;
	outline: none;
`;
export const TopNavInputIcon = styled.div`
	width: 30px;
	height: 50px;

	background-image: url("/topnavbar/search.png");
	background-size: 25px 25px;
	background-position: center;
	background-repeat: no-repeat;
`;

export const TopNavHamburger = styled.div`
	width: 30px;
	height: 30px;

	background-image: url("/topnavbar/hamburger.png");
	background-size: 40px 40px;
	background-position: center;
	background-repeat: no-repeat;
`;
