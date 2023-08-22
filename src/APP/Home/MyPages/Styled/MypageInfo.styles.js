import styled from "styled-components";
import * as tokens from "../../../tokens";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1279px;
`;
export const Title = styled.div`
  width: 181px;
  font-size: 40px;
  color: #649d17;
  text-align: start;
  margin-right: 1100px;
`;
export const firstcontainer = styled.div`
  width: 1270px;
  display: flex;
  text-align: start;
  border-style: solid;
  border-width: 0 0 1px 0;
  ${(props) => `border-color: ${tokens.colors.grey_15}`}
`;
export const secondcontainertitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 36px;
  ${(props) => `color: ${tokens.colors.grey_15}`}
`;
export const Main = styled.div`
  width: 1279px;
`;

export const Divs = styled.div`
  display: flex;
  width: 465px;
  height: 36px;
  justify-content: space-between;
  align-items: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  font-variant: all-small-caps;
  margin-left: 30px;
  margin-top: 40px;
  & > h3 {
    font-size: 20px;
    ${(props) => `color: ${tokens.colors.grey_15}`}
  }
  & > input {
    border-width: 1px;
    border-radius: 5px;
    width: 320px;
    height: 36px;
    /* ${(props) => `border-color: ${tokens.colors.grey_80}`} */
    border-color: "#CCCCCC";
  }
`;

export const Btns = styled.div`
  margin-top: 80px;
  width: 488px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > button {
    width: 224px;
    height: 44px;
    border-radius: 6px;
    font-size: 24px;
    font-family: "Pretendard";
    font-weight: 400;
    border: none;
    ${(props) => `color: ${tokens.colors.grey_100}`}
  }
`;
