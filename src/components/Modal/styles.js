import styled from 'styled-components';

export const ModalContainer = styled.form`
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17rem;
  height: 12rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1rem 2rem 5rem rgba(0, 0, 0, 0.5);
`;

export const InputTitle = styled.h4`
  font-size: 2rem;
`;

export const InputDescription = styled.input`
  padding: 0.6rem;
  font-size: 0.9rem;
`;

export const StartButton = styled.button`
  background-color: #333;
  font-size: 1rem;
  height: 2.5rem;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background-color: #242424;
  }
`;
