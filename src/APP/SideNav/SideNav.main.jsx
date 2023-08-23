import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as tokens from "../tokens";
import * as SideNavS from "./Styled/SideNav.main.styles";

//components

function SideNav(props) {
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    alert(
      `${type}버튼이 클릭됐습니다. 이 함수를 활용해서 다른 페이지로 이동하게 하시면 됩니다!`
    );
    navigate(`${type}`);
  };
  return (
    <SideNavS.SideNavWrapper type={props.type}>
      <SideNavS.SideNavSearchWrapper>
        <SideNavS.SideNavInputBox type={props.type}></SideNavS.SideNavInputBox>
        <SideNavS.SideNavInputIcon
          type={props.type}
          onClick={() => navigate("/search")}
        ></SideNavS.SideNavInputIcon>
      </SideNavS.SideNavSearchWrapper>
      <SideNavS.SideNavList
        type={props.type}
        onClick={(e) => {
          NavClick(e, "/product");
        }}
      >
        ECO-PRODUCTS
      </SideNavS.SideNavList>
      <SideNavS.SideNavList
        type={props.type}
        onClick={(e) => {
          NavClick(e, "/store");
        }}
      >
        ECO-STORE
      </SideNavS.SideNavList>
      <SideNavS.SideNavList
        type={props.type}
        onClick={(e) => {
          NavClick(e, "/community");
        }}
      >
        COMMUNITY
      </SideNavS.SideNavList>
    </SideNavS.SideNavWrapper>
  );
}
export default SideNav;
