import styled from "styled-components";
import * as tokens from "../../tokens";

export const MainPicWrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 400px;
	padding: 0 10vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	background-image: url("/home/mainPicture.png");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	background-color: #ffffff;

	z-index: 10;
`;

export const MainPicContentWrapper = styled.div`
	width: 50%;
	height: 60%;
	text-align: left;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	color: #ffffff;
`;

export const MainPicContent = styled.div`
	${(props) =>
		props.type === "main"
			? `font-family: ${tokens.typography.headline_1.fontFamily};
    font-weight: ${tokens.typography.headline_1.fontWeight};
    font-size: ${tokens.typography.headline_1.fontSize};`
			: `font-family: ${tokens.typography.subtitle_1.fontFamily};
    font-weight: ${tokens.typography.subtitle_1.fontWeight};
    font-size: ${tokens.typography.subtitle_1.fontSize};`}
`;
