import styled, { css } from 'styled-components';
import * as tokens from '../../../tokens';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
  margin"-bottom: 10px;
`;
export const Title = styled.div`
  display: flex;
  align-items: start;
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
  width: 1279px
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  color: black;
  margin-top: 26px;
 

  .submenu {
    color: gray;
  }
  .focused {
    color: black;
  }
`;

export const contentscontainer = styled.div`
  width: 1279px;
  height: 666px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: gray;
  border-style: solid;
  border-width: 2px 0 2px 0;
`;
export const contentsinnercontainer = styled.div`
  width: 1216px;
  height: 520px;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const productcontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 392px;
  heigt: 160px;
  border-radius: 6px;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
`;

export const productimage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 6px;
`;

export const productinfo = styled.div`
  margin-left: 12px;
  color: black;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
export const productinfotitle = styled.div`
  font-size: 24px;
  justify-content: start;
  text-align: start;
`;
export const productinfodetail = styled.div`
  text-align: start;
  margin: 4px;

  ${(props) =>
    props.className === 'product'
      ? `
          text-align: start;
          margin-top: 4px;
          color: black;
          font-size: 16px;
        `
      : props.className === 'store'
      ? `
          text-align: start;
          width: 60px;
          height: 24px;
          text-align: center;
          color: black;
          border-radius: 5px;
          border-color: gray;
          border-style: solid;
          border-width: 1.5px;
          margin-top: 4px;
        `
      : props.className === 'store2'
      ? `
      text-align: start;
      width: 88px;
      height: 24px;
      text-align: center;
      color: black;
      border-radius: 5px;
      background-color: #D9F0AB;
      border-color: #D9F0AB;
      border-style: solid;
      margin-top:8px;
      `
      : ''}
`;
/*---------------------------------------------- */
export const PageSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1279px;
  height: 30px;
`;
export const SignupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 240px;
  margin-right: 240px;
  width: 1440px;
`;
export const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 600px;

  width: 202px;
`;

export const PaginationButton = styled.button`
  ${(props) => `
    background-color: white;
    color: black;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin: 0 2px;
    margin-top: 50px;
    outline: none;
    ${props.disabled ? 'opacity: 0.5; pointer-events: none;' : ''}
  `}
`;

export const PageNumber = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${tokens.colors.grey_900};
  border-radius: 4px;
  cursor: pointer;
  margin: 0 2px;
  margin-top: 50px;
  font-size: 14px;
  font-weight: bold;
  user-select: none;

  &:hover {
    background-color: ${tokens.colors.grey_80};
  }
`;
