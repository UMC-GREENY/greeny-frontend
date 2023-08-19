import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "./Styled/Auth.signup.agree.styles";
import axios from 'axios';

function SignupAgree() {
  const checkboxTexts = [
    'GREENY의 모든 약관에 동의합니다.',
    '서비스 이용에 대한 동의 (필수)',
    '개인정보 수집 및 이용 동의 (필수)',
    '개인정보 수집 및 이용에 대한 동의 (선택)',
    '광고 정보 수신 동의 (선택)',
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { email, type } = location.state; 

  const [checkedItems, setCheckedItems] = useState(
    new Array(checkboxTexts.length).fill(false)
  );

  const [allRequiredChecked, setAllRequiredChecked] = useState(false); //필수 항목들

  const [optionalChecked, setOptionalChecked] = useState(false); // 선택 항목1
  const [advertisingChecked, setAdvertisingChecked] = useState(false); //선택 항목2

  const handleCheckboxChange = (index) => {
    if (index === 0) {
      const newCheckedItems = new Array(checkboxTexts.length).fill(!checkedItems[0]);
      setCheckedItems(newCheckedItems);
    } else {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      if (!newCheckedItems[index]) {
        newCheckedItems[0] = false; // 다른 체크박스 중 하나라도 체크되지 않았다면 첫 번째 체크박스도 체크 해제
      }
      setCheckedItems(newCheckedItems);
    }
  };
  useEffect(() => {
    const requiredCheckboxes = checkedItems.slice(1, 3);
    const allRequiredChecked = requiredCheckboxes.every(item => item);
    setAllRequiredChecked(allRequiredChecked);
  }, [checkedItems]);

  const handleNextStep = () => { // 일반 회원가입 시 다음단계 버튼 동작
    if (checkedItems.slice(1, 3).every(item => item)) {
      setOptionalChecked(checkedItems[3]);
      setAdvertisingChecked(checkedItems[4]);

      navigate('/signup', {
        state: {
          optionalChecked: checkedItems[3],
          advertisingChecked: checkedItems[4]
        }
      });
    }
  };

  const handleSignUp = async () => { //소셜 로그인 약관동의
    const agreementData = {
      email: email,
      personalInfo: checkedItems[3],
      thirdParty: checkedItems[4],
    };

    const agreementResponse = await axios.post('/api/auth/sign-up/agreement', agreementData);
    console.log("agreementResponse", agreementResponse);

    if (agreementResponse.isSuccess) {
      console.log("동의 양식 제출에 성공했습니다.");
      navigate("/");
    } else {
      console.log("동의 양식 제출에 실패했습니다.");
    }
  };

  

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>가입하기</itemS.Title>
        <itemS.SubTitle>약관 동의</itemS.SubTitle>
        <itemS.InfoBox>
          <itemS.CheckboxContainer>
            <itemS.Checkbox
              type="checkbox"
              checked={checkedItems[0]}
              onChange={() => handleCheckboxChange(0)}
            />
            <itemS.FstCheckboxLabel>{checkboxTexts[0]}</itemS.FstCheckboxLabel>
          </itemS.CheckboxContainer>
          <itemS.CheckboxContainer>
            <itemS.Checkbox
              type="checkbox"
              checked={checkedItems[1]}
              onChange={() => handleCheckboxChange(1)}
            />
            <itemS.CheckboxLabel>{checkboxTexts[1]}</itemS.CheckboxLabel>
          </itemS.CheckboxContainer>
          <itemS.ContentsBox>
            이용약관 내용 이용약관 내용 이용약관 내용 이용약관 내용 이용약관 내용 이용약관 내용 이용약관 내용 이용약관 내용
          </itemS.ContentsBox>
          <itemS.CheckboxContainer>
            <itemS.Checkbox
              type="checkbox"
              checked={checkedItems[2]}
              onChange={() => handleCheckboxChange(2)}
            />
            <itemS.CheckboxLabel>{checkboxTexts[2]}</itemS.CheckboxLabel>
          </itemS.CheckboxContainer>
          <itemS.ContentsBox>
            개인정보 수집 및 이용 내용 개인정보 수집 및 이용 내용 개인정보 수집 및 이용 내용 개인정보 수집 및 이용 내용
          </itemS.ContentsBox>
          <itemS.CheckboxContainer>
            <itemS.Checkbox
              type="checkbox"
              checked={checkedItems[3]}
              onChange={() => handleCheckboxChange(3)}
            />
            <itemS.CheckboxLabel>{checkboxTexts[3]}</itemS.CheckboxLabel>
          </itemS.CheckboxContainer>
          <itemS.ContentsBox>
            개인정보 수집 및 이용 동의 (선택) 개인정보 수집 및 이용 동의 (선택) 개인정보 수집 및 이용 동의 (선택)
          </itemS.ContentsBox>
          <itemS.CheckboxContainer>
            <itemS.Checkbox
              type="checkbox"
              checked={checkedItems[4]}
              onChange={() => handleCheckboxChange(4)}
            />
            <itemS.CheckboxLabel>{checkboxTexts[4]}</itemS.CheckboxLabel>
          </itemS.CheckboxContainer>
          <itemS.ContentsBox>
            광고 정보 수신 동의 (선택) 광고 정보 수신 동의 (선택) 광고 정보 수신 동의 (선택)
          </itemS.ContentsBox>
          <itemS.ButtonContainer>
            <itemS.CancelButton>취소하기</itemS.CancelButton>
            {type === "social" && (
              <itemS.NextButton onClick={handleSignUp}>회원가입</itemS.NextButton>
            )}
            {type === "general" && (
              <itemS.NextButton disabled={!allRequiredChecked} onClick={handleNextStep}>
                다음단계
              </itemS.NextButton>
            )}
          </itemS.ButtonContainer>
        </itemS.InfoBox>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default SignupAgree;
