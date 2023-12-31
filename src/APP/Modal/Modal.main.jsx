import React from 'react';
import * as Styles from './Styled/Modal.main.styles'; // Styles로 명시적으로 임포트
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';

function Modal({ isOpen, onClose, children }) {
  const isSuccess = useRecoilValue(isSuccessState);
  const setIsSuccess = useSetRecoilState(isSuccessState);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path); // 클릭한 경로로 이동
    onClose(); // 모달 닫기
  };
  const handleLogout = () => {
    setIsSuccess(false);
    window.localStorage.clear();
    alert("로그아웃 되었습니다")
    navigate("/home"); // 예시로 로그아웃 후 이동하는 경로
    onClose(); // 모달 닫기
  };
  const handleJoin = () => {
    navigate('/agree', {
      // 소셜 최초 로그인 시 이동되는 약관동의 와 다른 플로우 구분 위해 type 보냄
      state: {
        email: '',
        type: 'general',
      },
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Styles.ModalOverlay>
      {/* <Styles.ModalClose onClick={onClose}>&times;</Styles.ModalClose> */}
      <Styles.ModalContent>{children}</Styles.ModalContent>
      <Styles.ModalContents>
        <Styles.ModalContentsInner>
          <Styles.ModalContentInnerTitle>SELL</Styles.ModalContentInnerTitle>
          <Styles.ModalContentInnerLine></Styles.ModalContentInnerLine>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/product', {
                state: { type: 'product', name: '제품' },
              })
            }
          >
            ECO-PRODUCTS
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage
            onClick={() =>
              handleLinkClick('/store', {
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
          <Styles.ModalContentInnerpage onClick={isSuccess ? handleLogout : () => {navigate("/login"); onClose(); }}>
            {isSuccess ? "LOG OUT" : "LOG IN"}
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage onClick={handleJoin}>
            JOIN
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage
            onClick={() => {
              if (isSuccess) {
                handleLinkClick('/mypage', {
                  state: { type: 'mypage', name: '나의페이지' },
                });
              }
            }}
          >
            MY
          </Styles.ModalContentInnerpage>
          <Styles.ModalContentInnerpage
            onClick={() => {
              if (isSuccess) {
                handleLinkClick('/likepage', {
                  state: { type: 'likepage', name: '찜페이지' },
                });
              }
            }}
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
