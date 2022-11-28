import { NavLink } from 'react-router-dom';

import { useAtom } from 'jotai';

import { emailAtom } from '../../store/atoms/user';

import {
  Container,
  LogoImage,
  LogoWrapper,
  StyledNav,
  StyledNavBtn,
  StyledNavLink,
} from './styled';

export default function Header() {
  const [email, setEmail] = useAtom(emailAtom);
  const onLogout = () => {
    setEmail('');
  };

  return (
    <Container className='w-full top-0 bg-white flex justify-between items-center drop-shadow-md fixed z-50'>
      <LogoWrapper>
        <NavLink to='/'>
          <LogoImage src='/src/assets/logo.png' alt='로고 이미지' className='mx-2' />
        </NavLink>
        <StyledNav>
          <ul>
            <li>
              <StyledNavLink
                to='/example'
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
                to='/examples/add'
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                문제 등록
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to='/my'
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                마이 페이지
              </StyledNavLink>
            </li>
          </ul>
        </StyledNav>
      </LogoWrapper>
      {email ? (
        <div>
          <StyledNavBtn to='/' className='bg-red-500 text-white p-2 rounded-sm' onClick={onLogout}>
            로그아웃
          </StyledNavBtn>
        </div>
      ) : (
        <div className='space-x-2 text-blue-500 font-sans font-medium p-3 px-0'>
          <StyledNavBtn to='/signup' className='btn-sign-in text-white p-2 rounded-sm'>
            회원가입
          </StyledNavBtn>
          <StyledNavBtn to='/login' className='btn-login bg-white p-2 rounded-sm border'>
            로그인
          </StyledNavBtn>
        </div>
      )}
    </Container>
  );
}
