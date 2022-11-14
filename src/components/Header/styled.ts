import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
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
`;

export const StyledNavLink = styled(NavLink)`
  padding: 25px 15px;
  &.active {
    font-weight: bold;
    color: rgb(59 130 246 / var(--tw-bg-opacity));
    border-bottom: 2px solid rgb(59 130 246 / var(--tw-bg-opacity));
  }
`;
