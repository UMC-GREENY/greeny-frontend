import styled from "styled-components";
import * as tokens from "../../tokens";
export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
`;
export const Main = styled.div`
  width: 1270px;
`;
export const Title = styled.h1`
  width: 100%;
  display: flex;
  font-size: 48px;
  margin: 0px;
  font-family: "New York";
  font-weight: normal;
  justify-content: flex-start;
  margin-top: 104px;
  ${(props) => `color:${tokens.colors.green_main2}`}
`;
export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 37px;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 24px;
  ${(props) => `color:${tokens.colors.green_deep}`}
`;
export const Line = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 1270px;
  height: 1px;
  ${(props) => `background-color:${tokens.colors.grey_15}`};
`;
export const Con = styled.div`
  margin-top: 40px;
  width: 1224px;
  height: 916px;
  background-color: #fbf8f3;
  text-align: left;
  padding-top: 26px;
  padding-left: 23px;
  padding-right: 23px;
  font-family: "Pretendard";
  font-size: 16px;
`;
