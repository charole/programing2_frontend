import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;

  & .signup-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 11px;
    color: #8e8e8e;
  }
`;

export const Image = styled.img`
  width: 128px;
  height: 128px;
`;

export const LoginButton = styled.button`
  margin-top: 20px;
  background: #4d6670;
  color: white;
  border-radius: 7px;
  padding: 10px;
  width: 100%;
`;
