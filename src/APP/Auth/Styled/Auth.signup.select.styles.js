import styled from 'styled-components';

export const JoinHeading = styled.h2`
  font-size: 32px;
  color: green;
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

export const ButtonContainer = styled.div`
  display: felx;
`;

// Styled button for member signups
export const SignupButton = styled.button`
  background-color: white;
  color: green;
  padding: 8px 16px;
  margin: 10px;
  border: solid 1px green;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  display: flex; 
  align-items: center; 
  justify-content: flex-start; 
  background-repeat: no-repeat;
  background-position: 10px center; 
`;

export const NaverSignupButton = styled.button`
  background-color: green;
  color: white;
  padding: 8px 16px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  display: flex; 
  align-items: center; 
  justify-content: flex-start; 
  background-repeat: no-repeat;
  background-position: 10px center; 
`;

export const KakaoSignupButton = styled.button`
  background-color: yellow;
  color: white;
  padding: 8px 16px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  display: flex; 
  align-items: center; 
  justify-content: flex-start; 
  background-repeat: no-repeat;
  background-position: 10px center; 
`;

export const LogoImage = styled.img`
  width: 24px; /* Set the desired width for the logo image */
  height: 24px; /* Set the desired height for the logo image */
  margin-right: 10px; /* Optional margin for spacing between the logo and text */
`;
