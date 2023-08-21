import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Auth.signup.select.styles";
import naverLogo from './naver-logo.png';
import kakaoLogo from './kakao-logo.png';

function SignupSelect() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // e.preventDefault();
    navigate("/agree", { // 소셜 최초 로그인 시 이동되는 약관동의 와 다른 플로우 구분 위해 type 보냄
      state: {
        email: "",
        type: "general"
      }
    });
  };
  // Rest of the component code...

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Join</itemS.Title>
        <itemS.SubTitle>회원가입</itemS.SubTitle>
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
        <itemS.SubTitle></itemS.SubTitle>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default SignupSelect;
