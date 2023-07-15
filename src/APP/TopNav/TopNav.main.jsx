import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as tokens from "../tokens";
import * as TopNavS from "./Styled/TopNav.main.styles";

function TopNav() {
	const NavClick = (e, type) => {
		e.preventDefault();
		alert(
			`${type}버튼이 클릭됐습니다. 이 함수를 활용해서 다른 페이지로 이동하게 하시면 됩니다!`
		);
	};
	return (
		<TopNavS.TopNavWrapper>
			<TopNavS.TopNavContentWrapper type="main">
				<TopNavS.TopNavLogo>GREENY</TopNavS.TopNavLogo>
				<TopNavS.TopNavInfoWrapper>
					<TopNavS.TopNavContents
						onClick={(e) => {
							NavClick(e, "login");
						}}
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
