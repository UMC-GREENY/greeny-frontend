import styled from 'styled-components';
import * as tokens from '../../tokens';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  width: 100%;
  height: 50%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;
export const ModalContents = styled.div`
  width: 1236px;
  height: 382px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ModalContentsInner = styled.div`
  width: 264px;
  height: 382px;
  color: white;
  display: flex;
  flex-direction: column;

  margin: 60px;
`;
export const ModalContentInnerTitle = styled.div`
  font-size: 32px;
  font-weight: 568;
  margin-bottom: 30px;
`;
export const ModalContentInnerLine = styled.div`
  border-top: 1px solid;
`;
export const ModalContentInnerpage = styled.div`
  font-size: 24px;
  width: 264px;
  margin-top: 31px;
`;

export const ModalContent = styled.div`
  padding: 20px;
`;
