import styled, { css } from 'styled-components';
import * as tokens from '../../tokens';

export const totalcontainer = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 73px;
`;
export const firstcontainer = styled.div`
  width: 80%;
  heigth: 44px;
  text-align: start;
  border-color: black;
  border-style: solid;
  border-width: 0 0 2px 0;
`;
export const firstcontainerfont = styled.h4`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;
export const Login = styled.div`
  font-size: 40px;
  color: #649d17;
`;
export const secondcontainer = styled.div`
  display: flex;
  width: 80%;
  height: 48px;
  flex-direction: row;
  align-items: center;
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
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 225px;
  color: #999999;
  border-style: solid;
  border-width: 2px 0 2px 0;
`;

export const tabwrapper = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;

  .submenu {
    color: gray;
  }
  .focused {
    color: black;
  }
`;

export const contentscontainer = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  border-color: gray;
  border-style: solid;
  border-width: 2px 0 2px 0;
`;

export const productcontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 392px;
  heigt: 40px;
  border-radius: 6px;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  margin: 20px;
`;

export const productimage = styled.img`
  width: 45%;
  border-radius: 6px;
`;

export const productinfo = styled.div`
  margin-left: 12px;
  color: black;
  flex-direction: column;
`;
export const productinfodetail = styled.div`
  text-align: start;
  margin: 4px;
`;
