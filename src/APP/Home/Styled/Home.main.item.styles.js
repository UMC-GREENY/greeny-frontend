import styled from "styled-components";
import * as tokens from "../../tokens";

export const MainItemWrapper = styled.div`
	position: absolute;
	top: 50vh;
	width: 100vw;
	min-height: 100vh;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	background-color: antiquewhite;
	z-index: 90;
`;
