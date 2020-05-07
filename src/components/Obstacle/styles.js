import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ObstacleImage = styled.img`
  width: ${(props) => `${props.position * 2}rem`};
  margin-top: ${(props) => `${props.position * 2.5}rem`};
  margin-left: ${(props) => `${props.roadPosition * 2}rem`};
`;
