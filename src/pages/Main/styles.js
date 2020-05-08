import styled from 'styled-components';

import { contentCdn } from '../../styles/content';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url(${contentCdn.roadBackground});
  background-position: center;
  background-repeat: repeat-x;
  filter: blur(8px) grayscale(5);
`;
