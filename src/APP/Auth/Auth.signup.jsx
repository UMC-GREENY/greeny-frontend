import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "./Styled/Auth.signup.styles"
import request from "./../Api/request";
import axios from 'axios';

function Signup() {
  
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  // 정규식을 이용한 유효성 검사
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  // const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
  const phoneNumberRegex = /^010-\d{4}-\d{4}$/; // 010-4자리-4자리
  const dateOfBirthRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/;
  const nameRegex = /^[A-Za-z가-힣]{2,}$/; // 최소 2글자

  // 비밀번호 유효성 검사
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const handlePasswordChange = (value) => {
    setPassword(value); 
    // 비밀번호를 정규식과 비교하여 유효성을 검사
    if (passwordRegex.test(value)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  // 비밀번호 확인 
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);
  const handlePasswordConfirmationChange = (value) => {
    setPasswordConfirmation(value);
    // 비밀번호 확인 값과 비밀번호 값이 일치하는지 확인
    if (value === password) {
      setIsPasswordConfirmed(true);
    } else {
      setIsPasswordConfirmed(false);
    }
  };

  
  // 이메일 인증 여부 추적
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState('직접입력');

  const [token, setToken] = useState('');
  
  useEffect(() => {
    // URL 쿼리에서 토큰 추출
    const queryParams = new URLSearchParams(location.search);
    const tokenFromQuery = queryParams.get('token');
    // 토큰이 존재하고 유효한지 확인
      if (tokenFromQuery) {
        const storedToken = localStorage.getItem('token');
        const storedEmail = localStorage.getItem('email');
        
        // 토큰이 유효한 경우 상태 및 이메일 입력 값을 업데이트합니다.
        setIsEmailVerified(true);
        setEmail(storedEmail);
      }
  }, [token]);
  //이메일 인증하기
  const handleEmailVerification = async () => { 
    const requestData = {
      email: email,
      authorizationUrl: "https://www.greeny.n-e.kr/signup"
    };
    await request.post('/api/auth', requestData)    
    .then(res => {
      alert("이메일을 보냈습니다. 이메일 확인하기 버튼을 눌러주세요.")
      console.log('res: ', res)
      if (res.isSuccess) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', res.data.email);
        setToken(localStorage.getItem('token'));
      } else {
        console.log("res.isSuccess",res.isSuccess);
      }
    })
    .catch(error => {
      console.log(error);
    })
  };

  //이메일 합치기
  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
    if (e.target.value !== '직접입력') {
      setEmail(email.split('@')[0] + '@' + e.target.value);
    }
  };

  // 회원가입 버튼 조건 
  const [isFormValid, setIsFormValid] = useState(true);
  const handleFormValidation = () => {
    // 필수 입력 필드가 모두 채워져 있고, 이메일이 인증된 경우 검사
    if (
      email &&
      password &&
      passwordConfirmation &&
      name &&
      phoneNumber &&
      dateOfBirth &&
      isEmailVerified &&
      isPasswordValid &&
      isPasswordConfirmed
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleCancel = () => {
    navigate("/agree", { 
      state: {
        email: "",
        type: "general"
      }
    });
  }


  const handleSubmit = async () => {
    
    if (!isEmailVerified) {
      alert("이메일로 이동 후, 이메일 확인하기 버튼을 눌러주세요.");
      return;
    }
    const personalInfo = location.state.optionalChecked;
    const thirdParty = location.state.advertisingChecked;

    try {
      const requestData = {
        email: email,
        password: password,
        name: name,
        phone: phoneNumber,
        birth: dateOfBirth
      };
  
      const response = await request.post('/api/auth/sign-up', requestData);
      console.log("response",response);
      if (response.isSuccess) {
        alert(response.message);
        navigate("/login", {
          state: { type: "login", name: "로그인" },
        })
        // 회원가입이 성공적으로 완료된 경우 동의서 제출 요청을 보냄
        try {
          const agreementData = {
            email: email,
            personalInfo: personalInfo,
            thirdParty: thirdParty,
          };

          const agreementResponse = await request.post('/api/auth/sign-up/agreement', agreementData);
          console.log("agreementResponse", agreementResponse);

          if (agreementResponse.isSuccess) {
            console.log("동의서 제출 성공.");
          } else {
            console.log("동의서 제출 실패.");
          }
        } catch (agreementError) {
          console.error('동의서 제출 오류: ', agreementError);
        }
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('API 요청 오류: ', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }

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
              disabled={isEmailVerified} // 이메일이 인증된 경우 입력 비활성화
            />
            <span>@</span>
            <itemS.Select
              value={selectedDomain}
              onChange={handleDomainChange}
            >
              <option value="직접입력">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
            </itemS.Select>
            <itemS.ConfirmButton 
            onClick={handleEmailVerification}
            disabled={isEmailVerified} // 이메일이 인증된 경우 버튼 비활성화
            >
              {isEmailVerified ? "이메일 인증 완료" : "이메일 인증하기"}
            </itemS.ConfirmButton>
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.PwdLabel>비밀번호</itemS.PwdLabel>
            <itemS.Input
              type="password"
              placeholder="특수문자 1개 이상, 영문+숫자, 15자 이내"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              disabled={!isEmailVerified}
            />
          </itemS.InputContainer>
          {!isPasswordValid && password.length > 0 && (
            <itemS.ErrorMessage>
              * 특수문자 1개 이상, 영문+숫자, 15자 이내로 설정해주세요.
            </itemS.ErrorMessage>
          )}
          <itemS.InputContainer>
            <itemS.PwdConfirmLabel>비밀번호 확인</itemS.PwdConfirmLabel>
            <itemS.Input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirmation}
              onChange={(e) => handlePasswordConfirmationChange(e.target.value)}
              disabled={!isEmailVerified}
            />
          </itemS.InputContainer>
          {!isPasswordConfirmed && passwordConfirmation.length > 0 && (
            <itemS.ErrorMessage>
              * 비밀번호가 일치하지 않습니다.
            </itemS.ErrorMessage>
          )}
          <itemS.InputContainer>
            <itemS.NameLabel>이름</itemS.NameLabel>
            <itemS.Input
              type="text"
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEmailVerified}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.NumLabel>휴대폰 번호</itemS.NumLabel>
            <itemS.Input
              type="text"
              placeholder="000-0000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={!isEmailVerified}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.BirthLabel>생년월일</itemS.BirthLabel>
            <itemS.Input
              type="text"
              placeholder="0000-00-00"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              disabled={!isEmailVerified}
            />
          </itemS.InputContainer>
          <itemS.ButtonContainer>
          <itemS.CancelButton onClick={handleCancel}>취소하기</itemS.CancelButton>
            <itemS.SignupButton
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
            회원가입</itemS.SignupButton>
          </itemS.ButtonContainer>
        </itemS.InfoBox>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default Signup;
