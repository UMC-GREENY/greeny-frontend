import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "./Styled/Auth.signup.styles"

function Signup() {

  const location = useLocation();
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    const optionalChecked = location.state.optionalChecked;
    const advertisingChecked = location.state.advertisingChecked;
    console.log("optionalChecked",optionalChecked);
    console.log("advertisingChecked",advertisingChecked);

  };

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Join</itemS.Title>
        <itemS.SubTitle>기본정보</itemS.SubTitle>
        <itemS.InfoBox>
          <itemS.InputContainer>
            <itemS.EmailLabel>이메일</itemS.EmailLabel>
            <itemS.EmailInput
              type="text"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>@</span>
            <itemS.Select>
              <option value="직접입력">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
            </itemS.Select>
            <itemS.ConfirmButton>이메일 인증하기</itemS.ConfirmButton>
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.PwdLabel>비밀번호</itemS.PwdLabel>
            <itemS.Input
              type="password"
              placeholder="특수문자 1개 이상, 영문+숫자, 15자 이내"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.PwdConfirmLabel>비밀번호 확인</itemS.PwdConfirmLabel>
            <itemS.Input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.NameLabel>이름</itemS.NameLabel>
            <itemS.Input
              type="text"
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.NumLabel>휴대폰 번호</itemS.NumLabel>
            <itemS.Input
              type="text"
              placeholder="000-0000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.BirthLabel>생년월일</itemS.BirthLabel>
            <itemS.Input
              type="text"
              placeholder="0000-00-00"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </itemS.InputContainer>
          <itemS.ButtonContainer>
            <itemS.CancelButton>취소하기</itemS.CancelButton>
            <itemS.SignupButton onClick={handleSubmit}>회원가입</itemS.SignupButton>
          </itemS.ButtonContainer>
        </itemS.InfoBox>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default Signup;
