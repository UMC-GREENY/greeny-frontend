import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Auth.signup.agree.styles"

function SignupAgree() {
    const checkboxTexts = [
      'GREENY 모든 약관을 확인하고 전체 동의합니다.',
      '서비스 이용 동의 (필수)',
      '개인정보 수집 및 이용 동의 (필수)',
      '개인정보 수집 및 이용 동의 (선택)',
      '광고성 정보 수신 동의 (선택)',
    ];

    const navigate = useNavigate();

		const handleSubmit = (e) => {
			// e.preventDefault();
			navigate('/signup');
		};
  
    const [checkedItems, setCheckedItems] = useState(
      new Array(checkboxTexts.length).fill(false)
    );
  
    const handleCheckbox1Change = () => {
      setCheckedItems((prev) => [!prev[0], ...prev.slice(1)]);
    };
  
    const handleCheckbox2Change = () => {
      setCheckedItems((prev) => [prev[0], !prev[1], ...prev.slice(2)]);
    };
  
    // Create similar functions for the other checkboxes...
  
    return (
      <itemS.SignupWrapper>
        <itemS.SignupContentWrapper>
          <itemS.Title>Join</itemS.Title>
          <itemS.SubTitle>약관동의</itemS.SubTitle>
          <itemS.InfoBox>
            <itemS.CheckboxContainer>
              <itemS.Checkbox
                type="checkbox"
                checked={checkedItems[0]}
                onChange={handleCheckbox1Change}
              />
              <itemS.FstCheckboxLabel>{checkboxTexts[0]}</itemS.FstCheckboxLabel>
            </itemS.CheckboxContainer>
            <itemS.CheckboxContainer>
              <itemS.Checkbox
                type="checkbox"
                checked={checkedItems[1]}
                onChange={handleCheckbox2Change}
              />
              <itemS.CheckboxLabel>{checkboxTexts[1]}</itemS.CheckboxLabel>
            </itemS.CheckboxContainer>
            <itemS.ContentsBox>
            약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 
            </itemS.ContentsBox>
            <itemS.CheckboxContainer>
              <itemS.Checkbox
                type="checkbox"
                checked={checkedItems[2]}
                onChange={handleCheckbox2Change}
              />
              <itemS.CheckboxLabel>{checkboxTexts[2]}</itemS.CheckboxLabel>
            </itemS.CheckboxContainer>
            <itemS.ContentsBox>
            약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 
            </itemS.ContentsBox>
            <itemS.CheckboxContainer>
              <itemS.Checkbox
                type="checkbox"
                checked={checkedItems[3]}
                onChange={handleCheckbox2Change}
              />
              <itemS.CheckboxLabel>{checkboxTexts[3]}</itemS.CheckboxLabel>
            </itemS.CheckboxContainer>
            <itemS.ContentsBox>
            약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 
            </itemS.ContentsBox>
            <itemS.CheckboxContainer>
              <itemS.Checkbox
                type="checkbox"
                checked={checkedItems[4]}
                onChange={handleCheckbox2Change}
              />
              <itemS.CheckboxLabel>{checkboxTexts[4]}</itemS.CheckboxLabel>
            </itemS.CheckboxContainer>
            <itemS.ContentsBox>
            약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 약관 내용 
            </itemS.ContentsBox>
            <itemS.ButtonContainer>
              <itemS.CancelButton>취소하기</itemS.CancelButton>
              <itemS.NextButton onClick={handleSubmit}>다음단계</itemS.NextButton>
            </itemS.ButtonContainer>
          </itemS.InfoBox>
        </itemS.SignupContentWrapper>
      </itemS.SignupWrapper>
    );
  }
  
  export default SignupAgree;
  