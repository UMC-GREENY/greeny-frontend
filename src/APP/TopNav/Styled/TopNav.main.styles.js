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
			: `backgrond-color: #ffffff; color: #000000;`}
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
