import styled, { css } from 'styled-components';
import * as tokens from '../../../tokens';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-family: 'Pretendard';
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1279px;
`;
export const totalcontainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 73px;
  margin-top: 20px;
`;
export const firstcontainer = styled.div`
  width: 1270px;
  display: flex;
  text-align: start;
  border-style: solid;
  border-width: 0 0 1px 0;
  ${(props) => `border-color: ${tokens.colors.grey_15}`}
`;
export const firstcontainerbutton = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 1150px;
  justify-content: start;
  align-items: start;
  font-size: 24px;
  margin-top: 36px;
`;
export const secondcontainertitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 36px;
  ${(props) => `color: ${tokens.colors.grey_15}`};
  font-family: 'New York';
`;
export const Title = styled.div`
  width: 181px;
  font-size: 40px;
  color: #649d17;
  text-align: start;
  margin-right: 1100px;
  font-family: 'New York';
`;
export const secondcontainer = styled.div`
  display: flex;
  width: 1270px;
  height: 300px;
  flex-direction: column;
  align-items: start;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const styledInput_pw = styled.input`
  width: 50%;
  height: 80%;
  border-color: gray;
`;
export const styledButton = styled.button`
  border-radius: 6px;
  width: 20%;
  height: 80%;
  background-color: #649d17;
  text-align: center;
  margin-left: 20px;
  color: white;
`;

export const thirdcontainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 240px;
  color: #999999;
  border-style: solid;
  border-width: 2px 0 2px 0;
  padding: 20px 0 20px;
`;
export const mycontents = styled.div`
  height: 30px;
  width: 1231px;
  display: flex;
  text-align: start;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: gray;
  margin: 12px;
`;

export const contentstitle = styled.div`
  width: 940px;
  color: black;
  font-size: 14px;
`;
export const contentsemail = styled.div`
  width: 160px;
  color: black;
  font-size: 14px;
`;
export const contentsdate = styled.div`
  width: 160px;
  color: gray;
  font-size: 14px;
`;

export const reviewstar = styled.div`
  width: 120px;
  height: 24px;
`;

export const MoreButton = styled.button`
  ${(props) => `background-color: ${tokens.colors.grey_900}`};
  ${(props) => `color: ${tokens.colors.grey_100}`};
  width: 88px;
  height: 29px;
  border: none;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 4px;
`;

export const lastcontainer = styled.div`
  width: 188px;
  height: 32px;
  margin-top: 225px;
  display: flex;
  flex-direction: row;
`;
export const lastbutton = styled.div`
  width: 90px;
  height: 32px;
  color: black;
`;
export const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
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
    border: none;
  }
  ul.pagination li.active a {
    color: ${tokens.colors.grey_100};
  }
  ul.pagination li.active {
    background-color: ${tokens.colors.green_deep};
  }
  ul.pagination li a {
    text-decoration-line: none;
    color: ${tokens.colors.grey_60};
  }
`;

export const SideNavSearchWrapper = styled.div`
  width: 391px;
  height: 44px;
  display: flex;
  background-color: yellow;
`;

export const SideNavInputBox = styled.input`
  width: 353px;
  height: 20px;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 4px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: ${(props) =>
    props.type === 'main' ? '1px solid #FFFFFF' : '1px solid #000000'};
`;
