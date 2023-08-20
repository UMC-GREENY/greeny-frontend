import styled from "styled-components";
import * as tokens from "../../tokens";

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.type === "best"
      ? `
`
      : ` 
            `}
`;

export const overline = styled.div`
  height: 1px;
  border: 1px;
  ${(props) =>
    props.type === "long"
      ? `
        width: 1440px;
        background-color: ${tokens.colors.grey_80};
        margin: 120px 0 120px 0;
`
      : props.type === "sero"
      ? ` 
            height: 24px;
            width: 1px;
            background-color: ${tokens.colors.grey_70};

            `
      : ` 
        width: 100px;
        background-color: ${tokens.colors.green_main2};
            `}
`;

export const TitleText = styled.span`
  font-family: New York;
  color: ${tokens.colors.green_main2};
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  margin: 0 22px 0 22px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;

  ${(props) =>
    props.type === "best"
      ? `
        width: 1264px;
        height: auto;
        border-radius: 6px;
        border: 1px;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 60px;
`
    : props.type === "all"
      ? `
        width: 1264px;
        height: auto;
        border-radius: 6px;
        border: 1px;
        justify-content: space-between;
        flex-wrap: wrap;
`
      : ` 
        margin-top: 60px;
        width: 100%;
        height: 628px;
        background-color: ${tokens.colors.sub_light};
        border-radius: 5px;
        justify-content: space-around;
        margin-bottom: 188px;
            `}
`;

export const SortContainer = styled.div`
  width: 124px;
  gap: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 36px 0 0 1120px;
`;

export const SortText = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
  :active {font-weight: 600;};
`;

export const PaginationWrapper = styled.div`
    .pagination { display: flex; justify-content: center; margin-top: 15px;}
    ul { list-style: none; padding: 0; }
    ul.pagination li {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
    width: 26px;
    height: 26px;
    border-radius: 99%;
    font-size: 12px;
    line-height: 18px;
    border: none;}
    margin: 30px 0 142px 0 ;
    ul.pagination li.active a { color: ${tokens.colors.grey_100}; }
    ul.pagination li.active { background-color: ${tokens.colors.green_deep}; }
    ul.pagination li a {text-decoration-line: none; color: ${tokens.colors.grey_60};}
`
