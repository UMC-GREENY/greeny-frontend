import styled from 'styled-components';
import * as tokens from '../../tokens';

export const BannerWrap = styled.div`
  position: relative;
  background: beige;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1440px;
  height: 900px;
`;
export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MainText = styled.div`
  &.whitest {
    color: white;
    font-family: New York;
    font-size: 48px;
    font-weight: 550;
    line-height: 73px;
    letter-spacing: 0em;
    position: absolute;
    top: 211px;
    right: 240px;
    width: 600px;
    height: 328px;
    text-align: right;
  }

  &.blackst {
    color: black;
    font-family: New York;
    font-size: 48px;
    font-weight: 550;
    line-height: 73px;
    letter-spacing: 0em;
    position: absolute;
    top: 211px;
    right: 240px;
    width: 600px;
    height: 328px;
    text-align: right;
  }
`;
export const SideNavWrap = styled.div`
  margin-top: 94px;
  position: absolute;
`;

export const LinkWrapperr = styled.div`
  &.whitest {
    color: white;
    position: absolute;
    top: 600px;
    right: 240px;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    border-style: solid;
    border-width: 0 0 2px 0;
  }

  &.blackst {
    color: black;
    position: absolute;
    top: 600px;
    right: 240px;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    border-style: solid;
    border-width: 0 0 2px 0;
  }
`;
