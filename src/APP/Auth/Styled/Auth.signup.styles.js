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
  align-items: left;
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


// 라벨들 (입력칸의 x좌표 맞춰주기 위해)-----------------------------------
export const EmailLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 103px;
`;

export const PwdLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 87px;
`;

export const PwdConfirmLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 51px;
`;

export const NameLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 119px;
`;

export const NumLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 67px;
`;

export const BirthLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 87px;
`;
//---------------------------------------------------------------

//기본정보 각각 박스
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

//이메일 입력
export const EmailInput = styled.input`
  
  padding: 4px;
  border-radius: 3px;
	border:solid 1px grey;
	margin-right: 10px;
  width: 300px;
  height: 21px;
`;

//일반 입력
export const Input = styled.input`
	padding: 4px;
  border-radius: 3px;
	border:solid 1px grey;
  width: 300px;
  height: 21px;
`;

export const Select = styled.select`
	padding: 4px;
  margin-left: 10px;
  width: 320px;
  height: 36px;
`;

// export const Button = styled.button`
// 	padding: 4px 16px;
// 	margin-left: 10px;
// 	border-radius: 3px;
// `;

//이메일 인증하기 버튼
export const ConfirmButton = styled.button`
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

//회원가입 버튼
export const SignupButton = styled.button`
	background-color: #649D17;
	color: white;
  padding: 4px 16px;
  margin-left: 25px;
	border-radius: 3px;
	border: none;
  width: 224px;
  height: 44px;
`;