import styled from "styled-components";
import * as tokens from "../../tokens";
export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1270px;
`;
export const Main = styled.div`
  width: 100%;
  margin-bottom: 90px;
  height: 1323px;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  ${(prop) => `background-color:${tokens.colors.grey_95}`}
`;
export const MainCon = styled.div`
  width: 1054px;

  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Number = styled.div`
  margin-top: 65px;
  display: flex;
  justify-content: space-between;
  width: 86px;
  height: 26px;
`;
export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1054px;
  margin-bottom: 10px;
`;
export const Black = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50px;
  font-family: "Pretendard";
  font-size: 12px;
  ${(prop) =>
    `background-color:${tokens.colors.green_deep};color:${tokens.colors.grey_100}`}
`;
export const NonBlack = styled.button`
  background-color: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  font-family: "Pretendard";
  font-size: 12px;
  ${(prop) => `color:${tokens.colors.grey_60}`}
`;
