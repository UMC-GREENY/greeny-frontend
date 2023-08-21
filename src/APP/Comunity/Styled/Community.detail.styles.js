import styled from "styled-components";
import * as tokens from "../../tokens";
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const SignupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 104px;
  margin-left: 240px;
  margin-right: 240px;
  width: 1440px;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 48px;

  font-family: "New York";
  font-weight: normal;
  justify-content: flex-start;
  margin-top: 104px;
  ${(props) => `color:${tokens.colors.green_main2}`};
`;
export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "New York";
  font-size: 24px;
  margin-top: 36px;
  padding-bottom: 16px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 44px;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;
export const ListButton = styled.button`
  background-color: white;
  width: 86px;
  height: 29px;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Pretendard";
  ${(props) => `border: 1px solid ${tokens.colors.grey_80}`};
  ${(props) => `color: ${tokens.colors.grey_60}`};
`;
export const Ti = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  border: none;
`;
export const Name = styled.div`
  margin-top: 40px;
  display: flex;
  width: 975px;
  font-family: "Pretendard";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  line-height: 30px; /* 93.75% */
  font-variant: all-small-caps;
  ${(props) => `color: ${tokens.colors.grey_15}`}
`;
export const PostEmail = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  font-variant: all-small-caps;
  ${(props) => `color: ${tokens.colors.grey_15}`};
`;

export const PostDate = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  font-variant: all-small-caps;
  ${(props) => `color: ${tokens.colors.grey_40}`};
`;
export const Pic = styled.div`
  margin-top: 80px;
  /* width: 620px;
  height: 465px; */
  flex-shrink: 0;
  border-radius: 5px;
  background: #d9d9d9;
  width: 566px;
  height: 424px;

  overflow: hidden;
  overflow: hidden;
`;

export const Text = styled.div`
  margin-top: 80px;
  width: 1440px;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  font-variant: all-small-caps;
`;
export const ConTi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  width: 1440px;
  ${(props) => `border-bottom: 1px solid ${tokens.colors.grey_15}`};
`;
export const One = styled.div`
  display: flex;
  width: 98px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    width: 43px;
    height: 24px;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Co = styled.div`
  margin-top: 30px;
  width: 1182px;
`;
export const Commend = styled.div`
  text-align: left;
  margin-top: 12px;
  padding-bottom: 12px;
  stroke-width: 1px;
  ${(props) => `border-bottom: 1px solid ${tokens.colors.grey_80}`};
  ${(props) => `color: ${tokens.colors.grey_15}`};
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  font-variant: all-small-caps;
`;
export const Who = styled.div`
  width: 1182px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  font-variant: all-small-caps;
  & > div {
    ${(props) => `color: ${tokens.colors.grey_40}`};
  }
`;
export const Write = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 1250px;
  height: 106px;
  flex-shrink: 0;
  border-radius: 5px;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  font-variant: all-small-caps;
  margin-bottom: 84px;
  ${(props) => `color: ${tokens.colors.grey_40}`};
  & > button {
    display: flex;
    width: 185px;
    height: 106px;
    padding: 4px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 4px;
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px; /* 131.25% */
    text-transform: uppercase;
    ${(props) => `background-color: ${tokens.colors.green_deep}`};
    ${(props) => `color: ${tokens.colors.grey_100}`};
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: "1031px";
  border-radius: 5px;
  ${(props) => `border: 1px solid ${tokens.colors.grey_60}`};
  & > div {
    margin-left: 10px;
    width: 1000px;
    text-align: left;
  }
`;
export const Memtion = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  width: 1000px;
  height: 64px;
  border: none;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  font-variant: all-small-caps;
  ${(props) => `color: 1px solid ${tokens.colors.grey_15}`};
`;
