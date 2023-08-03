import styled from 'styled-components';
import * as tokens from "../../tokens";

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SignupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 104px;
  margin-left: 240px;
  margin-right: 240px;
  width: 1270px;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 48px;
  margin: 0px;
  font-family: "New York";
  font-weight: normal;
  justify-content: flex-start;
  margin-top: 104px;
  ${(props) => `color:${tokens.colors.green_main2}`}
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1273px;
  font-family: "New York";
  font-size: 24px;
	margin-top: 36px;
	padding-bottom: 16px;
  ${(props) =>
    ` border-bottom:1px solid ${tokens.colors.grey_15}`}
`;

export const InfoBox = styled.div`
  padding: 20px;
`;


// 라벨들-----------------------------------
export const TitleLabel = styled.label`
  display: block;
  width: 170px;
	text-align: left;
	
`;

export const FileLabel = styled.label`
  display: block;
  width: 170px;
	text-align: left;
	
`;

export const ContentLabel = styled.label`
  display: block;
  width: 170px;
	text-align: left;
`;

//---------------------------------------------------------------

//입력칸들 박스
export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
	vertical-align: top; 
`;

//제목 입력
export const TitleInput = styled.input`
  padding: 4px;
  border-radius: 3px;
	border:solid 1px #CCCCCC;
  width: 800px; 
  height: 21px;
`;

//파일 첨부
export const FileInput = styled.input`
	padding: 4px;
  border-radius: 3px;
	border:solid 1px #CCCCCC;
  width: 824px;
  height: 21px;
`;

//본문 입력
export const ContentInput = styled.textarea`
	padding: 4px;
  border-radius: 3px;
	border:solid 1px #CCCCCC;
  width: 1067px;
  height: 326px;
	
`;

export const Select = styled.select`
	padding: 4px;
  margin-left: 10px;
  width: 320px;
  height: 36px;
`;

//첨부 파일 버튼
export const FileSendButton = styled.button`
	background-color: black;
	color: white;
  padding: 4px 16px;
  margin-left: 20px;
	border-radius: 3px;
	border: none;
  width: 141px;
  height: 36px;
`;

export const ButtonContainer = styled.button`
  background-color: white;
	margin: 60px;
  border: none;
`;


//취소하기 버튼
export const CancelButton = styled.button`
	background-color: #E6E6E6;
	color: white;
  padding: 4px 16px;
  margin-right: 25px;
	border-radius: 3px;
	border: none;
  width: 224px;
  height: 44px;
`;

//작성하기 버튼
export const WriteButton = styled.button`
	background-color: #649D17;
	color: white;
  padding: 4px 16px;
  margin-left: 25px;
	border-radius: 3px;
	border: none;
  width: 224px;
  height: 44px;
`;