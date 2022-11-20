import styled from 'styled-components';

export const Container = styled.div`
  background: #1976d2;
  padding: 1rem;
  border-radius: 10px;
`;

export const Head = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #fff;
  padding: 0.75rem;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  background: #398ada;
`;

export const BottomClearExam = styled.div`
  width: 100%;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
