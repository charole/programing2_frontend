import styled from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  margin: auto;
  width: 400px;
  position: relative;
  text-align: ${({ align }) => align};
`;

export const Body = styled.div`
  padding: 16px;
  background: white;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
