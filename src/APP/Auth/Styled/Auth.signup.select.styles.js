import styled from 'styled-components';

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SignupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 104px;
  margin-left: 240px;
  margin-right: 240px;
  width: 1400px;
`;

export const JoinHeading = styled.div`
  color: #649D17;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-left: 75px;
  font-family: "New York";
  font-size: 48px;
`;

export const Label = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  padding-bottom: 10px;
  display: flex;
  width: 660px;
  justify-content: flex-start;
  
  font-size: 24px;
  font-family: "regular";
  font-weight: normal;
  border-bottom: 1px solid black;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  background-color: #262626;
  width: 660px;
  height: 1px;
  margin-bottom: 60px;
`;

export const InfoBox = styled.div`
  padding: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 168px;
    justify-content: space-between;
`;

export const SignupButton = styled.button`
  background-color: white;
  color: #649D17;
  padding: 8px 16px;
  border: solid 1px #649D17;
  border-radius: 5px;
  cursor: pointer;
  width: 320px;
  height: 48px; 
  background-size: cover;
  background-position:center;  
`;

export const InputBtn = styled.button`
  border-radius: 5px;
  cursor: pointer;
  width: 320px;
  height: 48px;
  border: none;
  background-size: cover;
  background-position:center; 
`;

export const SocialBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 108px;
  justify-content: space-between;
`;

