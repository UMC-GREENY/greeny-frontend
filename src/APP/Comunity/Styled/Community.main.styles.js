import styled from "styled-components";
import * as tokens from "../../tokens";

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
  align-items: left;
  margin-top: 0px;
  margin-left: 240px;
  margin-right: 240px;
  padding-bottom: 104px;
  width: 1270px;
`;

export const Title = styled.h1`
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
  font-family: "New York";
  font-size: 24px;
  margin-top: 36px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  width: 1230px;
  height: 1px;
  margin-bottom: 10px;
  ${(props) => `background-color: ${tokens.colors.grey_80}`};
`;

export const InfoBox = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
`;

export const MoreWrap = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  font-family: 'Pretendard'; 
  color:${tokens.colors.grey_60};
`

export const ContentWrapper = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1270px;
  height: 44px;
  padding-bottom: 10px;
  margin-top: 50px;
  border-bottom: 1px solid black;
`;

export const InfoLine = styled.div`
  font-family: 'Pretendard'; 
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const PostStar = styled.div`
  font-size: 16px;
  text-align: left;
  width: 250px;
  margin-right: 20px;
`;

export const PostContent = styled.div`
  font-size: 16px;
  text-align: left;
  width: 800px;
  margin-right: 20px;
  ${(props) => `color: ${tokens.colors.grey_15}`};
`;

export const PostTitle = styled.div`
  font-size: 16px;
  text-align: left;
  width: 1070px;
  ${(props) => `color: ${tokens.colors.grey_15}`};
`;

export const PostEmail = styled.div`
  font-size: 14px;
  text-align: left;
  margin-right: 40px;
  width: 160px;
  ${(props) => `color: ${tokens.colors.grey_15}`};
`;

export const PostDate = styled.div`
  font-size: 14px;
  text-align: left;
  margin-right: 0px;
  width: 130px;
  ${(props) => `color: ${tokens.colors.grey_40}`};
`;
