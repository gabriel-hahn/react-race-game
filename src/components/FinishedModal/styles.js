import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

export const InputTitle = styled.h4`
  font-size: 2rem;
  color: #fff;
`;
