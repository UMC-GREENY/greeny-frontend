import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as TopNavS from './Styled/TopNav.main.styles';
import Modal from '../Modal/Modal.main';
import { useRecoilValue } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';
import useBeforeUnload from '../Custom/useBeforeUnload';

function TopNav() {
  const isSuccess = useRecoilValue(isSuccessState);
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
        </TopNavS.TopNavInfoWrapper>
      </TopNavS.TopNavContentWrapper>
      <TopNavS.TopNavContentWrapper type="sub">
        <TopNavS.SubNavItemWrapper>
          <TopNavS.TopNavSubContents
            onClick={() => {
              navigate();
            }}
          >
            ALL
          </TopNavS.TopNavSubContents>
          <TopNavS.TopNavSubContents
            onClick={(e) => {
              NavClick(e, "eco-products");
            }}
          >
            ECO-PRODUCTS
          </TopNavS.TopNavSubContents>
          <TopNavS.TopNavSubContents
            onClick={(e) => {
              NavClick(e, "eco-store");
            }}
          >
            ECO-STORE
          </TopNavS.TopNavSubContents>
          <TopNavS.TopNavSubContents
            onClick={(e) => {
              // NavClick(e, 'community');
              navigate("/community");
            }}
          >
            COMMUNITY
          </TopNavS.TopNavSubContents>
          {/* 생활팁 페이지로 넘어가는페이지가 아직 구현전이라 잠시추가한 내용입니다. */}
          <TopNavS.TopNavSubContents
            onClick={(e) => {
              // NavClick(e, '/lifeTip');
              navigate('/lifeTip');
            }}
          >
            TIP
          </TopNavS.TopNavSubContents>
          {/* 여기까지 잠시 추가 */}
        </TopNavS.SubNavItemWrapper>
        <TopNavS.TopNavInfoWrapper>
          <TopNavS.TopNavInputWrapper>
            <TopNavS.TopNavInputBox></TopNavS.TopNavInputBox>
            <TopNavS.TopNavInputIcon></TopNavS.TopNavInputIcon>
          </TopNavS.TopNavInputWrapper>
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
