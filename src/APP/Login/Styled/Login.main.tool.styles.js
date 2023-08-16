import styled from "styled-components";
import * as tokens from "../../tokens";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const LoginContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: brown; */
  margin-top: 104px;
  margin-left: 240px;
  margin-right: 240px;
  width: 1440px;
  /* height: 545px; */
`;
export const LoginTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-left: 75px;
  font-family: "New York";
  font-size: 48px;
  ${(props) => `color: ${tokens.colors.green_main2}`}
`;
export const Name = styled.h2`
  margin-top: 36px;
  display: flex;
  width: 660px;
  justify-content: flex-start;
  color: #1a2807;
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: normal;
`;
export const Line = styled.div`
  display: flex;
  justify-content: center;
  background-color: #262626;
  width: 660px;
  height: 1px;
  margin-bottom: 60px;
`;
export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 600px;
  height: 48px;
  margin-bottom: 12px;
  font-family: "Pretendard";
  ${(props) => `border:1px solid ${tokens.colors.grey_60}`};
`;
export const Label = styled.span`
  display: flex;
  justify-content: flex-end;
  ${(props) => `color:${tokens.colors.grey_60}`};
  font-family: "Pretendard";
`;
export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    font-size: 24px;
    border-radius: 6px;
    border: none;
    width: 224px;
    height: 44px;
    font-family: "Pretendard";
    color: white;
    ${(props) => ` background-color:${tokens.colors.green_main2}`}
  }
`;
export const FindBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  margin-top: 20px;
  margin-bottom: 60px;
  ${(props) => `color:${tokens.colors.grey_60}`};
  & > button {
    margin-left: 12px;
    margin-right: 12px;
    border: none;
    background-color: white;
    font-family: "Pretendard";
    ${(props) => `color:${tokens.colors.grey_60}`};
  }
`;
export const SocialBtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 108px;
  justify-content: space-between;
`;
export const InputBtn = styled.input`
  width: 320px;
  height: 48px;
  /* border: none; */
`;
