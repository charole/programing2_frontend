import { NavLink } from 'react-router-dom';

import { Container, LogoWrapper, StyledNav, StyledNavLink } from './styled';

export default function Header() {
  return (
    <Container className='w-full absolute top-0 bg-white flex justify-between items-center drop-shadow-md'>
      <LogoWrapper>
        <NavLink to='/'>
          <span>logo</span>
        </NavLink>
        <StyledNav>
          <ul>
            <li>
              <StyledNavLink
                to='/example'
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                문제
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to='/rank'
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                랭킹
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to='/example/add'
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                문제 등록
              </StyledNavLink>
            </li>
          </ul>
        </StyledNav>
      </LogoWrapper>
      <div className='space-x-2 text-blue-500 font-sans font-medium p-3'>
        <NavLink to='/signup' className='bg-blue-500 text-white p-2 rounded-sm'>
          회원가입
        </NavLink>
        <NavLink
          to='/login'
          className='bg-white border-blue-500 text-blue-500 p-2 rounded-sm border'
        >
          로그인
        </NavLink>
      </div>
    </Container>
  );
}
