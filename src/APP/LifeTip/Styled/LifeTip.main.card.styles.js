import styled from "styled-components";
import * as tokens from "../../tokens";
export const Div = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  width: 330px;
  height: 532px;
  ${(prop) =>
    `border:1px solid ${tokens.colors.grey_80}; background-color:${tokens.colors.grey_95}`}
`;
export const Img = styled.div`
  width: 330px;
  height: 390px;
  overflow: hidden;
  margin: 0 auto;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Title = styled.div`
  text-align: left;
  width: 290px;
  height: 80px;
  margin-top: 12px;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 20px;
  ${(prop) => `color:${tokens.colors.green_deep}`}
`;
export const Div2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 45px;
  margin-top: 15px;
  font-family: "Pretendard";
  font-weight: normal;
  & > h5 {
    width: 98px;
    font-size: 12px;
    ${(prop) => `color:${tokens.colors.grey_60}`}
  }
  & > button {
    width: 130px;
    display: flex;
    font-family: "Pretendard";
    border-radius: 0px 0px 6px 0px;
    justify-content: space-around;
    align-items: center;
    border: none;
    background-color: ${tokens.colors.grey_95};
    & > h3 {
      text-decoration: underline;
      font-size: 16px;
      ${(prop) => `color:${tokens.colors.green_main2}`}
    }
    & > h4 {
      font-size: 16px;
      ${(prop) => `color:${tokens.colors.green_main2}`}
    }
  }
`;
