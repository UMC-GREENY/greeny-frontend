import styled from "styled-components";
import * as tokens from "../../tokens";
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1231px;
  height: 44px;

  height: ${(props) => (props.type.length === 0 ? "224px" : "44x")};
  ${(props) => `border-bottom: 1px solid ${tokens.colors.grey_80}`}
`;
export const Title = styled.div`
  display: flex;
  width: 940px;
  font-family: " Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  ${(props) => `color:${tokens.colors.grey_15}`}
`;
export const Email = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
  ${(props) => `color:${tokens.colors.grey_15}`}
`;
export const Date = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  ${(props) => `color:${tokens.colors.grey_40}`}
`;
