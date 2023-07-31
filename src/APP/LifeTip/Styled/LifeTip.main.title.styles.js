import styled from "styled-components";
import * as tokens from "../../tokens";

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1273px;
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
export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 33px;
`;
export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 847px;
  font-family: "New York";
  font-size: 24px;
  ${(props) =>
    `color:${tokens.colors.grey_15} ; border-bottom:1px solid ${tokens.colors.grey_15}`}
`;
export const InputWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const InputBox = styled.input`
  width: 353px;
  height: 20px;
  border: none;
  outline: none;
  font-size: 12px;
  font-family: "Pretendard";
  ${(prop) =>
    `color:${tokens.colors.grey_60}; border-bottom:1px solid ${tokens.colors.grey_15}`}
`;
export const InputIcon = styled.div`
  width: 30px;
  height: 50px;

  background-image: url("/lifetip/search.png");
  background-size: 25px 25px;
  background-position: bottom;
  background-repeat: no-repeat;
`;
export const Div3 = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-start;
  font-family: "Pretendard";
  font-size: 16px;
  ${(prop) => `color:${tokens.colors.green_deep}`}
`;
