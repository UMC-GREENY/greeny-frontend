import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as TopNavS from './Styled/TopNav.main.styles';
import Modal from '../Modal/Modal.main';
import { useRecoilValue } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';

function TopNav() {
  const isSuccess = useRecoilValue(isSuccessState);
  console.log("isSuccess",isSuccess);
  useBeforeUnload();

  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    alert(
      `${type}버튼이 클릭됐습니다. 이 함수를 활용해서 다른 페이지로 이동하게 하시면 됩니다!`
    );

    navigate(`${type}`);
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
          <TopNavS.TopNavContents onClick={() => navigate("/login")}>
            Login
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
