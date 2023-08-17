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
  width: 1270px;
  /* height: 916px; */
  background-color: #fbf8f3;
  text-align: left;

  font-family: "Pretendard";
  font-size: 16px;
`;
export const ConDe = styled.div`
  /* height: 916px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ImgTi = styled.div`
  width: 1270px;
  height: 414px;
  flex-shrink: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  & > h4 {
    margin-top: 229px;
    margin-bottom: 0px;
    margin-left: 60px;
    color: var(--green-bright, #e1fcad);
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 600;
    line-height: 30px; /* 150% */
    font-variant: all-small-caps;
  }
  & > h2 {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 60px;
    color: var(--grey-100, #fff);
    font-family: "Pretendard";
    font-size: 36px;
    font-weight: 600;
    line-height: 36px; /* 100% */
    font-variant: all-small-caps;
  }
`;
export const SubTi = styled.div`
  display: flex;
  height: 64px;
  align-items: end;
  justify-content: space-between;
  width: 1150px;
  margin-left: 60px;
  & > div {
    font-family: "Pretendard";
    display: flex;
    color: var(--grey-100, #fff);
    font-weight: 600;
  }
`;

export const Text = styled.div`
  width: 1150px;
  & > h4 {
    margin-left: 60px;
    color: var(--grey-15, #262626);
    font-family: "Pretendard";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 200% */
    font-variant: all-small-caps;
  }
`;
export const H2 = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 32px;
  margin-left: 60px;
  margin-top: 40px;
  & > h2 {
    font-size: 20px;
    font-family: "Pretendard";

    margin-left: 12px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
export const Line2 = styled.div`
  height: 32px;
  width: 5px;
  background-color: var(--sub-bright, #a7c5f9);
`;
