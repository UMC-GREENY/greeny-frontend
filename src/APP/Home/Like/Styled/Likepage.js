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
  background-color: yellow;
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
  cursor: pointer;
 

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
  height: 175px;
  border-radius: 6px;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 8px;
`;

export const productimage = styled.div`
  width: 170px;
  height: 175px;
  border-radius: 6px;
  object-fit: cover;
`;

export const productimagereal = styled.img`
  width: 175px;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`;

export const productinfo = styled.div`
  margin-left: 12px;
  color: black;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 200px;
`;
export const productinfotitle = styled.div`
  justify-content: start;
  text-align: start;
  margin-top: 5px;
  font-family: Pretendard;
  white-space: normal;
`;
export const productinfodetail = styled.div`
  /* 공통 스타일 */
  text-align: start;
  margin: 4px;

  /* type이 'product'일 때의 스타일 */
  &.product {
    text-align: start;
    margin-top: 20px;
    color: black;
    font-size: 16px;
    font-family: Pretendard;
  }

  /* type이 'store'일 때의 스타일 */
  &.store {
    text-align: start;
    width: 60px;
    height: 24px;
    text-align: center;
    color: black;
    border-radius: 5px;
    border-color: gray;
    border-style: solid;
    border-width: 1.5px;
    margin-top: 20px;
    font-family: Pretendard;
  }
`;

export const productinfodetail2 = styled.div`
  /* 공통 스타일 */
  text-align: start;
  margin: 4px;

  /* type이 'product'일 때의 스타일 */
  &.product {
    text-align: start;
    margin-top: 4px;
    color: black;
    font-size: 16px;
    font-family: Pretendard;
  }

  /* type이 'store'일 때의 스타일 */
  &.store {
    text-align: start;
    width: 100px;
    height: 24px;
    text-align: center;
    color: black;
    border-radius: 5px;
    background-color: #d9f0ab;
    border-color: #d9f0ab;
    border-style: solid;
    margin-top: 8px;
    font-family: Pretendard;
  }
`;
export const lastcontainer = styled.div`
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
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
