import styled, { css } from "styled-components";
import * as tokens from "../../tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-bottom: 126px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  margin-left: 240px;
  margin-right: 240px;
  width: 1270px;
  & > h2 {
    display: flex;
    text-align: left;
    color: var(--grey-15, #262626);
    font-family: "New York";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; /* 150% */
    ${(props) => `color:${tokens.colors.grey_15}`}
  }
`;
export const Box = styled.div`
  width: 1270px;
  height: 176px;
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: ${(props) => (props.type.length === 0 ? "224px" : "174x")};
  ${(props) => `border-bottom: 1px solid ${tokens.colors.grey_15}`}
`;
export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
  height: 44px;
  ${(props) => `color:  ${tokens.colors.grey_70}`}
`;
export const Btn = styled.button`
  background-color: white;
  border: none;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 98px;
  height: 44px;
  text-align: right;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  ${(props) => `color: ${tokens.colors.grey_40}`}
`;
export const StyleSelect = styled.select`
  border-radius: 6px;
  padding-left: 5px;
  /* Subheading/Subheading */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  ${(props) => `border: ${tokens.colors.grey_70}`}
  ${(props) =>
    props.name === "location" &&
    css`
      width: 63px;
      height: 32px;
      color: ${tokens.colors.grey_70};
      margin-right: 12px;
    `}

  ${(props) =>
    props.name === "category" &&
    css`
      width: 175px;
      height: 32px;
      color: ${tokens.colors.grey_70};
    `}
`;
export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1264px;
  height: auto;
  border-radius: 6px;
  border: 1px;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  margin-top: 60px;
`;
export const Alert = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
