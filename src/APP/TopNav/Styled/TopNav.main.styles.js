import styled from "styled-components";
import * as tokens from "../../tokens";

export const TopNavWrapper = styled.div`
	width: 100vw;
	height: 70px;

	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;
	background-color: ${tokens.colors.green_main};

	z-index: 100;
`;

export const TopNavContentWrapper = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const TopNavLogo = styled.span`
	width: 300px;
	height: fit-content;
	${tokens.typography.display_1}
`;

export const TopNavInfoWrapper = styled.span`
	width: 300px;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${tokens.typography.s_title}
`;

export const TopNavContents = styled.div`
	position: relative;
	width: 33%;
	height: 100%;

	cursor: pointer;
`;
