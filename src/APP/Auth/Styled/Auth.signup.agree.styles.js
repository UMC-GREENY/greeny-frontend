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

export const InfoBox = styled.div`
  border-top: 1px solid #000;
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
`;
//전체 동의
export const FstCheckboxLabel = styled.label`
  margin-left: 5px;
  font-weight: bold;
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

//다음단계 버튼
export const NextButton = styled.button`
	background-color: #649D17;
	color: white;
  padding: 4px 16px;
  margin-left: 10px;
	border-radius: 3px;
	border: none;
`;

//약관 내용 박스
export const ContentsBox = styled.div`
	border:solid 1px grey;
  padding: 10px;
	margin-bottom: 10px;
	margin-left: 30px;
`;
