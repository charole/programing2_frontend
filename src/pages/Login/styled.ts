import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeeef2;
  max-width: 100%;
  width: 100%;
  position: absolute;

  & .signup-wrapper {
    display: flex;
    justify-content: flex-end;
    font-size: 11px;
    color: #8e8e8e;
    margin-top: 5px;
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
