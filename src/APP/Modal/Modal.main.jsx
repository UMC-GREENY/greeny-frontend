import React from 'react';
import * as Styles from './Styled/Modal.main.styles'; // Styles로 명시적으로 임포트
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose, children }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path); // 클릭한 경로로 이동
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null;

  return (
    <Styles.ModalOverlay>
      <Styles.ModalClose onClick={onClose}>&times;</Styles.ModalClose>
      <Styles.ModalContent>{children}</Styles.ModalContent>
      <Styles.ModalContents>
        <Styles.ModalContentsInner>
          <Styles.ModalContentInnerTitle>SELL</Styles.ModalContentInnerTitle>
          <Styles.ModalContentInnerLine></Styles.ModalContentInnerLine>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/select', {
                state: { type: 'product', name: '제품' },
              })
            }
          >
            ECO-PRODUCTS
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/select', {
                state: { type: 'store', name: '스토어' },
              })
            }
          >
            ECO-STORE
          </Styles.ModalContentInnerpage>
        </Styles.ModalContentsInner>
        <Styles.ModalContentsInner>
          <Styles.ModalContentInnerTitle>USER</Styles.ModalContentInnerTitle>
          <Styles.ModalContentInnerLine></Styles.ModalContentInnerLine>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/community', {
                state: { type: 'community', name: '커뮤니티' },
              })
            }
          >
            COMMUNITY
          </Styles.ModalContentInnerpage>
        </Styles.ModalContentsInner>
        <Styles.ModalContentsInner>
          <Styles.ModalContentInnerTitle>ME</Styles.ModalContentInnerTitle>
          <Styles.ModalContentInnerLine></Styles.ModalContentInnerLine>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/login', {
                state: { type: 'login', name: '로그인' },
              })
            }
          >
            LOG IN
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/select', {
                state: { type: 'select', name: '회원가입' },
              })
            }
          >
            JOIN
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/mypage', {
                state: { type: 'mypagae', name: '나의페이지' },
              })
            }
          >
            MY
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/likepage', {
                state: { type: 'likepage', name: '찜페이지' },
              })
            }
          >
            LIKE
          </Styles.ModalContentInnerpage>
        </Styles.ModalContentsInner>
        <Styles.ModalContentsInner>
          <Styles.ModalContentInnerTitle>ETC</Styles.ModalContentInnerTitle>
          <Styles.ModalContentInnerLine></Styles.ModalContentInnerLine>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/lifetip', {
                state: { type: 'lifetip', name: '생활정보' },
              })
            }
          >
            LIFE-TIP
          </Styles.ModalContentInnerpage>
        </Styles.ModalContentsInner>
      </Styles.ModalContents>
    </Styles.ModalOverlay>
  );
}

export default Modal;
