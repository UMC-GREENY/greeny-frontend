import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Auth.signup.select.styles";
import naverLogo from './naver-logo.png';
import kakaoLogo from './kakao-logo.jpg';

function SignupSelect() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // e.preventDefault();
    navigate('/agree');
  };
  // Rest of the component code...

  return (
    <div>
      <itemS.JoinHeading>Join</itemS.JoinHeading>
      <itemS.BasicInfoHeading>회원가입</itemS.BasicInfoHeading>
      <itemS.InfoBox>
        {/* Container to align buttons to the left */}
        <itemS.ButtonContainer>
          <itemS.SignupButton onClick={handleSubmit}>일반 회원가입</itemS.SignupButton>
          <itemS.NaverSignupButton>
            {/* Naver logo on the left side of Naver signup */}
            <itemS.LogoImage src={naverLogo} alt="Naver Logo" />
            네이버 회원가입
          </itemS.NaverSignupButton>
          <itemS.KakaoSignupButton>
            {/* Kakao logo on the left side of Kakao signup */}
            <itemS.LogoImage src={kakaoLogo} alt="Kakao Logo" />
            카카오 회원가입
          </itemS.KakaoSignupButton>
        </itemS.ButtonContainer>
      </itemS.InfoBox>
    </div>
  );
}

export default SignupSelect;
