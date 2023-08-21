import styled from "styled-components";
import * as tokens from "../../tokens";

export const SideNavWrapper = styled.div`
    /* margin-left: 69px;
    height: 272px;
    width: 190px; */

    ${(props) =>
    props.type === "main"
      ? `
            width: 163px;
            height: 255px;
            padding-top: 94px;
            padding-left: 69px;
            gap: 20px;

`
      : ` 
            margin-left: 69px;
            height: 272px;
            width: 190px;
            `}
`;



export const SideNavSearchWrapper = styled.div`
    width: 126px;
    height: 44px;
    display: flex;
`

export const SideNavInputBox = styled.input`
	width: 80%;
	height: 20px;
    margin-top: 13px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 4px;
	border: none;
	outline: none;
    background-color: transparent;
    border-bottom: ${props => (props.type === 'main' ? '1px solid #FFFFFF' : '1px solid #000000')};
`;

export const SideNavInputIcon = styled.div`
	width: 30px;
	height: 50px;
	background-image: ${props => (props.type === 'main' ? 'url("/topnavbar/searchIconWhite.png");' : 'url("/topnavbar/searchIcon.png");')};
	background-size: 25px 25px;
	background-position: center;
	background-repeat: no-repeat;
`;

export const SideNavList = styled.div`
    display: flex;
    height: 36px;
    padding: 10px;
    ${tokens.typography.s_title}
    margin-top: 20px;
    font-family: New York;
    color: ${props => (props.type === 'main' ? '#FFFFFF' : '')}
    cursor: pointer;
`