import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as tokens from '../tokens';
import * as SideNavS from './Styled/SideNav.main.styles';

//components

function SideNav(props) {
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  return (
    <SideNavS.SideNavWrapper type={props.type}>
      <SideNavS.SideNavSearchWrapper>
        <SideNavS.SideNavInputBox
          type={props.type}
          className={props.className}
        ></SideNavS.SideNavInputBox>
        
        <SideNavS.SideNavInputIcon
          type={props.type}
          className={props.className}
        ></SideNavS.SideNavInputIcon>
      </SideNavS.SideNavSearchWrapper>
      <SideNavS.SideNavList
        type={props.type}
        className={props.className}
        onClick={(e) => {
          NavClick(e, '/product');
        }}
      >
        ECO-PRODUCTS
      </SideNavS.SideNavList>
      <SideNavS.SideNavList
        type={props.type}
        className={props.className}
        onClick={(e) => {
          NavClick(e, '/store');
        }}
      >
        ECO-STORE
      </SideNavS.SideNavList>
      <SideNavS.SideNavList
        type={props.type}
        className={props.className}
        onClick={(e) => {
          NavClick(e, '/community');
        }}
      >
        COMMUNITY
      </SideNavS.SideNavList>
    </SideNavS.SideNavWrapper>
  );
}
export default SideNav;