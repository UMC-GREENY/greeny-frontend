import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Auth.signup.select.styles";
import naverLogo from './naver-logo.png';
import kakaoLogo from './kakao-logo.png';

function Select() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // e.preventDefault();
    navigate('/agree');
  };
  // Rest of the component code...

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.JoinHeading>Join</itemS.JoinHeading>
        <itemS.Label>회원가입</itemS.Label>
        <itemS.InfoBox>
          {/* Container to align buttons to the left */}
          <itemS.ButtonContainer>
            <itemS.SignupButton onClick={handleSubmit}>일반 회원가입</itemS.SignupButton>
            <itemS.InputBtn 
              type="button"
              onClick={() => {/* Handle Naver signup button click */}}
              style={{ backgroundImage: `url(${naverLogo})` }}
            />
            <itemS.InputBtn 
              type="button"
              onClick={() => {/* Handle Naver signup button click */}}
              style={{ backgroundImage: `url(${kakaoLogo})` }}
            />
          </itemS.ButtonContainer>
        </itemS.InfoBox>
        <itemS.Label></itemS.Label>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default Select;
