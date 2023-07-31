import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import * as tokens from "../tokens";
import * as TopNavS from "./Styled/TopNav.main.styles";

function TopNav() {
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    alert(
      `${type}버튼이 클릭됐습니다. 이 함수를 활용해서 다른 페이지로 이동하게 하시면 됩니다!`
    );
    navigate(`${type}`);
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
          <TopNavS.TopNavContents
            onClick={() =>
              navigate("/login", {
                state: { type: "login", name: "로그인" },
              })
            }
          >
            Login
          </TopNavS.TopNavContents>
          <TopNavS.TopNavContents
            onClick={(e) => {
              NavClick(e, "my");
            }}
          >
            My
          </TopNavS.TopNavContents>
          <TopNavS.TopNavContents
            onClick={(e) => {
              NavClick(e, "like");
            }}
          >
            Like
          </TopNavS.TopNavContents>
        </TopNavS.TopNavInfoWrapper>
      </TopNavS.TopNavContentWrapper>
      <TopNavS.TopNavContentWrapper type="sub">
        <TopNavS.SubNavItemWrapper>
          <TopNavS.TopNavSubContents
            onClick={(e) => {
              NavClick(e, "all");
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
              NavClick(e, "community");
            }}
          >
            COMMUNITY
          </TopNavS.TopNavSubContents>
          {/* 생활팁 페이지로 넘어가는페이지가 아직 구현전이라 잠시추가한 내용입니다. */}
          <TopNavS.TopNavSubContents
            onClick={(e) => {
              NavClick(e, "/lifeTip");
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
          <TopNavS.TopNavInputWrapper style={{ width: "30%" }}>
            <TopNavS.TopNavHamburger></TopNavS.TopNavHamburger>
          </TopNavS.TopNavInputWrapper>
        </TopNavS.TopNavInfoWrapper>
      </TopNavS.TopNavContentWrapper>
    </TopNavS.TopNavWrapper>
  );
}

export default TopNav;
