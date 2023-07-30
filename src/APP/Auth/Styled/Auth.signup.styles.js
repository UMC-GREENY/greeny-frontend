import styled from 'styled-components';

export const JoinHeading = styled.h2`
  font-size: 32px;
  color: #649D17;
  text-align: left;
`;

export const BasicInfoHeading = styled.h3`
  font-size: 16px;
  text-align: left;
`;

//기본정보 박스
export const InfoBox = styled.div`
  border-top: 1px solid #000;
  padding: 20px;
`;

// 라벨들 (입력칸의 x좌표 맞춰주기 위해)-----------------------------------
export const EmailLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 83px;
`;

export const PwdLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 67px;
`;

export const PwdConfirmLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 31px;
`;

export const NameLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 99px;
`;

export const NumLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 47px;
`;

export const BirthLabel = styled.label`
  display: block;
  margin-bottom: 5px;
	margin-right: 67px;
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
  flex: 0.4;
  padding: 4px;
  border-radius: 3px;
	border:solid 1px grey;
	margin-right: 5px;
`;

//일반 입력
export const Input = styled.input`
	padding: 4px;
  border-radius: 3px;
	border:solid 1px grey;
`;

export const Select = styled.select`
	padding: 4px;
  margin-left: 5px;
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
  margin-left: 10px;
	border-radius: 3px;
	border: none;
`;

//취소하기 버튼
export const CancelButton = styled.button`
	background-color: grey;
	color: white;
  padding: 4px 16px;
  margin-left: 10px;
	border-radius: 3px;
	border: none;
`;

//회원가입 버튼
export const SignupButton = styled.button`
	background-color: #649D17;
	color: white;
  padding: 4px 16px;
  margin-left: 10px;
	border-radius: 3px;
	border: none;
`;