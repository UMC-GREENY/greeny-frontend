import styled from 'styled-components';
import * as tokens from '../../tokens';

export const SideNavWrapper = styled.div`
  /* margin-left: 69px;
    height: 272px;
    width: 190px; */
  position: absolute;
  margin-left: 69px;
  height: 272px;
  width: 190px;
  z-index: 50;
  gap: 20px;

  ${(props) =>
    props.type === 'main'
      ? `
            

`
      : ` 
      margin-top: 94px;
            `}
`;

export const SideNavSearchWrapper = styled.div`
  width: 126px;
  height: 44px;
  display: flex;
`;

export const SideNavInputBox = styled.input`
  font-family: Pretendard;
  width: 80%;
  height: 20px;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 4px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => (props.type === 'main' ? '#FFFFFF' : '')};
  border-bottom: ${(props) =>
    props.type === 'main' ? '1px solid #FFFFFF' : '1px solid #000000'};

  &.whitest {
    font-family: Pretendard;
    width: 80%;
    height: 20px;
    margin-top: 13px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 4px;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-color: white;
  }

  &.blackst {
    font-family: Pretendard;
    width: 80%;
    height: 20px;
    margin-top: 13px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 4px;
    border: none;
    outline: none;
    background-color: transparent;
    color: black;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-color: black;
  }
`;

export const SideNavInputIcon = styled.div`
  width: 30px;
  height: 50px;
  background-image: ${(props) =>
    props.type === 'main'
      ? 'url("/topnavbar/searchIconWhite.png");'
      : 'url("/topnavbar/searchIcon.png");'};
  background-size: 25px 25px;
  background-position: center;
  background-repeat: no-repeat;

  &.whitest {
    color:white
    width: 30px;
    height: 50px;
    background-image: url("/topnavbar/searchIconWhite.png");
    background-size: 25px 25px;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.blackst {
    width: 30px;
    height: 50px;
    background-image:url("/topnavbar/searchIcon.png");
    background-size: 25px 25px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const SideNavList = styled.div`
  display: flex;
  height: 36px;
  padding: 10px;
  ${tokens.typography.s_title}
  margin-top: 20px;
  font-family: New York;
  color: ${(props) => (props.type === 'main' ? '#FFFFFF' : '')};
  cursor: pointer;

  &.whitest {
    display: flex;
    height: 36px;
    padding: 10px;
    ${tokens.typography.s_title}
    margin-top: 20px;
    font-family: New York;
    cursor: pointer;
    color: white;
  }

  &.blackst {
    display: flex;
    height: 36px;
    padding: 10px;
    ${tokens.typography.s_title}
    margin-top: 20px;
    font-family: New York;
    cursor: pointer;
    color: black;
  }
`;
