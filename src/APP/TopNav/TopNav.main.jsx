import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as TopNavS from './Styled/TopNav.main.styles';
import Modal from '../Modal/Modal.main';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';

function TopNav() {
  const isSuccess = useRecoilValue(isSuccessState);
  const setIsSuccess = useSetRecoilState(isSuccessState);
  console.log("isSuccess", isSuccess);
  useBeforeUnload();

  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  
  const handleLogout = () => {
    setIsSuccess(false);
    window.localStorage.clear();
    alert("로그아웃 되었습니다")
    navigate("/home"); // 예시로 로그아웃 후 이동하는 경로
  };
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log(showModal);
  };

  const closeModal = () => {
    setShowModal(false);
    console.log(showModal);
  };

  return (
    <TopNavS.TopNavWrapper>
      <TopNavS.TopNavContentWrapper type="main">
        <TopNavS.TopNavLogo
          onClick={(e) => {
            NavClick(e, "/");
          }}
        >
          GREENY
        </TopNavS.TopNavLogo>
        <TopNavS.TopNavInfoWrapper>
          <TopNavS.TopNavContents onClick={isSuccess ? handleLogout : () => navigate("/login")}>
            {isSuccess ? "Logout" : "Login"}
          </TopNavS.TopNavContents>
          <TopNavS.TopNavContents
            onClick={(e) => {
              if (isSuccess) {
                NavClick(e, "/mypage");
              }
            }}
          >
            My
          </TopNavS.TopNavContents>
          <TopNavS.TopNavContents
            onClick={(e) => {
              if (isSuccess) {
                NavClick(e, "/likepage");
              }
            }}
          >
            Like
          </TopNavS.TopNavContents>
          <TopNavS.TopNavInputWrapper style={{ width: '30%' }}>
            <TopNavS.TopNavHamburger
              onClick={openModal}
            ></TopNavS.TopNavHamburger>
            <Modal isOpen={showModal} onClose={closeModal}>
              <TopNavS.ModalLine>
                <TopNavS.ModalButton onClick={closeModal}>
                  {'X'}
                </TopNavS.ModalButton>
              </TopNavS.ModalLine>
            </Modal>
          </TopNavS.TopNavInputWrapper>
        </TopNavS.TopNavInfoWrapper>
      </TopNavS.TopNavContentWrapper>
      
      
    </TopNavS.TopNavWrapper>
  );
}

export default TopNav;
