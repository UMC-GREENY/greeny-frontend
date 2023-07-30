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
