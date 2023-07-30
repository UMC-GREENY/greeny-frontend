import styled from 'styled-components';

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
  align-items: center;
  margin-top: 104px;
  margin-left: 240px;
  margin-right: 240px;
  width: 1270px;
`;

export const JoinHeading = styled.div`
  color: #649D17;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  
  font-family: "New York";
  font-size: 48px;
`;

export const Label = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  padding-bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  
  font-size: 24px;
  font-family: "regular";
  font-weight: normal;
  border-bottom: 1px solid black;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  background-color: #262626;
  width: 660px;
  height: 1px;
  margin-bottom: 60px;
`;

export const InfoBox = styled.div`
  padding: 20px;
`;

//체크 컨테이너
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

//체크박스
export const Checkbox = styled.input`
  margin-right: 5px;
`;

//체크박스 목록 이름
export const CheckboxLabel = styled.label`
  margin-left: 5px;
  font-color: #E6E6E6;
`;
//전체 동의
export const FstCheckboxLabel = styled.div`
	margin-left: 5px;  
	font-weight: bold;
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

//다음단계 버튼
export const NextButton = styled.button`
	background-color: #649D17;
	color: white;
  padding: 4px 16px;
  margin-left: 25px;
	border-radius: 3px;
	border: none;
  width: 224px;
  height: 44px;
`;

//약관 내용 박스
export const ContentsBox = styled.div`
	border:solid 1px #E6E6E6;
  padding: 10px;
	margin-bottom: 10px;
	margin-left: 30px;
  color: grey;
`;
