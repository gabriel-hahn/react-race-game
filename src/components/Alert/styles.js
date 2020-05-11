import styled from 'styled-components';

export const AlertContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const AlertText = styled.h2`
  font-size: 10rem;
  color: #fff;
`;
