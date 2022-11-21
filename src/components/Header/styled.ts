import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const LogoImage = styled.img`
  width: 52px;
  height: 52px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  li a{
    color: #94D2D7
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 25px 15px;
  &.active {
    font-weight: bold;
    color: #4B9495;
    border-bottom: 2px solid #4B9495;
  }
`;

export const StyledNavBtn = styled(NavLink)`
  &.btn-sign-in {
    background-color: #94D2D7;
  }
  &.btn-login {
    border: 1px solid #94D2D7;
    color: #94D2D7;
  }
`;
