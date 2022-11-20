import { NavLink } from 'react-router-dom';

import { useAtom } from 'jotai';

import { emailAtom } from '../../store/atoms/user';

import { Container, LogoImage, LogoWrapper, StyledNav, StyledNavLink } from './styled';

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
      {email ? (
        <div>
          <NavLink to='/' className='bg-blue-500 text-white p-2 rounded-sm' onClick={onLogout}>
            로그아웃
          </NavLink>
        </div>
      ) : (
        <div className='space-x-2 text-blue-500 font-sans font-medium p-3 px-0'>
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
      )}
    </Container>
  );
}
