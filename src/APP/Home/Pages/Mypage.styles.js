import styled, { css } from 'styled-components';
import * as tokens from '../../tokens';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  heigth: 44px;
  display: flex;
  text-align: start;
  border-color: black;
  border-style: solid;
  border-width: 0 0 2px 0;
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
  color: black;
  margin-bottom: 10px;
  margin-top: 36px;
`;
export const Title = styled.div`
  font-size: 40px;
  color: #649d17;
  text-align: start;
`;
export const secondcontainer = styled.div`
  display: flex;
  width: 1270px;
  height: 222px;
  flex-direction: column;
  align-items: start;
  margin-top: 40px;
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
  height: 225px;
  color: #999999;
  border-style: solid;
  border-width: 2px 0 2px 0;
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
  width: 73px;
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
